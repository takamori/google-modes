(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^static_assert(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z](?:[A-Z][0-9])*_[A-Z0-9_]*(?![a-zA-Z¡-￿_0-9]))/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^class(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:\.\.\.)?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^new(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\-\>|(?!\.\.)\.)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?!\>)/, /^(?:\.\.\.|\(|\=|\>|\,)/, /^(?:\*|\&\&|\&)/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 12, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[5], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[38], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[51], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[30], -1,
   3, "type", e[32], -1,
   3, "type", e[33], -1,
   3, "keyword", e[31], -1,
   3, "atom", e[50], -1,
   3, "meta", e[17], -1,
   1, 134, -1,
   3, "number", e[23], -1,
   2, 141, -1, {"name":"string","token":"string"},
   2, 146, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[52], -1,
   3, "operator", e[54], -1,
   2, 147, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[1], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[47], -1,
   3, "keyword", e[37], -1,
   3, "keyword", e[48], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[35], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[26], -1,
   3, "keyword", e[27], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[45], -1,
   3, "keyword", e[46], -1,
   3, "keyword", e[55], -1,
   3, "keyword", e[25], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[49], -1,
   3, "keyword", e[36], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 147, 9, {"name":"comment","token":"comment"},
   0, -1],
  [/^[ \t]*/, 11],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [1, 153, -1,
   1, 170, -1,
   3, "keyword", e[0], 13,
   3, "keyword", e[1], 17,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 29,
   3, "keyword", e[4], 44,
   1, 181, -1,
   2, 194, -1, {"name":"Template"},
   [7, "constructorAhead"], 50,
   3, "keyword", e[5], 53,
   3, "keyword", e[6], 57,
   3, "keyword", e[7], 58,
   3, "keyword", e[8], 59,
   3, "keyword", e[9], 83,
   3, "keyword", e[10], 88,
   2, 203, -1, {"name":"Block"},
   3, "keyword", e[11], 92,
   3, "keyword", e[12], 94,
   3, "keyword", e[13], 98,
   3, "keyword", e[14], 102,
   3, "keyword", e[15], 108,
   3, "keyword", e[16], 109,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 207]], 108,
   3, "meta", e[17], 112,
   2, 208, 116, {"name":"DeclType"},
   ";", -1,
   1, 225, 132],
  [1, 9, 14],
  [2, 230, 15, {"name":"ArgList"}],
  [1, 9, 16],
  [";", -1],
  [1, 9, 18],
  [1, 235, 19,
   0, 19],
  [1, 9, 20],
  [3, "operator", "=", 21,
   2, 238, -1, {"name":"NamespaceBlock"}],
  [1, 9, 22],
  [1, 134, 23],
  [1, 9, 24],
  [";", -1],
  [1, 9, 26],
  [1, 225, 27],
  [1, 9, 28],
  [";", -1],
  [1, 9, 30],
  [2, 203, 31, {"name":"Block"}],
  [1, 9, 32],
  [3, "keyword", e[18], 33,
   0, -1],
  [1, 9, 34],
  ["(", 35],
  [1, 9, 36],
  [1, 242, 37],
  [1, 9, 38],
  [1, 255, 39,
   0, 39],
  [1, 9, 40],
  [")", 41],
  [1, 9, 42],
  [2, 203, 43, {"name":"Block"}],
  [1, 9, 32],
  [1, 9, 45],
  ["{", 46],
  [1, 9, 47],
  [2, 141, 48, {"name":"string","token":"string"}],
  [1, 9, 49],
  ["}", -1],
  [1, 235, 51],
  [1, 9, 52],
  [2, 267, -1, {"name":"FunctionDef"}],
  [1, 9, 54],
  [3, "type def", e[19], 55,
   0, 55],
  [1, 9, 56],
  [2, 300, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 60],
  [1, 9, 61],
  [1, 9, 62],
  ["(", 63],
  [2, 318, 64, {"name":"CondExpr"}],
  [2, 12, 65, {"name":"Statement"}],
  [1, 9, 66],
  [1, 9, 67],
  [1, 9, 68],
  [2, 12, 69, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[7], 70],
  [1, 9, 71],
  [1, 9, 72],
  [1, 225, 73,
   0, 73],
  [2, 318, 74, {"name":"CondExpr"}],
  [1, 9, 75],
  [1, 9, 76],
  [";", 77],
  [";", -1],
  [1, 9, 78],
  [1, 225, 79,
   0, 79],
  [1, 9, 80],
  [")", 81],
  [1, 9, 82],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 84],
  [2, 318, 85, {"name":"CondExpr"}],
  [1, 9, 86],
  [2, 12, 87, {"name":"Statement"}],
  [2, 323, -1, {"name":"Alternative"}],
  [1, 9, 89],
  [2, 318, 90, {"name":"CondExpr"}],
  [1, 9, 91],
  [2, 203, -1, {"name":"Block"}],
  [1, 9, 93],
  [";", -1],
  [1, 9, 95],
  [e[19], 96],
  [1, 9, 97],
  [";", -1],
  [1, 9, 99],
  [1, 225, 100,
   0, 100],
  [1, 9, 101],
  [";", -1],
  [1, 9, 103],
  [1, 235, 104,
   0, 104],
  [1, 9, 105],
  [2, 327, 106, {"name":"BlockOf"},
   0, 106],
  [1, 9, 107],
  [";", -1],
  [1, 9, 110],
  [1, 9, 111],
  [":", -1],
  [1, 225, 108],
  [1, 9, 113],
  [2, 230, 114, {"name":"ArgList"},
   0, 114],
  [1, 9, 115],
  [/^\;?/, -1],
  [1, 9, 117],
  [1, 255, 118],
  [1, 9, 119],
  [3, "meta", e[17], 120,
   [5, 337], 121,
   1, 341, 122,
   0, 122],
  [1, 9, 123],
  [2, 267, -1, {"name":"FunctionDef"}],
  [1, 9, 124],
  [2, 230, 125, {"name":"ArgList"},
   0, 125],
  [",", 126,
   ";", -1],
  [1, 9, 127],
  [1, 9, 128],
  [/^\;?/, -1],
  [1, 235, 129],
  [1, 9, 130],
  [1, 341, 131,
   0, 131],
  [1, 9, 124],
  [1, 9, 133],
  [";", -1],
  [0, 135,
   3, "type", e[20], -1,
   2, 344, 140, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 345, 136],
  [0, 135,
   3, "type qualified", e[20], 137,
   2, 350, 137, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 351, 138, {"name":"TemplateArgs"},
   0, -1],
  [/^(?=\:\:)/, 139,
   0, -1],
  [1, 134, -1],
  [2, 351, -1, {"name":"TemplateArgs"},
   0, -1],
  [/^R\"(?:(?!\().)*\(/, 142,
   /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 143],
  [[0, [7, "rawStringContinues"], /^[^]/], 142,
   "\"", -1],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 144],
  ["\\", 145,
   [0, /^(?!\")/, /^[^]/], 144,
   "\"", -1],
  [/^[^]/, 144],
  [3, "keyword", e[21], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 148,
   "/*", 152,
   /^\/\/.*/, -1],
  [0, 149,
   2, 356, 148, {"name":"doccomment.braced"},
   0, 150],
  [e[43], 151],
  [2, 364, 150, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 149,
   0, 148],
  [[0, /^(?!\*\/)/, /^[^]/], 152,
   "*/", -1],
  [3, "keyword", e[22], 155,
   [0, [5, 372], "["], 156],
  [0, 153,
   0, -1],
  [1, 9, 157],
  [1, 9, 158],
  ["(", 159],
  ["[", 160],
  [1, 9, 161],
  [1, 9, 162],
  [3, "number", e[23], 163],
  [1, 376, 164],
  [1, 9, 165],
  [1, 9, 166],
  [")", 167],
  ["]", 168],
  [1, 9, 154],
  [1, 9, 169],
  ["]", 167],
  [3, "keyword", e[24], 171,
   3, "keyword", e[14], 171],
  [1, 9, 172],
  [1, 153, 173,
   0, 173],
  [1, 9, 174],
  [3, "type def", e[19], 175],
  [1, 9, 176],
  [":", 177,
   0, 179],
  [1, 9, 178],
  [1, 398, 179],
  [1, 9, 180],
  [";", -1,
   2, 412, -1, {"name":"ClassBody"}],
  [3, "keyword", e[25], 182],
  [1, 9, 183],
  [3, "keyword", e[21], 184,
   3, "keyword", e[1], 185,
   0, 185],
  [1, 9, 186],
  [1, 9, 187],
  [1, 242, 188],
  [1, 134, 188],
  [1, 9, 189],
  [3, "operator", "=", 190,
   0, 192],
  [1, 9, 191],
  [1, 242, 192],
  [1, 9, 193],
  [";", -1],
  [3, "keyword", e[26], 195,
   0, 195],
  [1, 9, 196],
  [3, "keyword", e[27], 197],
  [1, 9, 198],
  [2, 416, 199, {"name":"TemplateParams"}],
  [1, 9, 200],
  [1, 9, 201],
  [1, 9, 202],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 204],
  [1, 9, 205],
  [2, 12, 206, {"name":"Statement"},
   "}", -1],
  [1, 9, 205],
  [e[39], 207,
   /^\:(?!\:)/, -1],
  [0, 209,
   0, 210,
   3, "keyword", e[28], 221,
   [5, 421], 222],
  [3, "keyword", e[29], 211,
   3, "keyword", e[30], 211,
   3, "keyword", e[31], 211],
  [3, "type", e[32], 212],
  [1, 9, 213],
  [1, 9, 214],
  [0, 209,
   3, "keyword", e[28], 215,
   0, 216,
   1, 426, 215],
  [0, 210,
   3, "type", e[33], 215,
   0, 215],
  [1, 9, 217],
  [3, "type", e[32], 218],
  [1, 431, 219,
   0, -1],
  [0, 216,
   1, 9, 220,
   0, 215],
  [1, 9, 217],
  [3, "type", e[33], 215],
  [1, 9, 223],
  [1, 426, 221],
  [1, 431, 224,
   0, -1],
  [1, 9, 223],
  [1, 438, 226,
   1, 455, 227],
  [1, 9, 225],
  [1, 9, 228],
  [1, 486, 229,
   0, -1],
  [1, 9, 228],
  ["(", 231],
  [1, 9, 232],
  [1, 507, 233],
  [1, 9, 234],
  [")", -1],
  [0, 236,
   3, "def", e[34], -1],
  [1, 513, 237],
  [0, 236,
   3, "qualified def", e[34], -1],
  ["{", 239],
  [1, 9, 240],
  [2, 12, 241, {"name":"Statement"},
   "}", -1],
  [1, 9, 240],
  [3, "keyword", e[21], 243,
   0, 245],
  [1, 9, 244],
  [1, 242, -1],
  [3, "keyword", e[29], 246,
   3, "keyword", e[30], 246,
   3, "keyword", e[31], 246,
   3, "keyword", e[14], 247,
   0, 247],
  [1, 9, 245],
  [1, 9, 248],
  [3, "keyword", e[28], 249,
   0, 250,
   1, 426, 249],
  [1, 9, 251],
  [3, "type", e[32], 252],
  [1, 431, 253,
   0, -1],
  [0, 250,
   1, 9, 254,
   0, 249],
  [1, 9, 251],
  [3, "type", e[33], 249],
  [0, 256,
   "(", 263],
  [e[59], 257,
   1, 235, 258],
  [1, 9, 256],
  [1, 9, 259],
  ["[", 260,
   0, -1],
  [1, 9, 261],
  ["]", 262],
  [1, 9, 259],
  [1, 9, 264],
  [1, 255, 265],
  [1, 9, 266],
  [")", -1],
  [2, 518, 268, {"name":"ParamList"}],
  [1, 9, 269],
  [3, "keyword", e[31], 270,
   /^(?:\&|\&\&)?/, 271],
  [1, 9, 269],
  [1, 9, 272],
  [3, "keyword", e[35], 273,
   3, "keyword", e[2], 274,
   0, 285],
  [1, 9, 275],
  [1, 9, 276],
  ["(", 277,
   0, 285],
  ["(", 278],
  [1, 9, 279],
  [1, 9, 280],
  [1, 225, 281],
  [1, 523, 282],
  [1, 9, 283],
  [1, 9, 284],
  [")", 285],
  [")", 285],
  [1, 9, 286],
  [1, 153, 287,
   0, 287],
  [1, 9, 288],
  ["->", 289,
   0, 291],
  [1, 9, 290],
  [1, 242, 291],
  [1, 9, 292],
  [3, "keyword", e[36], 293,
   2, 529, 294, {"name":"InitializerList"},
   0, 294],
  [1, 9, 292],
  [1, 9, 295],
  [";", -1,
   2, 203, -1, {"name":"Block"},
   3, "operator", "=", 296],
  [1, 9, 297],
  [3, "keyword", e[15], 298,
   3, "keyword", e[37], 298],
  [1, 9, 299],
  [";", -1],
  ["{", 301],
  [1, 9, 302],
  [1, 532, 303,
   0, 316],
  [1, 9, 304],
  [3, "operator", "=", 305,
   0, 306],
  [1, 9, 307],
  [1, 9, 308],
  [1, 225, 306],
  [",", 309,
   0, 316],
  [1, 9, 310],
  [1, 532, 311,
   0, 312],
  [1, 9, 313],
  [1, 9, 308],
  [3, "operator", "=", 314,
   0, 312],
  [1, 9, 315],
  [1, 225, 312],
  [1, 9, 317],
  ["}", -1],
  ["(", 319],
  [1, 9, 320],
  [1, 225, 321,
   0, 321],
  [1, 9, 322],
  [")", -1],
  [1, 9, 324],
  [3, "keyword", e[38], 325,
   0, -1],
  [1, 9, 326],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 328],
  [1, 9, 329],
  [1, 535, 330,
   0, 335],
  [1, 9, 331],
  [";", 332,
   0, 335],
  [1, 9, 333],
  [1, 535, 334,
   0, 334],
  [1, 9, 331],
  [1, 9, 336],
  ["}", -1],
  ["(", 338],
  [1, 9, 339],
  [")", -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[31], -1,
   3, "type", e[32], -1,
   3, "keyword", e[28], -1,
   [5, 421], 340],
  [1, 426, -1],
  [3, "operator", "=", 342,
   2, 546, -1, {"name":"BlockOf"},
   2, 230, -1, {"name":"ArgList"}],
  [1, 9, 343],
  [1, 225, -1],
  [3, "callee", e[56], -1,
   e[19], -1],
  ["::", -1,
   [5, 556], 346],
  [3, "variable qualifier", e[19], 347],
  [2, 351, 348, {"name":"TemplateArgs"},
   0, 348],
  [1, 9, 349],
  ["::", -1],
  [2, 344, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  ["<", 352],
  [1, 9, 353],
  [1, 560, 354],
  [1, 9, 355],
  [">", -1],
  ["{", 357],
  [3, "tag", e[40], 358,
   3, "tag", e[41], 359,
   2, 592, 363, {"name":"doccomment.type","token":"type"}],
  [e[39], 358,
   "{", 360,
   0, 359],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 359,
   0, 363],
  [2, 592, 361, {"name":"doccomment.type","token":"type"}],
  ["}", 362],
  [e[39], 362,
   3, "def", e[42], 359,
   0, 359],
  ["}", -1],
  [3, "tag", e[40], 365,
   3, "tag", e[41], 369],
  [e[39], 365,
   "{", 366,
   0, 369],
  [2, 592, 367, {"name":"doccomment.type","token":"type"}],
  ["}", 368],
  [e[39], 368,
   3, "def", e[42], 369,
   0, 369],
  [0, 370,
   2, 356, 369, {"name":"doccomment.braced"},
   0, -1],
  [e[43], 371],
  [0, 370,
   0, 369],
  ["[", 373],
  [1, 9, 374],
  [" ", 375,
   "[", -1],
  [1, 9, 374],
  [1, 593, 377,
   3, "meta", e[19], 378,
   0, -1],
  [1, 9, 376],
  [1, 9, 379],
  ["(", 380,
   0, 381],
  [1, 9, 382],
  [1, 9, 383],
  [1, 598, 384,
   ")", 381],
  [e[44], 385],
  [1, 9, 382],
  [1, 9, 386],
  [",", 387,
   0, -1],
  [1, 9, 388],
  [1, 593, 389,
   3, "meta", e[19], 390],
  [1, 9, 388],
  [1, 9, 391],
  ["(", 392,
   0, 393],
  [1, 9, 394],
  [1, 9, 395],
  [1, 598, 396,
   ")", 393],
  [e[44], 397],
  [1, 9, 394],
  [1, 9, 386],
  [3, "keyword", e[45], 399,
   0, 399,
   0, -1],
  [1, 9, 400],
  [3, "keyword", e[46], 401,
   0, 401],
  [1, 9, 402],
  [1, 242, 403],
  [1, 9, 404],
  [",", 405,
   0, -1],
  [1, 9, 406],
  [3, "keyword", e[45], 407,
   0, 407],
  [1, 9, 408],
  [3, "keyword", e[46], 409,
   0, 409],
  [1, 9, 410],
  [1, 242, 411],
  [1, 9, 404],
  ["{", 413],
  [1, 9, 414],
  [2, 608, 415, {"name":"ClassItem"},
   "}", -1],
  [1, 9, 414],
  ["<", 417],
  [1, 9, 418],
  [1, 619, 419],
  [1, 9, 420],
  [">", -1],
  [/^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 422],
  [1, 426, 423],
  [1, 9, 424],
  [1, 431, 425,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 424],
  [3, "keyword", e[21], 427,
   0, 428],
  [1, 9, 428],
  [0, 429,
   3, "type", e[19], -1],
  [1, 645, 430],
  [0, 429,
   3, "type qualified", e[19], -1],
  [2, 351, -1, {"name":"TemplateArgs"},
   "::", 432,
   1, 153, -1,
   "[", 434,
   /^[\*\&]/, -1,
   3, "keyword", e[31], -1],
  [1, 9, 433],
  [3, "type qualified", e[19], -1],
  [1, 9, 435],
  [3, "number", e[23], 436,
   0, 436],
  [1, 9, 437],
  ["]", -1],
  [3, "keyword", e[37], 439,
   3, "keyword", e[47], 443,
   2, 146, -1, {"name":"prefixOp","token":"operator"}],
  [1, 9, 440],
  ["[", 441,
   0, -1],
  [1, 9, 442],
  ["]", -1],
  [1, 9, 444],
  ["[", 445,
   0, 446],
  [1, 9, 447],
  [1, 9, 448],
  ["]", 446],
  ["(", 449,
   0, 450],
  [1, 9, 451],
  [1, 9, 452],
  [1, 225, 453],
  [1, 153, -1,
   0, -1],
  [1, 9, 454],
  [")", 450],
  [3, "keyword", e[48], -1,
   [0, [5, 650], "["], 456,
   3, "keyword", e[49], 462,
   2, 654, 474, {"name":"ParenExpr"},
   3, "atom", e[50], -1,
   3, "number", e[23], -1,
   2, 141, -1, {"name":"string","token":"string"},
   2, 546, -1, {"name":"BlockOf"},
   3, "keyword", e[51], 476,
   1, 134, -1],
  [1, 9, 457],
  [1, 659, 458],
  [1, 9, 459],
  ["]", 460],
  [1, 9, 461],
  [2, 267, -1, {"name":"FunctionDef"},
   2, 203, -1, {"name":"Block"}],
  [1, 9, 463],
  ["<", 464],
  [1, 9, 465],
  [1, 242, 466],
  [1, 9, 467],
  [">", 468],
  [1, 9, 469],
  ["(", 470],
  [1, 9, 471],
  [1, 225, 472],
  [1, 9, 473],
  [")", -1],
  [1, 9, 475],
  [1, 225, -1,
   0, -1],
  [1, 9, 477],
  ["(", 478,
   e[44], 479],
  [1, 9, 480],
  [1, 9, 481],
  [1, 242, 482],
  [1, 225, 483],
  [1, 9, 484],
  [1, 9, 485],
  [")", 483],
  [3, "meta", e[17], -1],
  [2, 546, -1, {"name":"BlockOf"},
   2, 230, 487, {"name":"ArgList"},
   e[53], 489,
   2, 230, -1, {"name":"ArgList"},
   "[", 493,
   3, "operator", e[52], -1,
   e[53], 497,
   3, "operator", e[54], 499,
   "?", 501],
  [1, 9, 488],
  [2, 203, -1, {"name":"Block"},
   0, -1],
  [1, 9, 490],
  [2, 669, 491, {"name":"fieldName","token":"property"}],
  [1, 9, 492],
  [2, 351, -1, {"name":"TemplateArgs"},
   0, -1],
  [1, 9, 494],
  [1, 225, 495],
  [1, 9, 496],
  ["]", -1],
  [1, 9, 498],
  [2, 669, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 500],
  [1, 225, -1],
  [1, 9, 502],
  [1, 225, 503],
  [1, 9, 504],
  [":", 505],
  [1, 9, 506],
  [1, 225, -1],
  [1, 225, 508,
   0, -1],
  [1, 9, 509],
  [",", 510,
   0, -1],
  [1, 9, 511],
  [1, 225, 512],
  [1, 9, 509],
  ["::", -1,
   [5, 670], 514],
  [3, "qualifier def", e[19], 515],
  [2, 351, 516, {"name":"TemplateArgs"},
   0, 516],
  [1, 9, 517],
  ["::", -1],
  ["(", 519],
  [1, 9, 520],
  [1, 674, 521],
  [1, 9, 522],
  [")", -1],
  [1, 242, 524,
   0, -1],
  [1, 9, 525],
  [",", 526,
   0, -1],
  [1, 9, 527],
  [1, 242, 528],
  [1, 9, 525],
  [":", 530],
  [1, 9, 531],
  [1, 688, -1],
  [3, "keyword", e[55], 533,
   3, "def property", e[19], -1],
  [3, "operator", "->*", -1,
   ",", -1,
   3, "operator", e[54], -1,
   2, 146, -1, {"name":"prefixOp","token":"operator"},
   /^(?:\(\)|\[\])/, -1,
   3, "keyword", e[47], 534,
   3, "keyword", e[37], 534],
  [/^(?:\[\])?/, -1],
  [1, 242, 536],
  [1, 9, 537],
  [2, 669, 538, {"name":"fieldName","token":"property"},
   0, 538],
  [1, 9, 539],
  [":", 540,
   "[", 541,
   0, -1],
  [1, 9, 542],
  [1, 9, 543],
  [3, "number", e[23], -1],
  [3, "number", e[23], 544,
   0, 544],
  [1, 9, 545],
  ["]", -1],
  ["{", 547],
  [1, 9, 548],
  [1, 225, 549,
   0, 554],
  [1, 9, 550],
  [",", 551,
   0, 554],
  [1, 9, 552],
  [1, 225, 553,
   0, 553],
  [1, 9, 550],
  [1, 9, 555],
  ["}", -1],
  [3, "variable qualifier", e[19], 557],
  [1, 694, 558,
   0, 558],
  [1, 9, 559],
  ["::", -1],
  [3, "keyword", e[27], 561,
   0, 562,
   0, 563,
   0, -1],
  [1, 9, 564],
  [1, 9, 565],
  [3, "keyword", e[29], 566,
   3, "keyword", e[30], 566,
   [5, 699], 567,
   1, 702, 568],
  [2, 351, 562, {"name":"TemplateArgs"}],
  [3, "keyword", e[24], 569,
   3, "keyword", e[21], 569],
  [1, 9, 563],
  [1, 242, 570],
  [1, 9, 571],
  [1, 9, 572],
  [1, 9, 573],
  [e[44], 574],
  [1, 242, 574],
  [2, 518, 568, {"name":"ParamList"},
   1, 341, 568,
   0, 568],
  [1, 9, 575],
  [",", 576,
   0, -1],
  [1, 9, 577],
  [3, "keyword", e[27], 578,
   0, 579,
   0, 580],
  [1, 9, 581],
  [1, 9, 582],
  [3, "keyword", e[29], 583,
   3, "keyword", e[30], 583,
   [5, 708], 584,
   1, 702, 585],
  [2, 351, 579, {"name":"TemplateArgs"}],
  [3, "keyword", e[24], 586,
   3, "keyword", e[21], 586],
  [1, 9, 580],
  [1, 242, 587],
  [1, 9, 588],
  [1, 9, 589],
  [1, 9, 590],
  [e[44], 591],
  [1, 242, 591],
  [2, 518, 585, {"name":"ParamList"},
   1, 341, 585,
   0, 585],
  [1, 9, 575],
  [1, 711, -1],
  ["::", -1,
   [5, 715], 594],
  [3, "meta", e[19], 595],
  [2, 351, 596, {"name":"TemplateArgs"},
   0, 596],
  [1, 9, 597],
  ["::", -1],
  [3, "number", e[23], -1,
   2, 141, -1, {"name":"string","token":"string"},
   e[19], -1,
   3, "operator", e[54], -1,
   ",", -1,
   "(", 599,
   "[", 602,
   "{", 605],
  [1, 9, 600],
  [1, 598, 601,
   ")", -1],
  [1, 9, 600],
  [1, 9, 603],
  [1, 598, 604,
   "]", -1],
  [1, 9, 603],
  [1, 9, 606],
  [1, 598, 607,
   "}", -1],
  [1, 9, 606],
  [3, "keyword", e[46], 609,
   2, 194, -1, {"name":"Template"},
   1, 181, -1,
   3, "keyword", e[0], 611,
   3, "meta", e[17], 615,
   1, 170, -1,
   2, 719, -1, {"name":"ObjectMember"}],
  [1, 9, 610],
  [":", -1],
  [1, 9, 612],
  [2, 230, 613, {"name":"ArgList"}],
  [1, 9, 614],
  [";", -1],
  [1, 9, 616],
  [2, 230, 617, {"name":"ArgList"},
   0, 617],
  [1, 9, 618],
  [/^\;?/, -1],
  [1, 737, 620,
   0, 621,
   0, -1],
  [1, 9, 622],
  [3, "keyword", e[29], 623,
   3, "keyword", e[30], 623,
   1, 242, 624],
  [",", 625,
   0, -1],
  [1, 9, 621],
  [1, 9, 626],
  [1, 9, 627],
  [e[44], 628],
  [1, 737, 629,
   0, 630],
  [1, 9, 631],
  [1, 9, 622],
  [3, "keyword", e[29], 632,
   3, "keyword", e[30], 632,
   1, 242, 633],
  [1, 235, 634],
  [1, 9, 630],
  [1, 9, 635],
  [1, 9, 636],
  [e[44], 637],
  [3, "operator", "=", 638,
   0, 620],
  [1, 9, 639],
  [1, 9, 640],
  [1, 235, 641],
  [1, 702, 620],
  [1, 9, 642],
  [3, "operator", "=", 643,
   0, 629],
  [1, 9, 644],
  [1, 702, 629],
  ["::", -1,
   [5, 748], 646],
  [3, "type qualifier", e[19], 647],
  [2, 351, 648, {"name":"TemplateArgs"},
   0, 648],
  [1, 9, 649],
  ["::", -1],
  ["[", 651],
  [1, 9, 652],
  [e[39], 653,
   /^(?:\&|\=|this|\])/, -1],
  [1, 9, 652],
  ["(", 655],
  [1, 9, 656],
  [1, 225, 657,
   0, 657],
  [1, 9, 658],
  [")", -1],
  ["&", 660,
   "=", 661,
   3, "keyword", e[48], 661,
   0, -1],
  [1, 9, 662],
  [1, 9, 663],
  [1, 134, 661,
   0, 661],
  [",", 664,
   0, -1],
  [1, 9, 665],
  ["&", 666,
   "=", 667,
   3, "keyword", e[48], 667],
  [1, 9, 668],
  [1, 9, 663],
  [1, 134, 667,
   0, 667],
  [3, "callee", e[56], -1,
   e[19], -1],
  [3, "qualifier def", e[19], 671],
  [1, 694, 672,
   0, 672],
  [1, 9, 673],
  ["::", -1],
  [1, 242, 675,
   0, -1],
  [1, 9, 676],
  [1, 255, 677,
   0, 678],
  [1, 9, 679],
  [1, 9, 680],
  [2, 518, 678, {"name":"ParamList"},
   0, 678],
  [",", 681,
   0, -1],
  [1, 9, 682],
  [1, 242, 683],
  [1, 9, 684],
  [1, 255, 685,
   0, 686],
  [1, 9, 687],
  [1, 9, 680],
  [2, 518, 686, {"name":"ParamList"},
   0, 686],
  [1, 752, 689,
   0, -1],
  [1, 9, 690],
  [",", 691,
   0, -1],
  [1, 9, 692],
  [1, 752, 693],
  [1, 9, 690],
  ["<", 695],
  [1, 9, 696],
  [e[57], 697,
   ">", -1],
  [1, 694, 698,
   2, 141, 698, {"name":"string","token":"string"},
   /^[^]/, 698],
  [1, 9, 696],
  [1, 242, 700],
  [1, 9, 701],
  [e[58], -1],
  [1, 438, 703,
   1, 455, 704],
  [1, 9, 702],
  [1, 9, 705],
  [e[57], 706,
   0, -1],
  [1, 486, 707],
  [1, 9, 705],
  [1, 242, 709],
  [1, 9, 710],
  [e[58], -1],
  [/^(?!\}|\*\/)/, 712,
   0, -1],
  ["{", 713,
   /^[^]/, 711],
  [1, 711, 714],
  [/^\}?/, 711],
  [3, "meta", e[19], 716],
  [1, 694, 717,
   0, 717],
  [1, 9, 718],
  ["::", -1],
  [3, "keyword", e[29], 720,
   3, "keyword", e[30], 720,
   3, "keyword", e[31], 720,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 723,
   1, 242, 721],
  [1, 9, 719],
  [1, 9, 722],
  [1, 763, 723],
  [1, 9, 724],
  [2, 267, -1, {"name":"FunctionDef"},
   1, 341, 725,
   ":", 726,
   "[", 727,
   0, 725,
   3, "meta", e[17], 728],
  [1, 9, 729],
  [1, 9, 730],
  [1, 9, 731],
  [1, 9, 732],
  [";", -1],
  [3, "number", e[23], 725],
  [3, "number", e[23], 733,
   0, 733],
  [2, 230, 734, {"name":"ArgList"},
   0, 734],
  [1, 9, 735],
  [1, 9, 736],
  ["]", 725],
  [/^\;?/, -1],
  [3, "keyword", e[27], 738,
   0, 740],
  [1, 9, 739],
  [2, 351, 740, {"name":"TemplateArgs"}],
  [1, 9, 741],
  [3, "keyword", e[24], 742,
   3, "keyword", e[21], 742],
  [1, 9, 743],
  [3, "type def", e[19], 744],
  [1, 9, 745],
  [3, "operator", "=", 746,
   0, -1],
  [1, 9, 747],
  [1, 134, -1,
   3, "number", e[23], -1],
  [3, "type qualifier", e[19], 749],
  [1, 694, 750,
   0, 750],
  [1, 9, 751],
  ["::", -1],
  [2, 669, 753, {"name":"fieldName","token":"property"}],
  [1, 9, 754],
  ["(", 755,
   "{", 756],
  [1, 9, 757],
  [1, 9, 758],
  [1, 507, 759],
  [1, 507, 760],
  [1, 9, 761],
  [1, 9, 762],
  [")", -1],
  ["}", -1],
  [0, 764,
   "(", 771],
  [e[59], 765,
   1, 532, 766],
  [1, 9, 764],
  [1, 9, 767],
  ["[", 768,
   0, -1],
  [1, 9, 769],
  ["]", 770],
  [1, 9, 767],
  [1, 9, 772],
  [1, 763, 773],
  [1, 9, 774],
  [")", -1]
];
var start = 0;
var token = 5;


var cpp = Object.freeze({
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
function isLocalType(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
  return false
}

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    var scope = getScope(state.context, scopes), name = stream.current();
    if (scope) {
      if (!scope.locals) { scope.locals = []; }
      if (once && scope.locals.indexOf(name) > -1)
        { return "variable-2" }
      scope.locals.push(name);
      if (state.context.name != "funcName") { return "def local" }
    }
  } else if (varRE.test(type) && !/qualified/.test(type) &&
             isLocal(state.context, stream.current())) {
    type = type.replace(varRE, "$1variable-2$2");
  }
  return type
}

var typeRE = /(^|\s)type($|\s)/;

function markTypeLocals(type, scopes, stream, state) {
  if (type == "type def") {
    var scope = getScope(state.context, scopes);
    if (scope) {
      if (!scope.localTypes) { scope.localTypes = []; }
      scope.localTypes.push(stream.current());
    }
  } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
             isLocalType(state.context, stream.current())) {
    type += " local";
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
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}",
  ArrayInitializer: "}", NamespaceBlock: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
};

function baseIndent(cx, config) {
  for (var startLine = cx.startLine;; cx = cx.parent) {
    if (cx.name == "CondExpr")
      { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
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

  if (brack && (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" ||
                cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody")) {
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
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
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
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem" ||
        cx.parent && bracketed[cx.parent.name])
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
}

function constructorAhead(line, pos) {
  var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
  return match && match[1] == match[2]
}

function localConstructorAhead(line, pos, cx) {
  var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
  if (!ahead) { return false }
  while (cx.name != "Statement") { cx = cx.parent; }
  var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
  return className ? className[1] == ahead[1] : false
}

var rawStringOpen = /R"(.*?)\(/g;

function rawStringContinues(line, pos, cx) {
  rawStringOpen.lastIndex = cx.startPos;
  var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
  return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
}

var scopes = ["Block", "FunctionDef"];
var typeScopes = ["Template"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
    });
    this.conf = conf;
  }

  if ( superclass ) CppMode.__proto__ = superclass;
  CppMode.prototype = Object.create( superclass && superclass.prototype );
  CppMode.prototype.constructor = CppMode;

  CppMode.prototype.token = function token$$1 (stream, state) {
    return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
  };

  CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  };

  return CppMode;
}(CodeMirror.GrammarMode));

CppMode.prototype.electricInput = /^\s*(?:case .*?:|(?:public|private|protected|default):|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.blockCommentContinue = " * ";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
