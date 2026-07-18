/**
 * @license
 * Copyright 2024-2026: JOrE20
 * SPDX-License-Identifier: MIT
*/

const VERSION = "v0.1";
const VERSION_PARTS = [0,1];

function compile(code) {
    let lines = ['"use strict";', "let s=[],r=[0,0,0,1],a,b,c,o='',i=0,n=0,k=argv?.join('\\x00'),g=(a,b)=>b?g(b,a%b):a;"];

    const openers = new Set("LQG&ZT[{qt");
    const closer = {
        L:"*",
        Q:"*",
        G:"*",
        "&":"*",
        Z:"*",
        T:"*",
        q:"}",
        "[":"]",
        "{":"}",
		t:"*"
    };
    
    let stack = [];
    
    for (const ch of code) {
        if (openers.has(ch)) {
            stack.push(closer[ch]);
        } else if (ch == "*" || ch == "]" || ch == "}") {
            if (stack.at(-1) == ch)
                stack.pop();
        }
    }
	
    while (stack.length) code += stack.pop();
	
	let transformedCode = "";
	
	for (const ch of code) {
		if (ch.codePointAt() > 160) {transformedCode += "," + (ch.codePointAt() - 151) + ","} else
		transformedCode += ch;
	}
	
	code = transformedCode;

	let ops = {};

	function impl(ch, code) {
	    ops[ch] = code;
	}

	impl('$', 'r[0]+=r[3];');
	impl('-', 'r[0]-=r[3];');
	impl('[', 'for(a=r[1];a--;){');
	impl(']', '};');
	impl('}', '};');
	impl('*', '};');
	impl('{', 'while(r[1]){');
	impl('q', 'for(a=r[0],b=r[2];a<=b;a++){r[1]=a;');
	impl('L','for(a=1,b=r[0];a<=b;a++){r[1]=a;');
	impl('t','for(a=0,b=r[0];a<b;a++){r[1]=a;');
	impl('@', 'r[0]=0;');
	impl('G', 'if(r[1]){');
	impl('&', 'if(!r[1]){');
	impl('Z', 'if(r[1]===r[2]){');
	impl('T', 'if(r[1]!==r[2]){');
	impl('!', 'r[1]=r[0];');
	impl('/', 'r[0]=r[1];');
    impl(';', 'r[0]=r[2];');
    impl("'", 'r[2]=r[0];');
    impl('~', 'r[1]=r[2];');
    impl('`', 'r[2]=r[1];');
	impl('=', 'r[3]=r[0];');
	impl('Q', 'r[3]=1;');
	impl('v', `r[0]=${VERSION_PARTS[0]};r[1]=${VERSION_PARTS[1]};`);
	impl('W', 'r[3]=r[1];');
	impl('E', 'r[3]+=r[1];');
	impl('N', 'o+=argv[i]||"";r[1]=i++<argv.length?1:0;');
	impl('I', 'o+="\\n";');
	impl('S', 'r[3]-=r[1];');
	impl('V', `o+="\\nMPLJS ${VERSION}\\n";`+'for(c=0;c<4;c++)o+=`\\nR${c+1}=${r[c]}`;o+="\\n";');
	impl('.', 'o+=String.fromCharCode(r[1]);');
	impl('?', 's.push(...r);');
	impl('e', 'r[3]=s.pop();r[2]=s.pop();r[1]=s.pop();r[0]=s.pop();');

	let isDigit = ch => ch >= '0' && ch <= '9';
	
	function escapeJS(str) {
	    return str
            .replace(/['"]/g, c => "\\" + c)		
			.replace(/\n/g, "\\n")
	}

	for (let i = 0; i < code.length; i++) {
        function readUntilNondigit() {
            let num = +code[i];
            while (isDigit(code[++i])) num = 10 * num + +code[i];
            --i;
            return num;
        }
		
		let ch = code[i];
		if ("Pfuc".includes(ch)) {
		    lines.push(`r[${"Pfuc".indexOf(ch)}]=${code[++i].codePointAt()};`);
		} else if ("KFUC".includes(ch)) {
			++i;
		    lines.push(`r[${"KFUC".indexOf(ch)}]=${readUntilNondigit()};`);
		} else if (ch === '"') {
			let str = '"';
			while (code[++i] !== '"' && (i < code.length)) str += code[i];
            lines.push(`o+="${escapeJS(str.slice(1))}";`);
        } else if (isDigit(ch)) {
            let id = readUntilNondigit();
            const syscalls = {
                0: 'o+=String.fromCharCode(r[1]);',  // Output ASCII
                1: 'o+=process.argv.length;',         // Argc
                2: 'o+=k.length;',                    // Input length
                3: 'r[1]=k.codePointAt(n++)||0;',                     // Read char
                4: 'r[1]=Math.floor(Math.random()*r[1]);', // Random
                5: 'o+=r[1];',                        // Output decimal
                6: 'o+=r[1].toString(r[2]);',         // Output in base R3
                7: 'r[1]=parseInt(k);',               // Read decimal
                8: 'r[1]=parseInt(k,r[2]);',          // Read base-R3
                9: 'r[1]=g(r[1],r[2]);',            // GCD
                10: 'r[1]*=r[2];',                    // Multiply
                11: 'r[1]=Math.floor(r[1]/r[2]);',    // Divide
                12: 'r[1]%=r[2];',                    // Modulo
                13: 's.push(r[0]);',                  // Push R1
                14: 's.push(r[1]);',                  // Push R2
                15: 's.push(r[2]);',                  // Push R3
                16: 's.push(r[3]);',                  // Push R4
                17: 'r[0]=s.pop();',                  // Pop to R1
                18: 'r[1]=s.pop();',                  // Pop to R2
                19: 'r[2]=s.pop();',                  // Pop to R3
                20: 'r[3]=s.pop();',                  // Pop to R4
                21: 'r[0]=s[s.length-1];',            // Peek to R1
                22: 'r[1]=s[s.length-1];',            // Peek to R2
                23: 'r[2]=s[s.length-1];',            // Peek to R3
                24: 'r[3]=s[s.length-1];',            // Peek to R4
                25: 's.pop();',                       // Discard
                26: 's.push(s[s.length-1]);',         // Duplicate
                27: '[s[s.length-1],s[s.length-2]]=[s[s.length-2],s[s.length-1]];', // Swap
				28: 'if(r[1]>=0&&r[2]>=0&&r[1]<s.length&&r[2]<s.length){a=s.splice(s.length-1-r[1],1)[0];s.splice(s.length-r[2],0,a);}' // Stack move
            };
            lines.push(syscalls[id] || '');
        } else lines.push(ops[ch] || '');
    }

	return new Function('argv', lines.join("") + ";return{stdout:o,stack:s,r1:r[0],r2:r[1],r3:r[2],r4:r[3]}");
}

if (typeof window) window.MPLJS = {compile: compile, version: VERSION};
if (typeof document) document.getElementById("mpljs-error").textContent = `Detected MPLJS.js version: ${VERSION}`;