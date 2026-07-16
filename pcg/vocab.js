// ============================================================
// VOCABULARY v3.0.0 - Premium English words for procedural code generation
// ============================================================

const VOCAB = {
    // JavaScript reserved keywords to filter out
    reservedKeywords: [
        'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
        'delete', 'do', 'else', 'export', 'extends', 'finally', 'for', 'function',
        'if', 'import', 'in', 'instanceof', 'new', 'return', 'super', 'switch',
        'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with',
        'yield', 'await', 'async', 'let', 'static', 'get', 'set', 'of',
        'from', 'as', 'implements', 'interface', 'package', 'private', 'protected',
        'public', 'enum', 'null', 'true', 'false', 'undefined', 'NaN', 'Infinity',
        'arguments', 'eval', 'require', 'module', 'exports', 'global', 'process',
        'Buffer', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval',
        'console', 'window', 'document', 'location', 'history', 'navigator',
        'alert', 'confirm', 'prompt', 'open', 'close', 'focus', 'blur',
        'fetch', 'Promise', 'Symbol', 'Map', 'Set', 'WeakMap', 'WeakSet',
        'Array', 'Object', 'String', 'Number', 'Boolean', 'Function', 'Error',
        'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError',
        'URIError', 'Date', 'RegExp', 'Math', 'JSON', 'Intl', 'Reflect',
        'Proxy', 'WebAssembly', 'BigInt', 'BigInt64Array', 'BigUint64Array',
        'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array',
        'Uint8Array', 'Uint16Array', 'Uint32Array', 'Uint8ClampedArray',
        'SharedArrayBuffer', 'Atomics', 'DataView', 'ArrayBuffer', 'decodeURI',
        'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape',
        'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'uneval', 'uneval'
    ],

    // Premium action verbs for function names
    verbs: [
        'calculate', 'compute', 'fetch', 'retrieve', 'obtain', 'acquire',
        'process', 'handle', 'manage', 'control', 'regulate', 'orchestrate',
        'transform', 'convert', 'translate', 'transcode', 'normalize',
        'parse', 'extract', 'interpret', 'evaluate', 'resolve',
        'generate', 'create', 'build', 'construct', 'assemble', 'compose',
        'compile', 'execute', 'invoke', 'trigger', 'dispatch', 'emit',
        'validate', 'verify', 'authenticate', 'authorize', 'certify',
        'encrypt', 'decrypt', 'encode', 'decode', 'serialize', 'deserialize',
        'compress', 'decompress', 'pack', 'unpack', 'zip', 'unzip',
        'merge', 'combine', 'unify', 'consolidate', 'amalgamate',
        'split', 'divide', 'partition', 'segment', 'fragment',
        'sort', 'order', 'rank', 'prioritize', 'categorize', 'classify',
        'search', 'find', 'locate', 'discover', 'uncover', 'reveal',
        'optimize', 'enhance', 'improve', 'refine', 'polish', 'perfect',
        'initialize', 'setup', 'configure', 'bootstrap', 'seed',
        'cleanup', 'teardown', 'destroy', 'release', 'free',
        'measure', 'quantify', 'gauge', 'assess', 'evaluate', 'appraise',
        'synchronize', 'coordinate', 'align', 'balance', 'equalize',
        'amplify', 'attenuate', 'modulate', 'demodulate', 'filter',
        'sample', 'quantize', 'interpolate', 'extrapolate', 'approximate',
        'analyze', 'synthesize', 'deduce', 'infer', 'conclude', 'derive',
        'aggregate', 'accumulate', 'collect', 'gather', 'assemble', 'compile',
        'distribute', 'allocate', 'assign', 'delegate', 'dispense', 'administer',
        'monitor', 'track', 'trace', 'follow', 'pursue', 'chase',
        'guard', 'protect', 'shield', 'defend', 'fortify', 'secure',
        'expose', 'reveal', 'disclose', 'unveil', 'unmask', 'unearth',
        'embed', 'implant', 'insert', 'inject', 'infuse', 'instill',
        'extract', 'remove', 'withdraw', 'retract', 'revoke', 'recall',
        'grant', 'bestow', 'confer', 'award', 'allocate', 'assign',
        'revise', 'amend', 'modify', 'adapt', 'adjust', 'fineTune',
        'calibrate', 'tune', 'tweak', 'polish', 'buff', 'burnish',
        'accelerate', 'decelerate', 'speed', 'slow', 'hasten', 'delay',
        'amplify', 'magnify', 'intensify', 'escalate', 'increase', 'boost',
        'reduce', 'decrease', 'diminish', 'shrink', 'contract', 'compress',
        'expand', 'extend', 'stretch', 'broaden', 'widen', 'enlarge',
        'rotate', 'spin', 'twist', 'turn', 'revolve', 'pivot',
        'shift', 'move', 'transfer', 'relocate', 'transplant', 'migrate',
        'connect', 'link', 'join', 'attach', 'fasten', 'secure',
        'disconnect', 'detach', 'separate', 'sever', 'sunder', 'cleave',
        'wrap', 'encapsulate', 'enclose', 'envelop', 'cover', 'shield',
        'unwrap', 'uncover', 'expose', 'bare', 'reveal', 'disclose',
        'sort', 'arrange', 'organize', 'structure', 'systematize', 'order',
        'shuffle', 'randomize', 'scramble', 'jumble', 'muddle', 'confuse',
        'merge', 'fuse', 'integrate', 'incorporate', 'absorb', 'assimilate',
        'scatter', 'disperse', 'dissipate', 'diffuse', 'spread', 'distribute',
        'concentrate', 'focus', 'center', 'cluster', 'group', 'bunch',
        'iterate', 'repeat', 'recur', 'reiterate', 'duplicate', 'replicate',
        'terminate', 'end', 'finish', 'complete', 'conclude', 'finalize',
        'initiate', 'commence', 'start', 'begin', 'launch', 'open',
        'suspend', 'interrupt', 'halt', 'cease', 'discontinue', 'pause',
        'resume', 'renew', 'restart', 'continue', 'proceed', 'advance',
        'override', 'overwrite', 'replace', 'substitute', 'swap', 'exchange',
        'capture', 'seize', 'grab', 'snatch', 'grasp', 'clutch',
        'release', 'free', 'liberate', 'emancipate', 'unshackle', 'unbind',
        'bind', 'tie', 'fasten', 'secure', 'anchor', 'moor'
    ],

    // Premium nouns for function subjects
    nouns: [
        'data', 'metadata', 'payload', 'packet', 'frame', 'buffer',
        'cache', 'registry', 'repository', 'archive', 'store', 'warehouse',
        'value', 'variable', 'constant', 'parameter', 'argument', 'property',
        'attribute', 'field', 'column', 'row', 'record', 'tuple',
        'object', 'instance', 'entity', 'component', 'module', 'package',
        'service', 'endpoint', 'interface', 'contract', 'protocol', 'schema',
        'result', 'output', 'response', 'reply', 'acknowledgment', 'receipt',
        'request', 'query', 'command', 'instruction', 'directive', 'order',
        'status', 'state', 'phase', 'stage', 'level', 'tier',
        'count', 'total', 'sum', 'aggregate', 'accumulator', 'counter',
        'index', 'position', 'offset', 'cursor', 'pointer', 'reference',
        'length', 'width', 'height', 'depth', 'breadth', 'extent',
        'limit', 'threshold', 'boundary', 'margin', 'tolerance', 'capacity',
        'rate', 'frequency', 'period', 'interval', 'duration', 'latency',
        'speed', 'velocity', 'acceleration', 'momentum', 'force', 'torque',
        'mass', 'weight', 'density', 'volume', 'area', 'perimeter',
        'energy', 'power', 'work', 'pressure', 'temperature', 'entropy',
        'array', 'list', 'vector', 'matrix', 'tensor', 'grid',
        'tree', 'graph', 'network', 'mesh', 'lattice', 'topology',
        'source', 'sink', 'origin', 'destination', 'path', 'route',
        'token', 'key', 'secret', 'certificate', 'credential', 'identity',
        'session', 'transaction', 'operation', 'action', 'event', 'signal',
        'error', 'exception', 'fault', 'failure', 'crash', 'panic',
        'metric', 'log', 'trace', 'span', 'profile', 'snapshot',
        'node', 'cluster', 'grid', 'fabric', 'weave', 'nexus', 'hub',
        'gateway', 'proxy', 'relay', 'router', 'switch', 'bridge', 'tunnel',
        'socket', 'port', 'endpoint', 'listener', 'connector', 'adapter',
        'factory', 'builder', 'producer', 'consumer', 'supplier', 'provider',
        'manager', 'supervisor', 'coordinator', 'orchestrator', 'conductor',
        'analyzer', 'inspector', 'scanner', 'detector', 'sensor', 'probe',
        'resolver', 'dispatcher', 'scheduler', 'planner', 'designer', 'architect',
        'cache', 'pool', 'queue', 'stack', 'heap', 'arena', 'region',
        'segment', 'slice', 'chunk', 'block', 'page', 'span', 'extent',
        'thread', 'process', 'task', 'job', 'workload', 'batch', 'stream',
        'channel', 'pipe', 'tube', 'duct', 'conduit', 'corridor', 'passage',
        'measure', 'gauge', 'indicator', 'meter', 'counter', 'tally', 'score',
        'rating', 'ranking', 'grade', 'class', 'category', 'group', 'set',
        'subset', 'superset', 'intersection', 'union', 'complement', 'closure',
        'algorithm', 'heuristic', 'formula', 'equation', 'function', 'mapping',
        'transform', 'filter', 'predicate', 'condition', 'constraint', 'rule',
        'policy', 'strategy', 'tactic', 'method', 'approach', 'technique',
        'framework', 'infrastructure', 'platform', 'stack', 'suite', 'toolkit',
        'package', 'bundle', 'collection', 'assembly', 'aggregate', 'compound',
        'hybrid', 'composite', 'alloy', 'blend', 'fusion', 'synthesis',
        'cell', 'kernel', 'core', 'nucleus', 'center', 'hub', 'pivot',
        'edge', 'border', 'periphery', 'outskirts', 'frontier', 'boundary',
        'interval', 'range', 'domain', 'field', 'sphere', 'arena', 'realm',
        'dimension', 'axis', 'coordinate', 'vector', 'scalar', 'tensor',
        'surface', 'volume', 'space', 'vacuum', 'void', 'abyss', 'expanse',
        'momentum', 'inertia', 'impulse', 'reaction', 'response', 'feedback',
        'loop', 'cycle', 'orbit', 'revolution', 'rotation', 'oscillation',
        'wave', 'pulse', 'signal', 'carrier', 'modulation', 'demodulation',
        'amplitude', 'frequency', 'phase', 'polarity', 'voltage', 'current',
        'resistance', 'impedance', 'conductance', 'capacitance', 'inductance',
        'intensity', 'magnitude', 'amplitude', 'strength', 'power', 'force',
        'work', 'energy', 'momentum', 'torque', 'pressure', 'stress', 'strain',
        'tension', 'compression', 'shear', 'bend', 'twist', 'stretch', 'compress',
        'velocity', 'speed', 'rate', 'pace', 'tempo', 'cadence', 'rhythm',
        'interval', 'period', 'epoch', 'era', 'age', 'aeon', 'eternity',
        'nanosecond', 'microsecond', 'millisecond', 'second', 'minute', 'hour',
        'day', 'week', 'month', 'year', 'decade', 'century', 'millennium'
    ],

    // Premium adjectives for descriptors
    adjectives: [
        'active', 'passive', 'static', 'dynamic', 'stable', 'unstable',
        'valid', 'invalid', 'authentic', 'fraudulent', 'genuine', 'counterfeit',
        'complete', 'incomplete', 'partial', 'total', 'absolute', 'relative',
        'primary', 'secondary', 'tertiary', 'quaternary', 'quinary',
        'global', 'local', 'regional', 'continental', 'universal',
        'internal', 'external', 'interior', 'exterior', 'intrinsic', 'extrinsic',
        'public', 'private', 'protected', 'internal', 'package', 'module',
        'constant', 'variable', 'mutable', 'immutable', 'final', 'volatile',
        'transient', 'persistent', 'ephemeral', 'eternal', 'perpetual',
        'temporary', 'permanent', 'provisional', 'definitive', 'preliminary',
        'initial', 'final', 'intermediate', 'transitional', 'terminal',
        'normal', 'abnormal', 'regular', 'irregular', 'standard', 'deviant',
        'approximate', 'exact', 'precise', 'accurate', 'correct', 'erroneous',
        'minimal', 'maximal', 'optimal', 'suboptimal', 'superior', 'inferior',
        'linear', 'nonlinear', 'exponential', 'logarithmic', 'quadratic', 'cubic',
        'symmetric', 'asymmetric', 'homogeneous', 'heterogeneous', 'uniform',
        'parallel', 'serial', 'concurrent', 'sequential', 'synchronous', 'asynchronous',
        'atomic', 'compound', 'simple', 'complex', 'elementary', 'sophisticated',
        'abstract', 'concrete', 'virtual', 'physical', 'logical', 'analytical',
        'comprehensive', 'concise', 'verbose', 'terse', 'laconic', 'pithy',
        'redundant', 'dense', 'sparse', 'compact', 'expanded', 'compressed',
        'balanced', 'unbalanced', 'stable', 'volatile', 'liquid', 'solid',
        'crystalline', 'amorphous', 'isotropic', 'anisotropic', 'homogeneous',
        'granular', 'coarse', 'fine', 'microscopic', 'macroscopic', 'gigantic',
        'immense', 'vast', 'tiny', 'minuscule', 'infinitesimal', 'infinite',
        'finite', 'bounded', 'unbounded', 'open', 'closed', 'clamped',
        'rigid', 'flexible', 'elastic', 'plastic', 'malleable', 'ductile',
        'brittle', 'tough', 'durable', 'fragile', 'breakable', 'unbreakable',
        'transparent', 'translucent', 'opaque', 'clear', 'cloudy', 'hazy',
        'pure', 'impure', 'sterile', 'contaminated', 'clean', 'dirty',
        'raw', 'cooked', 'processed', 'refined', 'unrefined', 'polished',
        'rough', 'smooth', 'even', 'uneven', 'flat', 'curved', 'warped',
        'straight', 'crooked', 'bent', 'twisted', 'spiral', 'helical',
        'convex', 'concave', 'planar', 'spherical', 'cylindrical', 'conical',
        'polar', 'equatorial', 'meridional', 'zenithal', 'nadiral',
        'ascending', 'descending', 'climbing', 'falling', 'rising', 'setting',
        'eastward', 'westward', 'northward', 'southward', 'inward', 'outward',
        'upward', 'downward', 'forward', 'backward', 'sideward', 'diagonal',
        'horizontal', 'vertical', 'oblique', 'perpendicular', 'orthogonal',
        'tangential', 'radial', 'axial', 'lateral', 'medial', 'central',
        'peripheral', 'ambient', 'surrounding', 'neighboring', 'adjacent',
        'proximal', 'distal', 'superficial', 'deep', 'shallow', 'profound',
        'advanced', 'beginner', 'intermediate', 'expert', 'master', 'grandmaster',
        'novice', 'apprentice', 'journeyman', 'artisan', 'craftsman', 'artist',
        'genius', 'prodigy', 'virtuoso', 'maestro', 'adept', 'skilled',
        'talented', 'gifted', 'brilliant', 'exceptional', 'extraordinary',
        'mundane', 'ordinary', 'common', 'rare', 'unique', 'singular',
        'standard', 'custom', 'bespoke', 'tailored', 'personalized', 'generic'
    ],

    // Premium prefixes
    prefixes: [
        'pre', 'post', 're', 'un', 'de', 'dis', 'mis', 'mal',
        'over', 'under', 'super', 'sub', 'supra', 'infra', 'ultra',
        'inter', 'intra', 'trans', 'cis', 'meta', 'para', 'peri',
        'anti', 'contra', 'counter', 'pro', 'syn', 'sym', 'eco',
        'geo', 'bio', 'neuro', 'cyber', 'techno', 'info', 'nano',
        'micro', 'macro', 'mega', 'giga', 'tera', 'peta', 'exa',
        'ambi', 'amphi', 'ana', 'apo', 'cata', 'di', 'dia', 'ecto',
        'endo', 'en', 'epi', 'exo', 'hyper', 'hypo', 'iso', 'meso',
        'mono', 'multi', 'neo', 'paleo', 'pan', 'peri', 'poly', 'proto',
        'pseudo', 'semi', 'tele', 'thermo', 'uni', 'vice', 'aero',
        'astro', 'audio', 'auto', 'biblio', 'bio', 'chromo', 'chrono',
        'cosmo', 'crypto', 'electro', 'ergo', 'ethno', 'eu', 'galacto',
        'helio', 'hydro', 'hypno', 'ideo', 'idio', 'immuno', 'morpho',
        'neuro', 'nocto', 'omni', 'opto', 'ortho', 'osteo', 'pharmaco',
        'phono', 'photo', 'physio', 'psycho', 'radio', 'retro', 'seismo',
        'socio', 'spectro', 'stereo', 'tecto', 'topo', 'xeno', 'zoo'
    ],

    // Premium variable names
    varNames: [
        'result', 'output', 'value', 'data', 'temp', 'cache', 'buffer',
        'state', 'status', 'flags', 'mask', 'pattern', 'signature',
        'count', 'total', 'sum', 'product', 'difference', 'quotient',
        'min', 'max', 'avg', 'median', 'mode', 'variance', 'deviation',
        'index', 'offset', 'length', 'size', 'capacity', 'limit', 'threshold',
        'source', 'target', 'origin', 'destination', 'current', 'previous',
        'next', 'first', 'last', 'initial', 'final', 'interim',
        'base', 'root', 'node', 'edge', 'vertex', 'path', 'weight',
        'factor', 'scale', 'ratio', 'percent', 'fraction', 'coefficient',
        'error', 'delta', 'epsilon', 'theta', 'lambda', 'sigma', 'omega',
        'seed', 'salt', 'nonce', 'iv', 'key', 'token', 'secret',
        'sample', 'segment', 'chunk', 'block', 'page', 'frame', 'slot',
        'handle', 'pointer', 'ref', 'id', 'uuid', 'guid', 'hash',
        'metric', 'gauge', 'meter', 'counter', 'tally', 'score', 'rank',
        'grade', 'level', 'tier', 'class', 'category', 'type', 'kind',
        'entry', 'record', 'item', 'element', 'member', 'unit', 'piece',
        'segment', 'fragment', 'portion', 'section', 'part', 'whole', 'total',
        'list', 'array', 'vector', 'matrix', 'grid', 'table', 'chart',
        'map', 'dictionary', 'object', 'struct', 'union', 'enum', 'set',
        'queue', 'stack', 'heap', 'pool', 'cache', 'archive', 'store',
        'buffer', 'stream', 'pipe', 'channel', 'socket', 'port', 'handle',
        'connection', 'session', 'transaction', 'operation', 'action', 'event',
        'request', 'response', 'payload', 'packet', 'frame', 'block', 'page',
        'region', 'zone', 'area', 'space', 'volume', 'extent', 'range',
        'domain', 'field', 'sphere', 'circle', 'square', 'cube', 'torus',
        'scalar', 'vector', 'tensor', 'matrix', 'complex', 'quaternion',
        'timestamp', 'duration', 'interval', 'period', 'frequency', 'rate',
        'speed', 'velocity', 'momentum', 'force', 'torque', 'energy', 'power',
        'mass', 'weight', 'density', 'pressure', 'temperature', 'volume',
        'count', 'total', 'sum', 'average', 'mean', 'median', 'mode',
        'min', 'max', 'range', 'variance', 'deviation', 'sigma', 'delta',
        'epsilon', 'theta', 'lambda', 'omega', 'alpha', 'beta', 'gamma',
        'val', 'cur', 'prev', 'next', 'first', 'last', 'base', 'top',
        'left', 'right', 'front', 'back', 'center', 'middle', 'edge',
        'corner', 'point', 'line', 'plane', 'surface', 'boundary', 'limit',
        'threshold', 'floor', 'ceiling', 'cap', 'max', 'min', 'target',
        'goal', 'objective', 'outcome', 'result', 'consequence', 'effect',
        'cause', 'source', 'origin', 'genesis', 'seed', 'root', 'base',
        'foundation', 'pillar', 'column', 'beam', 'strut', 'brace', 'support',
        'anchor', 'mooring', 'tether', 'lanyard', 'cable', 'wire', 'fiber',
        'thread', 'strand', 'rope', 'cord', 'chain', 'link', 'bond'
    ],

    // Premium parameter names
    paramNames: [
        'input', 'data', 'value', 'source', 'target', 'payload',
        'request', 'response', 'context', 'state', 'config', 'options',
        'params', 'args', 'flags', 'mask', 'pattern', 'seed',
        'index', 'offset', 'length', 'size', 'limit', 'threshold',
        'count', 'total', 'amount', 'quantity', 'scale', 'factor',
        'rate', 'speed', 'frequency', 'period', 'delay', 'timeout',
        'node', 'edge', 'path', 'key', 'token', 'secret',
        'error', 'status', 'code', 'message', 'reason', 'cause',
        'x', 'y', 'z', 'w', 'a', 'b', 'c', 'd',
        'left', 'right', 'top', 'bottom', 'front', 'back',
        'min', 'max', 'avg', 'median', 'mode', 'tolerance',
        'enable', 'disable', 'flag', 'mode', 'level', 'priority',
        'info', 'log', 'trace', 'span', 'profile', 'snapshot',
        'user', 'group', 'role', 'policy', 'rule', 'constraint',
        'condition', 'filter', 'predicate', 'mapper', 'reducer', 'collector',
        'consumer', 'producer', 'supplier', 'factory', 'builder', 'assembler',
        'coordinator', 'orchestrator', 'conductor', 'director', 'manager', 'supervisor',
        'monitor', 'observer', 'watcher', 'listener', 'handler', 'interceptor',
        'validator', 'verifier', 'authenticator', 'authorizer', 'encryptor', 'decryptor',
        'serializer', 'deserializer', 'encoder', 'decoder', 'compressor', 'decompressor',
        'packager', 'unpackager', 'archiver', 'extractor', 'merger', 'splitter',
        'initial', 'final', 'interim', 'provisional', 'definitive', 'permanent',
        'temp', 'staging', 'production', 'development', 'test', 'live',
        'upstream', 'downstream', 'forward', 'backward', 'inbound', 'outbound',
        'internal', 'external', 'local', 'remote', 'global', 'regional',
        'public', 'private', 'protected', 'restricted', 'unrestricted', 'limited',
        'active', 'inactive', 'pending', 'approved', 'rejected', 'blocked',
        'created', 'updated', 'deleted', 'archived', 'purged', 'restored',
        'new', 'existing', 'legacy', 'modern', 'current', 'previous',
        'next', 'first', 'last', 'default', 'custom', 'fallback',
        'primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'auxiliary',
        'source', 'sink', 'origin', 'destination', 'intermediate', 'terminal',
        'start', 'end', 'begin', 'finish', 'open', 'close',
        'high', 'low', 'normal', 'critical', 'warning', 'info',
        'success', 'failure', 'error', 'exception', 'fault', 'panic',
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
    ],

    // Realistic strings for code generation (NO BACKTICKS)
    basicStrings: [
        'Hello', 'World', 'Success', 'Error', 'Warning', 'Info', 'Debug',
        'Starting', 'Processing', 'Completed', 'Failed', 'Canceled',
        'Active', 'Inactive', 'Pending', 'Approved', 'Rejected',
        'Open', 'Closed', 'Locked', 'Unlocked', 'Hidden', 'Visible',
        'Enabled', 'Disabled', 'Read', 'Write', 'Execute', 'Delete',
        'Create', 'Update', 'Patch', 'Replace', 'Append', 'Prepend',
        'Insert', 'Remove', 'Clear', 'Reset', 'Refresh', 'Reload',
        'Start', 'Stop', 'Pause', 'Resume', 'Restart', 'Shutdown',
        'Connect', 'Disconnect', 'Bind', 'Unbind', 'Mount', 'Unmount',
        'Import', 'Export', 'Upload', 'Download', 'Sync', 'Async',
        'Encrypt', 'Decrypt', 'Compress', 'Decompress', 'Encode', 'Decode',
        'Serialize', 'Deserialize', 'Parse', 'Stringify', 'Format', 'Validate',
        'OK', 'YES', 'NO', 'TRUE', 'FALSE', 'NULL', 'UNDEFINED',
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
        'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta',
        'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi',
        'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega',
        'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown',
        'Black', 'White', 'Gray', 'Gold', 'Silver', 'Copper', 'Bronze',
        'Platinum', 'Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Amethyst',
        'Quartz', 'Crystal', 'Obsidian', 'Marble', 'Granite', 'Basalt',
        'Mountain', 'River', 'Lake', 'Ocean', 'Forest', 'Desert', 'Jungle',
        'Garden', 'Valley', 'Cliff', 'Canyon', 'Cave', 'Tunnel', 'Bridge',
        'Tower', 'Castle', 'Palace', 'Temple', 'Shrine', 'Church', 'Monument',
        'Statue', 'Mural', 'Canvas', 'Easel', 'Palette', 'Brush', 'Paint',
        'Sword', 'Shield', 'Armor', 'Helmet', 'Gauntlet', 'Greave', 'Sabaton',
        'Crown', 'Scepter', 'Throne', 'Sword', 'Bow', 'Arrow', 'Quiver',
        'Dagger', 'Axe', 'Mace', 'Flail', 'Halberd', 'Lance', 'Spear',
        'Potion', 'Elixir', 'Philter', 'Tonic', 'Salve', 'Ointment', 'Poultice',
        'Scroll', 'Tome', 'Grimoire', 'Codex', 'Manuscript', 'Folio', 'Leaflet',
        'Seal', 'Sigil', 'Rune', 'Glyph', 'Symbol', 'Mark', 'Emblem',
        'Phoenix', 'Dragon', 'Griffin', 'Unicorn', 'Pegasus', 'Basilisk', 'Chimera',
        'Titan', 'Giant', 'Behemoth', 'Leviathan', 'Zephyr', 'Tempest', 'Typhoon',
        'Nebula', 'Galaxy', 'Comet', 'Meteor', 'Asteroid', 'Orbit', 'Eclipse',
        'Harbor', 'Dock', 'Pier', 'Quay', 'Wharf', 'Jetty', 'Mooring',
        'Compass', 'Astrolabe', 'Sextant', 'Chronometer', 'Barometer', 'Thermometer',
        'Anvil', 'Hammer', 'Chisel', 'File', 'Rasp', 'Awl', 'Auger',
        'Loom', 'Spindle', 'Shuttle', 'Weaver', 'Spinner', 'Dyer', 'Fuller',
        'Forge', 'Smelter', 'Refinery', 'Mill', 'Factory', 'Workshop', 'Studio'
    ],

    complexStringTemplates: [
        { template: '{0} {1}', count: 2 },
        { template: '{0}-{1}', count: 2 },
        { template: '{0}_{1}', count: 2 },
        { template: '{0}::{1}', count: 2 },
        { template: '{0} | {1}', count: 2 },
        { template: '{0}.{1}', count: 2 },
        { template: '{0}/{1}', count: 2 },
        { template: '{0}:{1}', count: 2 },
        { template: '{0}+{1}', count: 2 },
        { template: '{0}*{1}', count: 2 },
        { template: '{0}@{1}', count: 2 },
        { template: '{0}#{1}', count: 2 },
        { template: '{0}${1}', count: 2 },
        { template: '{0}%{1}', count: 2 },
        { template: '{0}^{1}', count: 2 },
        { template: '{0}&{1}', count: 2 },
        { template: '{0}|{1}', count: 2 },
        { template: '{0}~{1}', count: 2 },
        { template: '{0}!{1}', count: 2 },
        { template: '{0}?{1}', count: 2 },
        { template: '{0} = {1}', count: 2 },
        { template: '{0} != {1}', count: 2 },
        { template: '{0} > {1}', count: 2 },
        { template: '{0} < {1}', count: 2 },
        { template: '{0} >= {1}', count: 2 },
        { template: '{0} <= {1}', count: 2 },
        { template: '{0} == {1}', count: 2 },
        { template: '{0} === {1}', count: 2 },
        { template: '{0}->{1}', count: 2 },
        { template: '{0} => {1}', count: 2 },
        { template: '{0} || {1}', count: 2 },
        { template: '{0} && {1}', count: 2 },
        { template: '{0} ?? {1}', count: 2 },
        { template: '({0})', count: 2 },
        { template: '[{0}]', count: 2 },
        { template: '{{0}}', count: 2 },
        { template: '<{0}>', count: 2 },
        { template: '"{0}"', count: 2 },
        { template: "'{0}'", count: 2 },
        { template: '--{0}', count: 2 },
        { template: '++{0}', count: 2 },
        { template: '{0}--', count: 2 },
        { template: '{0}++', count: 2 },
        { template: '{0} {1} {2}', count: 3 },
        { template: '{0}-{1}-{2}', count: 3 },
        { template: '{0}_{1}_{2}', count: 3 },
        { template: '{0}.{1}.{2}', count: 3 },
        { template: '{0}/{1}/{2}', count: 3 },
        { template: '{0}:{1}:{2}', count: 3 },
        { template: '{0}::{1}::{2}', count: 3 },
        { template: '{0} | {1} | {2}', count: 3 },
        { template: '{0} + {1} + {2}', count: 3 },
        { template: '{0} * {1} * {2}', count: 3 },
        { template: '{0}@{1}@{2}', count: 3 },
        { template: '{0}#{1}#{2}', count: 3 },
        { template: '{0}${1}${2}', count: 3 },
        { template: '{0}->{1}->{2}', count: 3 },
        { template: '{0} => {1} => {2}', count: 3 },
        { template: '({0}, {1}, {2})', count: 3 },
        { template: '[{0}, {1}, {2}]', count: 3 },
        { template: '{{0}, {1}, {2}}', count: 3 },
        { template: '<{0}, {1}, {2}>', count: 3 },
        { template: '{0} != {1} != {2}', count: 3 },
        { template: '{0} == {1} == {2}', count: 3 },
        { template: '{0} === {1} === {2}', count: 3 },
        { template: '{0} && {1} && {2}', count: 3 },
        { template: '{0} || {1} || {2}', count: 3 },
        { template: '{0} ?? {1} ?? {2}', count: 3 },
        { template: '{0} ? {1} : {2}', count: 3 },
        { template: '{0} & {1} & {2}', count: 3 },
        { template: '{0} ^ {1} ^ {2}', count: 3 },
        { template: '{0} ~ {1} ~ {2}', count: 3 },
        { template: '{0} = {1} = {2}', count: 3 },
        { template: '{0} > {1} > {2}', count: 3 },
        { template: '{0} < {1} < {2}', count: 3 },
        { template: '{0} >= {1} >= {2}', count: 3 },
        { template: '{0} <= {1} <= {2}', count: 3 },
        { template: '{0} {1} {2} {3}', count: 4 },
        { template: '{0}-{1}-{2}-{3}', count: 4 },
        { template: '{0}_{1}_{2}_{3}', count: 4 },
        { template: '{0}.{1}.{2}.{3}', count: 4 },
        { template: '{0}/{1}/{2}/{3}', count: 4 },
        { template: '{0}:{1}:{2}:{3}', count: 4 },
        { template: '{0}::{1}::{2}::{3}', count: 4 },
        { template: '{0} | {1} | {2} | {3}', count: 4 },
        { template: '{0} + {1} + {2} + {3}', count: 4 },
        { template: '{0} * {1} * {2} * {3}', count: 4 },
        { template: '{0}@{1}@{2}@{3}', count: 4 },
        { template: '{0}#{1}#{2}#{3}', count: 4 },
        { template: '{0}${1}${2}${3}', count: 4 },
        { template: '{0}->{1}->{2}->{3}', count: 4 },
        { template: '{0} => {1} => {2} => {3}', count: 4 },
        { template: '({0}, {1}, {2}, {3})', count: 4 },
        { template: '[{0}, {1}, {2}, {3}]', count: 4 },
        { template: '{{0}, {1}, {2}, {3}}', count: 4 },
        { template: '<{0}, {1}, {2}, {3}>', count: 4 },
        { template: '{0} != {1} != {2} != {3}', count: 4 },
        { template: '{0} == {1} == {2} == {3}', count: 4 },
        { template: '{0} === {1} === {2} === {3}', count: 4 },
        { template: '{0} && {1} && {2} && {3}', count: 4 },
        { template: '{0} || {1} || {2} || {3}', count: 4 },
        { template: '{0} ?? {1} ?? {2} ?? {3}', count: 4 },
        { template: '{0} ? {1} : {2} : {3}', count: 4 },
        { template: '{0} & {1} & {2} & {3}', count: 4 },
        { template: '{0} ^ {1} ^ {2} ^ {3}', count: 4 },
        { template: '{0} = {1} = {2} = {3}', count: 4 },
        { template: '{0} > {1} > {2} > {3}', count: 4 },
        { template: '{0} < {1} < {2} < {3}', count: 4 },
        { template: '{0} >= {1} >= {2} >= {3}', count: 4 },
        { template: '{0} <= {1} <= {2} <= {3}', count: 4 },
        { template: '{0} {1} {2} {3} {4}', count: 5 },
        { template: '{0}-{1}-{2}-{3}-{4}', count: 5 },
        { template: '{0}_{1}_{2}_{3}_{4}', count: 5 },
        { template: '{0}.{1}.{2}.{3}.{4}', count: 5 },
        { template: '{0}/{1}/{2}/{3}/{4}', count: 5 },
        { template: '{0}:{1}:{2}:{3}:{4}', count: 5 },
        { template: '{0}::{1}::{2}::{3}::{4}', count: 5 },
        { template: '{0} | {1} | {2} | {3} | {4}', count: 5 },
        { template: '{0} + {1} + {2} + {3} + {4}', count: 5 },
        { template: '{0} * {1} * {2} * {3} * {4}', count: 5 },
        { template: '{0}@{1}@{2}@{3}@{4}', count: 5 },
        { template: '{0}#{1}#{2}#{3}#{4}', count: 5 },
        { template: '{0}${1}${2}${3}${4}', count: 5 },
        { template: '{0}->{1}->{2}->{3}->{4}', count: 5 },
        { template: '{0} => {1} => {2} => {3} => {4}', count: 5 },
        { template: '({0}, {1}, {2}, {3}, {4})', count: 5 },
        { template: '[{0}, {1}, {2}, {3}, {4}]', count: 5 },
        { template: '{{0}, {1}, {2}, {3}, {4}}', count: 5 },
        { template: '<{0}, {1}, {2}, {3}, {4}>', count: 5 },
        { template: '{0} != {1} != {2} != {3} != {4}', count: 5 },
        { template: '{0} == {1} == {2} == {3} == {4}', count: 5 },
        { template: '{0} === {1} === {2} === {3} === {4}', count: 5 },
        { template: '{0} && {1} && {2} && {3} && {4}', count: 5 },
        { template: '{0} || {1} || {2} || {3} || {4}', count: 5 },
        { template: '{0} ?? {1} ?? {2} ?? {3} ?? {4}', count: 5 },
        { template: '{0} ? {1} : {2} : {3} : {4}', count: 5 },
        { template: '{0} & {1} & {2} & {3} & {4}', count: 5 },
        { template: '{0} ^ {1} ^ {2} ^ {3} ^ {4}', count: 5 },
        { template: '{0} = {1} = {2} = {3} = {4}', count: 5 },
        { template: '{0} > {1} > {2} > {3} > {4}', count: 5 },
        { template: '{0} < {1} < {2} < {3} < {4}', count: 5 },
        { template: '{0} >= {1} >= {2} >= {3} >= {4}', count: 5 },
        { template: '{0} <= {1} <= {2} <= {3} <= {4}', count: 5 },
        { template: '${0}_{1}', count: 2 },
        { template: '${0}.${1}', count: 2 },
        { template: '${0}-${1}', count: 2 },
        { template: '__${0}__', count: 2 },
        { template: '__${0}_${1}__', count: 3 },
        { template: '${0}__${1}', count: 2 },
        { template: '${0}__${1}__${2}', count: 3 },
        { template: '${0}_${1}_${2}_${3}', count: 4 },
        { template: '${0}.${1}.${2}.${3}', count: 4 },
        { template: '${0}-${1}-${2}-${3}', count: 4 },
        { template: '${0}_${1}_${2}_${3}_${4}', count: 5 },
        { template: '${0}.${1}.${2}.${3}.${4}', count: 5 },
        { template: '${0}-${1}-${2}-${3}-${4}', count: 5 },
        { template: '#{0}', count: 2 },
        { template: '#{0}-{1}', count: 3 },
        { template: '#{0}_{1}', count: 3 },
        { template: '#{0}.{1}', count: 3 },
        { template: '##{0}##', count: 2 },
        { template: '##{0}_${1}##', count: 3 },
        { template: '@{0}', count: 2 },
        { template: '@{0}-{1}', count: 3 },
        { template: '@{0}_{1}', count: 3 },
        { template: '@{0}.{1}', count: 3 },
        { template: '@@{0}@@', count: 2 },
        { template: '%%{0}%%', count: 2 },
        { template: '%%{0}_${1}%%', count: 3 },
        { template: '!!{0}!!', count: 2 },
        { template: '??{0}??', count: 2 },
        { template: '~~{0}~~', count: 2 },
        { template: '**{0}**', count: 2 },
        { template: '__{0}__', count: 2 },
        { template: '::{0}::', count: 2 },
        { template: '::{0}::{1}::', count: 3 },
        { template: '::{0}::{1}::{2}::', count: 4 },
        { template: '::${0}::${1}::', count: 3 },
        { template: '${0}::${1}::${2}', count: 3 },
        { template: '{0}__{1}__{2}', count: 3 },
        { template: '{0}__{1}__{2}__{3}', count: 4 },
        { template: '{0}__{1}__{2}__{3}__{4}', count: 5 }
    ],

    stringPrefixes: [
        'data_', 'config_', 'user_', 'system_', 'app_', 'service_',
        'cache_', 'temp_', 'backup_', 'archive_', 'test_', 'prod_',
        'dev_', 'staging_', 'local_', 'remote_', 'global_', 'custom_',
        'default_', 'current_', 'previous_', 'next_', 'first_', 'last_',
        'total_', 'count_', 'index_', 'offset_', 'limit_', 'size_'
    ],

    stringSuffixes: [
        '_data', '_config', '_user', '_system', '_app', '_service',
        '_cache', '_temp', '_backup', '_archive', '_test', '_prod',
        '_dev', '_staging', '_local', '_remote', '_global', '_custom',
        '_default', '_current', '_previous', '_next', '_first', '_last',
        '_total', '_count', '_index', '_offset', '_limit', '_size'
    ],

    generateString: function(rng) {
        if (rng.next() < 0.6) {
            return this.generateBasicString(rng);
        } else {
            return this.generateComplexString(rng);
        }
    },

    generateBasicString: function(rng) {
        const str = this.basicStrings[rng.nextInt(0, this.basicStrings.length - 1)];
        const num = rng.nextInt(0, 999);
        
        let result = str;
        
        if (rng.next() < 0.3) {
            result = `${result}${num}`;
        }
        if (rng.next() < 0.25) {
            const prefix = this.stringPrefixes[rng.nextInt(0, this.stringPrefixes.length - 1)];
            result = `${prefix}${result.toLowerCase()}`;
        }
        if (rng.next() < 0.2) {
            const suffix = this.stringSuffixes[rng.nextInt(0, this.stringSuffixes.length - 1)];
            result = `${result.toLowerCase()}${suffix}`;
        }
        if (rng.next() < 0.15) {
            const prefix = this.stringPrefixes[rng.nextInt(0, this.stringPrefixes.length - 1)];
            const suffix = this.stringSuffixes[rng.nextInt(0, this.stringSuffixes.length - 1)];
            result = `${prefix}${result.toLowerCase()}${suffix}`;
        }
        return result;
    },

    generateComplexString: function(rng) {
        const template = this.complexStringTemplates[rng.nextInt(0, this.complexStringTemplates.length - 1)];
        const parts = [];
        for (let i = 0; i < template.count; i++) {
            if (rng.next() < 0.5) {
                parts.push(this.generateBasicString(rng));
            } else {
                if (rng.next() < 0.5) {
                    parts.push(String(rng.nextInt(1, 9999)));
                } else {
                    const specials = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'];
                    parts.push(specials[rng.nextInt(0, specials.length - 1)]);
                }
            }
        }
        
        let result = template.template;
        for (let i = 0; i < parts.length; i++) {
            result = result.replace(`{${i}}`, parts[i]);
        }
        return result.replace(/['"`\$\{\}]/g, '');
    },

    generateNumber: function(rng) {
        if (rng.next() < 0.5) {
            const patterns = [
                () => rng.nextInt(1, 100),
                () => rng.nextInt(100, 1000),
                () => rng.nextInt(1000, 10000),
                () => rng.nextInt(10000, 100000),
                () => rng.nextInt(-100, -1),
                () => rng.nextInt(-1000, -100),
                () => rng.nextInt(0, 1)
            ];
            return String(rng.pick(patterns)());
        } else {
            const patterns = [
                () => (rng.next() * 100).toFixed(1),
                () => (rng.next() * 1000).toFixed(2),
                () => (rng.next() * 10000).toFixed(3),
                () => (rng.next() * 100).toFixed(0) + '.' + String(rng.nextInt(10, 99)),
                () => (rng.nextInt(1, 100) + rng.next()).toFixed(2),
                () => (rng.next() * 1000).toFixed(4)
            ];
            return rng.pick(patterns)();
        }
    },

    generateFunctionName: function(rng) {
        const patterns = [
            () => {
                const verb = this.verbs[rng.nextInt(0, this.verbs.length - 1)];
                const noun = this.capitalize(this.nouns[rng.nextInt(0, this.nouns.length - 1)]);
                return verb + noun;
            },
            () => {
                const prefix = this.prefixes[rng.nextInt(0, this.prefixes.length - 1)];
                const verb = this.verbs[rng.nextInt(0, this.verbs.length - 1)];
                const noun = this.capitalize(this.nouns[rng.nextInt(0, this.nouns.length - 1)]);
                return prefix + this.capitalize(verb) + noun;
            },
            () => {
                const verb = this.verbs[rng.nextInt(0, this.verbs.length - 1)];
                const adj = this.capitalize(this.adjectives[rng.nextInt(0, this.adjectives.length - 1)]);
                const noun = this.capitalize(this.nouns[rng.nextInt(0, this.nouns.length - 1)]);
                return verb + adj + noun;
            },
            () => {
                const noun = this.nouns[rng.nextInt(0, this.nouns.length - 1)];
                const verb = this.capitalize(this.verbs[rng.nextInt(0, this.verbs.length - 1)]);
                return noun + verb;
            },
            () => {
                const verb = this.verbs[rng.nextInt(0, this.verbs.length - 1)];
                const noun1 = this.capitalize(this.nouns[rng.nextInt(0, this.nouns.length - 1)]);
                const noun2 = this.capitalize(this.nouns[rng.nextInt(0, this.nouns.length - 1)]);
                return verb + noun1 + noun2;
            },
            () => {
                const adj = this.adjectives[rng.nextInt(0, this.adjectives.length - 1)];
                const noun = this.capitalize(this.nouns[rng.nextInt(0, this.nouns.length - 1)]);
                return 'get' + this.capitalize(adj) + noun;
            },
            () => {
                const noun1 = this.nouns[rng.nextInt(0, this.nouns.length - 1)];
                const noun2 = this.capitalize(this.nouns[rng.nextInt(0, this.nouns.length - 1)]);
                return noun1 + noun2;
            },
            () => {
                const prefix = this.prefixes[rng.nextInt(0, this.prefixes.length - 1)];
                const verb = this.verbs[rng.nextInt(0, this.verbs.length - 1)];
                return prefix + this.capitalize(verb);
            },
            () => {
                return this.verbs[rng.nextInt(0, this.verbs.length - 1)];
            },
            () => {
                const noun1 = this.nouns[rng.nextInt(0, this.nouns.length - 1)];
                const prefix = this.prefixes[rng.nextInt(0, this.prefixes.length - 1)];
                const noun2 = this.capitalize(this.nouns[rng.nextInt(0, this.nouns.length - 1)]);
                return noun1 + this.capitalize(prefix) + noun2;
            }
        ];

        let name = rng.pick(patterns)();
        name = name.replace(/[^a-zA-Z0-9]/g, '');
        if (name.length === 0) name = 'func' + rng.nextInt(1, 999);
        name = name.charAt(0).toLowerCase() + name.slice(1);
        if (!/^[a-zA-Z_$]/.test(name)) name = '_' + name;
        
        // Check against reserved keywords
        if (this.reservedKeywords.includes(name.toLowerCase())) {
            name = name + rng.nextInt(1, 99);
        }
        
        return name;
    },

    generateVarName: function(rng, usedNames) {
        let name;
        let attempts = 0;
        do {
            const base = this.varNames[rng.nextInt(0, this.varNames.length - 1)];
            const pattern = rng.nextInt(0, 4);
            
            if (pattern === 0) {
                name = base;
            } else if (pattern === 1) {
                name = base + rng.nextInt(1, 99);
            } else if (pattern === 2) {
                const adj = this.adjectives[rng.nextInt(0, this.adjectives.length - 1)];
                name = adj + this.capitalize(base);
            } else if (pattern === 3) {
                const noun = this.nouns[rng.nextInt(0, this.nouns.length - 1)];
                name = base + this.capitalize(noun);
            } else {
                const adj = this.adjectives[rng.nextInt(0, this.adjectives.length - 1)];
                const noun = this.nouns[rng.nextInt(0, this.nouns.length - 1)];
                name = adj + this.capitalize(base) + this.capitalize(noun);
            }
            
            name = name.replace(/[^a-zA-Z0-9]/g, '');
            name = name.charAt(0).toLowerCase() + name.slice(1);
            
            // Check against reserved keywords
            if (this.reservedKeywords.includes(name.toLowerCase())) {
                name = name + rng.nextInt(1, 99);
            }
            
            attempts++;
            if (attempts > 1000) name = `v${rng.nextInt(1, 9999)}`;
        } while (usedNames.has(name));
        usedNames.add(name);
        return name;
    },

    generateParamName: function(rng, usedNames) {
        let name;
        let attempts = 0;
        do {
            const base = this.paramNames[rng.nextInt(0, this.paramNames.length - 1)];
            
            if (rng.next() < 0.6) {
                name = base;
            } else if (rng.next() < 0.5) {
                name = base + rng.nextInt(1, 9);
            } else {
                const adj = this.adjectives[rng.nextInt(0, this.adjectives.length - 1)];
                name = adj + this.capitalize(base);
            }
            
            name = name.replace(/[^a-zA-Z0-9]/g, '');
            name = name.charAt(0).toLowerCase() + name.slice(1);
            
            // Check against reserved keywords
            if (this.reservedKeywords.includes(name.toLowerCase())) {
                name = name + rng.nextInt(1, 99);
            }
            
            attempts++;
            if (attempts > 1000) name = `p${rng.nextInt(1, 9999)}`;
        } while (usedNames.has(name));
        usedNames.add(name);
        return name;
    },

    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};