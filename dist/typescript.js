(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 153]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^enum(?![a-zA-Z¡-￿_0-9_\$])/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿__\$]/, /^const(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 511]], /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 536]], /^(?:\.\.\.)?/, /^is(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(\<])/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    [2, 7, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[42], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[35], -1,
     3, "atom", e[29], -1,
     3, "variable", e[19], -1,
     3, "operator", e[37], -1,
     3, "operator", e[41], -1,
     3, "operator", e[40], -1,
     2, 155, -1, {"name":"string","token":"string"},
     3, "number", e[31], -1,
     2, 160, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[38], -1,
     1, 166, -1,
     /^[^]/, -1],
    [e[26], 6,
     2, 160, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", [0, "type", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 170]], 8,
     3, "keyword", [0, "namespace", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 171]], 18,
     3, "keyword", [0, "interface", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 172]], 26,
     [5, 173], 36,
     3, "keyword", e[21], 37,
     3, "keyword", [0, "declare", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 176]], 43,
     3, "keyword", /^abstract(?![a-zA-Z¡-￿_0-9_\$])/, 43,
     3, "keyword", e[0], 45,
     3, "keyword", e[1], 52,
     3, "keyword", e[2], 52,
     3, "keyword", e[3], 56,
     2, 177, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[5], 64,
     3, "keyword", e[6], 69,
     3, "keyword", e[7], 75,
     3, "keyword", e[8], 77,
     /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 77,
     3, "keyword", e[9], 78,
     3, "keyword", e[10], 81,
     3, "keyword", e[11], 85,
     3, "keyword", e[12], 89,
     3, "keyword", e[13], 93,
     3, "keyword", e[14], 97,
     3, "keyword", e[15], 113,
     3, "keyword", e[16], 117,
     3, "keyword", e[17], 129,
     3, "keyword", e[18], 145,
     "@", 147,
     1, 181, 151],
    [1, 6, 9],
    [3, "def type", e[19], 10],
    [1, 6, 11],
    [2, 187, 12, {"name":"TypeParams"},
     0, 12],
    [1, 6, 13],
    [3, "operator", "=", 14],
    [1, 6, 15],
    [1, 192, 16],
    [1, 6, 17],
    [e[22], -1],
    [1, 6, 19],
    [[5, 231], 20,
     3, "def", e[19], 21],
    [3, "variable", e[19], 22],
    [1, 6, 23],
    [1, 6, 24],
    [2, 177, -1, {"name":"Block"}],
    [".", 25],
    [1, 6, 19],
    [1, 6, 27],
    [3, "def type", e[19], 28],
    [1, 6, 29],
    [2, 187, 30, {"name":"TypeParams"},
     0, 30],
    [1, 6, 31],
    [3, "keyword", e[20], 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [1, 234, 33],
    [2, 240, -1, {"name":"ObjType"}],
    [3, "keyword", e[28], 38],
    [1, 6, 39],
    [1, 6, 40],
    [3, "def type", e[19], 41],
    [3, "keyword", e[21], 37],
    [1, 6, 42],
    [2, 248, -1, {"name":"EnumBody"}],
    [1, 6, 44],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 46],
    [1, 253, 47],
    [1, 6, 48],
    [",", 49,
     e[22], -1],
    [1, 6, 50],
    [1, 253, 51],
    [1, 6, 48],
    [1, 6, 53],
    [2, 262, 54, {"name":"CondExpr"}],
    [1, 6, 55],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 57],
    [2, 7, 58, {"name":"Statement"}],
    [1, 6, 59],
    [3, "keyword", e[1], 60,
     0, -1],
    [1, 6, 61],
    [2, 262, 62, {"name":"CondExpr"}],
    [1, 6, 63],
    [e[22], -1],
    [1, 6, 65],
    [2, 262, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 7, 68, {"name":"Statement"}],
    [2, 267, -1, {"name":"Alternative"}],
    [1, 6, 70],
    [3, "keyword", "*", 71,
     0, 71],
    [1, 6, 72],
    [3, "def", e[19], 73],
    [1, 6, 74],
    [2, 271, -1, {"name":"FunctionDef"}],
    [1, 6, 76],
    [2, 278, -1, {"name":"ForStatement"}],
    [1, 6, 79],
    [1, 6, 80],
    [":", -1],
    [1, 181, 77],
    [1, 6, 82],
    [e[22], -1,
     1, 181, 83],
    [1, 6, 84],
    [e[22], -1],
    [1, 6, 86],
    [1, 181, 87],
    [1, 6, 88],
    [e[22], -1],
    [1, 6, 90],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 91],
    [1, 6, 92],
    [e[22], -1],
    [1, 6, 94],
    [2, 262, 95, {"name":"CondExpr"}],
    [1, 6, 96],
    [2, 177, -1, {"name":"Block"}],
    [1, 6, 98],
    [2, 177, 99, {"name":"Block"}],
    [1, 6, 100],
    [3, "keyword", e[23], 101,
     0, 102],
    [1, 6, 103],
    [1, 6, 104],
    ["(", 105],
    [3, "keyword", e[24], 106,
     0, -1],
    [1, 6, 107],
    [1, 6, 108],
    [3, "def", e[19], 109],
    [2, 177, -1, {"name":"Block"}],
    [1, 6, 110],
    [")", 111],
    [1, 6, 112],
    [2, 177, 102, {"name":"Block"}],
    [1, 6, 114],
    [3, "def type", e[19], 115],
    [1, 6, 116],
    [1, 281, -1],
    [1, 6, 118],
    ["*", 119,
     3, "keyword", e[8], 119,
     "{", 120,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 121],
    [1, 6, 122],
    [3, "keyword", e[25], 123,
     0, 124],
    [1, 292, 125],
    [1, 6, 126],
    [1, 6, 127],
    [1, 6, 128],
    [2, 155, 124, {"name":"string","token":"string"}],
    [e[22], -1],
    ["}", 119],
    [1, 6, 130],
    [2, 155, 131, {"name":"string","token":"string"},
     3, "keyword", "*", 132,
     1, 298, 133,
     "{", 134],
    [1, 6, 135],
    [1, 6, 136],
    [1, 6, 137],
    [1, 6, 138],
    [e[22], -1],
    [3, "keyword", e[33], 139,
     0, 133],
    [3, "keyword", e[25], 140,
     0, 131],
    [1, 292, 141],
    [1, 6, 142],
    [1, 6, 143],
    [1, 6, 144],
    [3, "def", e[19], 133],
    [2, 155, 131, {"name":"string","token":"string"}],
    ["}", 133],
    [1, 6, 146],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 148],
    [1, 181, 149],
    [1, 6, 150],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 152],
    [e[22], -1],
    [1, 6, 154],
    [3, "keyword", e[6], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 156,
     "\"", 158],
    ["\\", 157,
     /^(?!\')./, 156,
     "'", -1],
    [/^[^]/, 156],
    ["\\", 159,
     /^(?!\")./, 158,
     "\"", -1],
    [/^[^]/, 158],
    [/^\/\*\*(?!\/)/, 161,
     "/*", 165,
     /^\/\/.*/, -1],
    [0, 162,
     2, 303, 161, {"name":"doccomment.braced"},
     0, 163],
    [e[34], 164],
    [2, 307, 163, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [0, 162,
     0, 161],
    [[0, /^(?!\*\/)/, /^[^]/], 165,
     "*/", -1],
    [3, "string-2", "`", 167],
    [3, "string-2", "${", 168,
     2, 311, 167, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 167,
     3, "string-2", "`", -1],
    [1, 181, 169],
    [3, "string-2", "}", 167],
    [e[26], 170,
     e[27], -1],
    [e[26], 171,
     e[27], -1],
    [e[26], 172,
     e[27], -1],
    [3, "keyword", e[28], 174],
    [1, 6, 175],
    [3, "keyword", e[21], -1],
    [e[26], 176,
     e[27], -1],
    ["{", 178],
    [1, 6, 179],
    [2, 7, 180, {"name":"Statement"},
     "}", -1],
    [1, 6, 179],
    [1, 313, 182],
    [1, 6, 183],
    [",", 184,
     1, 335, 185,
     0, -1],
    [1, 6, 186],
    [1, 6, 183],
    [1, 181, 185],
    ["<", 188],
    [1, 6, 189],
    [1, 354, 190],
    [1, 6, 191],
    [">", -1],
    [3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, 216,
     3, "atom", e[29], 216,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 193,
     3, "keyword", /^keyof(?![a-zA-Z¡-￿_0-9_\$])/, 194,
     [0, [5, 376], "("], 195,
     3, "keyword", e[30], 196,
     0, 196,
     0, 197,
     2, 379, 216, {"name":"TupleType"},
     2, 240, 216, {"name":"ObjType"},
     2, 155, 216, {"name":"string","token":"string"},
     3, "number", e[31], 216],
    [1, 6, 198],
    [1, 6, 199],
    [1, 6, 200],
    [1, 6, 201],
    [[5, 384], 202,
     3, "type", e[19], 203],
    [1, 387, 216],
    [1, 192, 216],
    [1, 192, 204],
    [2, 187, 205, {"name":"TypeParams"},
     0, 205],
    [3, "variable", e[19], 206],
    [1, 6, 207],
    [1, 6, 208],
    [1, 6, 209],
    [1, 6, 210],
    [2, 391, 216, {"name":"TypeArgs"},
     0, 216],
    [")", 216],
    [2, 396, 211, {"name":"ParamListSpec"}],
    [".", 212],
    [1, 6, 213],
    [1, 6, 197],
    [3, "operator", "=>", 214],
    [1, 6, 215],
    [1, 192, 216],
    [1, 6, 217],
    [3, "operator", /^[\&\|]/, 218,
     3, "keyword", /^(?:extends|implements)(?![a-zA-Z¡-￿_0-9_\$])/, 218,
     "[", 219,
     3, "operator", "?", 220,
     0, -1],
    [1, 6, 221],
    [1, 6, 222],
    [1, 6, 223],
    [1, 192, 224],
    [1, 192, 225,
     0, 225],
    [1, 192, 226],
    [1, 6, 217],
    [1, 6, 227],
    [1, 6, 228],
    ["]", 224],
    [3, "operator", ":", 229],
    [1, 6, 230],
    [1, 192, 224],
    [e[19], 232],
    [1, 6, 233],
    [".", -1],
    [1, 192, 235,
     0, -1],
    [1, 6, 236],
    [",", 237,
     0, -1],
    [1, 6, 238],
    [1, 192, 239,
     0, 239],
    [1, 6, 236],
    ["{", 241],
    [1, 6, 242],
    [1, 397, 243,
     0, 243],
    [1, 6, 244],
    [/^[\,\;]/, 245,
     "}", -1],
    [1, 6, 246],
    [1, 397, 247,
     0, 247],
    [1, 6, 244],
    ["{", 249],
    [1, 6, 250],
    [1, 426, 251],
    [1, 6, 252],
    ["}", -1],
    [1, 440, 254],
    [1, 6, 255],
    [":", 256,
     0, 258],
    [1, 6, 257],
    [1, 192, 258],
    [1, 6, 259],
    [3, "operator", "=", 260,
     0, -1],
    [1, 6, 261],
    [1, 387, -1],
    ["(", 263],
    [1, 6, 264],
    [1, 181, 265],
    [1, 6, 266],
    [")", -1],
    [1, 6, 268],
    [3, "keyword", e[32], 269,
     0, -1],
    [1, 6, 270],
    [2, 7, -1, {"name":"Statement"}],
    [2, 187, 272, {"name":"TypeParams"},
     0, 272],
    [1, 6, 273],
    [2, 443, 274, {"name":"ParamList"}],
    [1, 6, 275],
    [1, 448, 276,
     0, 276],
    [1, 6, 277],
    [2, 177, -1, {"name":"Block"},
     e[22], -1],
    [2, 456, 279, {"name":"ForSpec"}],
    [1, 6, 280],
    [2, 7, -1, {"name":"Statement"}],
    [2, 187, 282, {"name":"TypeParams"},
     0, 282],
    [1, 6, 283],
    [3, "keyword", e[20], 284,
     0, 286],
    [1, 6, 285],
    [1, 192, 286],
    [1, 6, 287],
    [3, "keyword", /^implements(?![a-zA-Z¡-￿_0-9_\$])/, 288,
     0, 290],
    [1, 6, 289],
    [1, 234, 290],
    [1, 6, 291],
    [2, 467, -1, {"name":"ClassBody"}],
    [1, 298, 293,
     0, -1],
    [1, 6, 294],
    [",", 295,
     0, -1],
    [1, 6, 296],
    [1, 298, 297,
     0, 297],
    [1, 6, 294],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 299,
     3, "def", e[19], -1],
    [1, 6, 300],
    [3, "keyword", e[33], 301],
    [1, 6, 302],
    [3, "def", e[19], -1],
    ["{", 304],
    [1, 495, 305,
     2, 501, 306, {"name":"doccomment.type"}],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 305,
     0, 306],
    ["}", -1],
    [1, 495, 308],
    [0, 309,
     2, 303, 308, {"name":"doccomment.braced"},
     0, -1],
    [e[34], 310],
    [0, 309,
     0, 308],
    ["\\", 312,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[29], -1,
     3, "keyword", e[35], -1,
     3, "keyword", e[36], 314,
     3, "operator", e[37], 314,
     3, "keyword", e[18], 314,
     3, "keyword", e[30], 316,
     3, "keyword", e[6], 322,
     3, "keyword", e[15], 328,
     2, 505, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[39], 333,
     3, "variable", e[19], -1,
     3, "number", e[31], -1,
     2, 155, -1, {"name":"string","token":"string"},
     3, "string-2", e[38], -1,
     1, 166, -1,
     2, 515, -1, {"name":"ArrayLiteral"},
     2, 520, -1, {"name":"ObjectLiteral"},
     2, 525, -1, {"name":"ParenExpr"}],
    [1, 6, 315],
    [1, 313, -1],
    [1, 6, 317],
    [".", 318,
     3, "variable callee", e[39], 319,
     1, 313, -1],
    [1, 6, 320],
    [1, 6, 321],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 391, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 323],
    [3, "keyword", "*", 324,
     0, 324],
    [1, 6, 325],
    [3, "def", e[19], 326,
     0, 326],
    [1, 6, 327],
    [2, 271, -1, {"name":"FunctionDef"}],
    [1, 6, 329],
    [[6, 530], 330,
     0, 331],
    [3, "def type", e[19], 331],
    [1, 6, 332],
    [1, 281, -1],
    [1, 6, 334],
    [2, 391, -1, {"name":"TypeArgs"},
     0, -1],
    [3, "keyword", e[33], 336,
     3, "operator", "!", -1,
     3, "operator", e[40], -1,
     3, "operator", e[41], 338,
     3, "keyword", e[42], 338,
     2, 531, -1, {"name":"ArgList"},
     1, 166, -1,
     ".", 340,
     "[", 344,
     3, "operator", "?", 348],
    [1, 6, 337],
    [1, 192, -1],
    [1, 6, 339],
    [1, 181, -1],
    [1, 6, 341],
    [3, "property callee", e[44], 342,
     3, "property", e[19], -1],
    [1, 6, 343],
    [2, 391, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 345],
    [1, 181, 346],
    [1, 6, 347],
    ["]", -1],
    [1, 6, 349],
    [1, 181, 350],
    [1, 6, 351],
    [3, "operator", ":", 352],
    [1, 6, 353],
    [1, 181, -1],
    [3, "def type", e[19], 355,
     0, -1],
    [1, 6, 356],
    [3, "keyword", e[20], 357,
     0, 358],
    [1, 6, 359],
    [1, 6, 360],
    [1, 192, 358],
    [3, "operator", "=", 361,
     0, 362],
    [1, 6, 363],
    [1, 6, 364],
    [1, 192, 362],
    [",", 365,
     0, -1],
    [1, 6, 366],
    [3, "def type", e[19], 367,
     0, 368],
    [1, 6, 369],
    [1, 6, 364],
    [3, "keyword", e[20], 370,
     0, 371],
    [1, 6, 372],
    [1, 6, 373],
    [1, 192, 371],
    [3, "operator", "=", 374,
     0, 368],
    [1, 6, 375],
    [1, 192, 368],
    ["(", 377],
    [1, 6, 378],
    [[6, 540], -1],
    ["[", 380],
    [1, 6, 381],
    [1, 234, 382],
    [1, 6, 383],
    ["]", -1],
    [e[19], 385],
    [1, 6, 386],
    [".", -1],
    [1, 313, 388],
    [1, 6, 389],
    [1, 543, 390,
     0, -1],
    [1, 6, 389],
    ["<", 392],
    [1, 6, 393],
    [1, 234, 394],
    [1, 6, 395],
    [">", -1],
    [2, 443, -1, {"name":"ParamList"}],
    [3, "keyword", e[30], 398,
     0, 398,
     0, 404],
    [1, 6, 399],
    [2, 187, 400, {"name":"TypeParams"},
     0, 400],
    [1, 6, 401],
    [2, 443, 402, {"name":"ParamList"}],
    [1, 6, 403],
    [1, 448, -1,
     0, -1],
    [3, "keyword", e[43], 405,
     "[", 406,
     3, "def property", e[19], 407,
     2, 155, 407, {"name":"string","token":"string"},
     3, "number", e[31], 407],
    [1, 6, 404],
    [1, 6, 408],
    [1, 6, 409],
    [e[19], 410],
    [/^\??/, 411],
    [1, 6, 412],
    [1, 6, 413],
    [":", 414],
    [2, 187, 415, {"name":"TypeParams"},
     0, 415,
     0, 416],
    [1, 6, 417],
    [1, 6, 418],
    [1, 6, 419],
    [1, 192, 420],
    [2, 443, 416, {"name":"ParamList"}],
    [1, 448, -1,
     0, -1],
    [1, 6, 421],
    ["]", 422],
    [1, 6, 423],
    [":", 424],
    [1, 6, 425],
    [1, 192, -1],
    [3, "def property", e[19], 427,
     0, -1],
    [1, 6, 428],
    [3, "operator", "=", 429,
     0, 430],
    [1, 6, 431],
    [1, 6, 432],
    [1, 387, 430],
    [",", 433,
     0, -1],
    [1, 6, 434],
    [3, "def property", e[19], 435,
     0, 436],
    [1, 6, 437],
    [1, 6, 432],
    [3, "operator", "=", 438,
     0, 436],
    [1, 6, 439],
    [1, 387, 436],
    [3, "operator", "...", 441,
     0, 441],
    [1, 6, 442],
    [3, "def", e[19], -1,
     2, 562, -1, {"name":"ArrayPattern"},
     2, 567, -1, {"name":"ObjectPattern"}],
    ["(", 444],
    [1, 6, 445],
    [1, 572, 446],
    [1, 6, 447],
    [")", -1],
    [":", 449],
    [1, 6, 450],
    [[5, 612], 451,
     0, 454],
    [3, "variable", e[19], 452],
    [1, 6, 453],
    [3, "keyword", e[46], 454],
    [1, 6, 455],
    [1, 192, -1],
    ["(", 457],
    [1, 6, 458],
    [2, 615, 459, {"name":"StatementMaybeOf"}],
    [1, 6, 460],
    [1, 181, 461,
     0, 461,
     0, 465],
    [1, 6, 462],
    [";", 463],
    [1, 6, 464],
    [1, 181, 465,
     0, 465],
    [1, 6, 466],
    [")", -1],
    ["{", 468],
    [1, 6, 469],
    [0, 470,
     "@", 471,
     "}", -1],
    [3, "keyword", e[43], 472,
     3, "keyword", e[47], 473,
     0, 473],
    [1, 6, 474],
    [1, 6, 470],
    [1, 6, 475],
    [1, 181, 476],
    [3, "def property", e[19], 477,
     "[", 478,
     3, "number", e[31], 477,
     2, 155, 477, {"name":"string","token":"string"}],
    [1, 6, 469],
    [1, 6, 479],
    [1, 6, 480],
    [3, "keyword", "*", 481,
     0, 481,
     /^\??/, 482],
    [1, 181, 483],
    [1, 6, 484],
    [1, 6, 485],
    [1, 6, 486],
    [2, 271, 476, {"name":"FunctionDef"}],
    [":", 487,
     0, 488],
    ["]", 477],
    [1, 6, 489],
    [1, 6, 490],
    [1, 192, 488],
    [3, "operator", "=", 491,
     0, 492],
    [1, 6, 493],
    [1, 6, 494],
    [1, 181, 492],
    [e[22], 476],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, 496,
     3, "tag", /^\@[a-zA-Z¡-￿_]+/, -1],
    [e[26], 496,
     "{", 497,
     0, 498,
     0, -1],
    [2, 501, 499, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_]+/, -1,
     0, -1],
    ["}", 500],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 500,
     0, 498],
    [3, "type", "{", 502,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 501,
     "\n", 503,
     0, -1],
    [2, 501, 504, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 501],
    [/^(?=\*\/)/, 501,
     3, "type", "}", 501],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 620]], 509,
     [5, 626], 506],
    [2, 443, 507, {"name":"ParamList"}],
    [1, 6, 508],
    [1, 448, 509,
     0, 509],
    [1, 6, 510],
    [2, 631, -1, {"name":"ArrowRest"}],
    [/^ */, 512],
    [1, 636, 513,
     0, 514],
    [/^ */, 514],
    ["(", -1],
    ["[", 516],
    [1, 6, 517],
    [1, 638, 518],
    [1, 6, 519],
    ["]", -1],
    ["{", 521],
    [1, 6, 522],
    [1, 644, 523],
    [1, 6, 524],
    ["}", -1],
    ["(", 526],
    [1, 6, 527],
    [1, 181, 528],
    [1, 6, 529],
    [")", -1],
    [3, "keyword", e[20], -1],
    ["(", 532],
    [1, 6, 533],
    [1, 638, 534],
    [1, 6, 535],
    [")", -1],
    [/^ */, 537],
    [1, 636, 538,
     0, 539],
    [/^ */, 539],
    ["(", -1],
    [/^(?:\)|\.\.\.)/, -1,
     e[19], 541],
    [1, 6, 542],
    [/^[\?\:]/, -1],
    [3, "keyword", e[33], 544,
     3, "operator", "!", -1,
     3, "operator", e[40], -1,
     3, "operator", e[41], 546,
     3, "keyword", e[42], 546,
     2, 531, -1, {"name":"ArgList"},
     1, 166, -1,
     ".", 548,
     "[", 552,
     3, "operator", "?", 556],
    [1, 6, 545],
    [1, 192, -1],
    [1, 6, 547],
    [1, 387, -1],
    [1, 6, 549],
    [3, "property callee", e[44], 550,
     3, "property", e[19], -1],
    [1, 6, 551],
    [2, 391, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 553],
    [1, 181, 554],
    [1, 6, 555],
    ["]", -1],
    [1, 6, 557],
    [1, 181, 558],
    [1, 6, 559],
    [3, "operator", ":", 560],
    [1, 6, 561],
    [1, 387, -1],
    ["[", 563],
    [1, 6, 564],
    [1, 650, 565],
    [1, 6, 566],
    ["]", -1],
    ["{", 568],
    [1, 6, 569],
    [1, 656, 570],
    [1, 6, 571],
    ["}", -1],
    ["@", 573,
     0, 574,
     0, -1],
    [1, 6, 575],
    [1, 6, 576],
    [1, 181, 574],
    [3, "keyword", e[43], 577,
     e[45], 578],
    [1, 6, 576],
    [1, 6, 579],
    [1, 440, 580],
    [1, 6, 581],
    [/^\??/, 582],
    [1, 6, 583],
    [":", 584,
     0, 585],
    [1, 6, 586],
    [1, 6, 587],
    [1, 192, 585],
    [3, "operator", "=", 588,
     0, 589],
    [1, 6, 590],
    [1, 6, 591],
    [1, 387, 589],
    [",", 592,
     0, -1],
    [1, 6, 593],
    ["@", 594,
     0, 595,
     0, 596],
    [1, 6, 597],
    [1, 6, 598],
    [1, 6, 591],
    [1, 181, 595],
    [3, "keyword", e[43], 599,
     e[45], 600],
    [1, 6, 598],
    [1, 6, 601],
    [1, 440, 602],
    [1, 6, 603],
    [/^\??/, 604],
    [1, 6, 605],
    [":", 606,
     0, 607],
    [1, 6, 608],
    [1, 6, 609],
    [1, 192, 607],
    [3, "operator", "=", 610,
     0, 596],
    [1, 6, 611],
    [1, 387, 596],
    [e[19], 613],
    [1, 6, 614],
    [3, "keyword", e[46], -1],
    [2, 7, 616, {"name":"Statement"}],
    [1, 6, 617],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 618,
     0, -1],
    [1, 6, 619],
    [1, 181, -1],
    [1, 6, 621],
    [":", 622,
     0, 625],
    [1, 6, 623],
    [1, 192, 624],
    [1, 6, 625],
    ["=>", -1],
    [2, 443, 627, {"name":"ParamList"}],
    [1, 6, 628],
    [1, 448, 629,
     0, 629],
    [1, 6, 630],
    ["=>", -1],
    [3, "operator", "=>", 632],
    [1, 6, 633],
    [2, 187, 634, {"name":"TypeParams"},
     0, 634],
    [1, 6, 635],
    [2, 177, -1, {"name":"Block"},
     1, 387, -1],
    ["<", 637],
    [1, 636, 637,
     [1, "=>", [0, /^(?!\>)/, /^[^]/]], 637,
     ">", -1],
    [1, 387, 639,
     0, -1],
    [1, 6, 640],
    [",", 641,
     0, -1],
    [1, 6, 642],
    [1, 387, 643,
     0, 643],
    [1, 6, 640],
    [2, 662, 645, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 646],
    [",", 647,
     0, -1],
    [1, 6, 648],
    [2, 662, 649, {"name":"ObjectMember"},
     0, 649],
    [1, 6, 646],
    [1, 677, 651,
     0, 651,
     0, -1],
    [1, 6, 652],
    [",", 653,
     0, -1],
    [1, 6, 654],
    [1, 677, 655,
     0, 655,
     0, 655],
    [1, 6, 652],
    [1, 682, 657,
     0, -1],
    [1, 6, 658],
    [",", 659,
     0, -1],
    [1, 6, 660],
    [1, 682, 661,
     0, 661],
    [1, 6, 658],
    [3, "keyword", e[47], 663,
     0, 663],
    [1, 6, 664],
    [3, "def property", e[19], 665,
     "[", 666,
     3, "number", e[31], 665,
     2, 155, 665, {"name":"string","token":"string"},
     3, "operator", "...", 667],
    [1, 6, 668],
    [1, 6, 669],
    [1, 6, 670],
    [3, "keyword", "*", 671,
     0, 671,
     ":", 672,
     0, -1],
    [1, 181, 673],
    [1, 387, -1],
    [1, 6, 674],
    [1, 6, 675],
    [1, 6, 676],
    [2, 271, -1, {"name":"FunctionDef"}],
    [1, 387, -1],
    ["]", 665],
    [1, 440, 678],
    [1, 6, 679],
    [3, "operator", "=", 680,
     0, -1],
    [1, 6, 681],
    [1, 387, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 683,
     3, "property", e[19], 687,
     3, "operator", "...", 691],
    [1, 6, 684],
    [3, "operator", "=", 685,
     0, -1],
    [1, 6, 686],
    [1, 387, -1],
    [1, 6, 688],
    [":", 689],
    [1, 6, 690],
    [1, 677, -1],
    [1, 6, 692],
    [1, 677, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  function hasSubStatement(context) {
    var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
    return m && m[1]
  }

  function isSwitch(context) {
    return context && context.name == "Statement" &&
      /^switch\b/.test(context.startLine.slice(context.startPos))
  }

  function isLabel(text) {
    return text && /^\s*(case|default)\b/.test(text)
  }

  function aligned(cx) {
    return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}", ObjType: "}",
    ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && blockish.indexOf(cx.name) > -1) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "InitializerList") {
      return base + 2
    } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
      return base + 2 * config.indentUnit
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  function statementIndent(cx, config) {
    for (;; cx = cx.parent) {
      if (!cx) { return 0 }
      if (statementish.indexOf(cx.name) > -1 || (cx.parent && bracketed[cx.parent.name]))
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
  }

  function canInsertSemi(string, pos) {
    for (var i = pos - 1; i >= 0; i--) {
      var ch = string.charCodeAt(i);
      if (ch === 10) { break }
      if (ch !== 32 && ch !== 9) { return false }
    }
    return true
  }

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"];

  var TSMode = (function (superclass) {
    function TSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.conf = conf;
    }

    if ( superclass ) TSMode.__proto__ = superclass;
    TSMode.prototype = Object.create( superclass && superclass.prototype );
    TSMode.prototype.constructor = TSMode;

    TSMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    TSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.conf)
    };

    return TSMode;
  }(CodeMirror.GrammarMode));

  var meta = {
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { TSMode.prototype[prop] = meta[prop]; }

  CodeMirror.registerHelper("wordChars", "google-typescript", /[\w$]/);

  CodeMirror.defineMode("google-typescript", function (conf, modeConf) { return new TSMode(conf, modeConf); });

})));
