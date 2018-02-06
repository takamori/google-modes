(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z_]+|[A-Z]+_[A-Z_]*)/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\<)/, /^(?:\:\:|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\:\:)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^class(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 452]], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?!\>)/];
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
   3, "keyword", e[20], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[54], -1,
   3, "keyword", e[36], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[33], -1,
   3, "type", e[35], -1,
   3, "type", e[37], -1,
   3, "keyword", e[34], -1,
   3, "atom", e[53], -1,
   3, "meta", e[17], -1,
   1, 141, -1,
   3, "number", e[27], -1,
   2, 146, -1, {"name":"string","token":"string"},
   2, 151, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[45], -1,
   3, "operator", e[39], -1,
   2, 152, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[0], -1,
   3, "keyword", e[19], -1,
   3, "keyword", e[40], -1,
   3, "keyword", e[41], -1,
   3, "keyword", e[51], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[43], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[25], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[38], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[26], -1,
   3, "keyword", e[52], -1,
   3, "keyword", e[44], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 152, 9, {"name":"comment","token":"comment"},
   0, -1],
  [/^[ \t]*/, 11],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [1, 158, -1,
   3, "keyword", e[0], 13,
   3, "keyword", e[1], 21,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 40,
   3, "keyword", e[4], 46,
   2, 179, -1, {"name":"Template"},
   [7, "constructorAhead"], 58,
   0, 61,
   3, "keyword", e[5], 71,
   3, "keyword", e[6], 75,
   3, "keyword", e[7], 76,
   3, "keyword", e[8], 77,
   3, "keyword", e[9], 101,
   3, "keyword", e[10], 109,
   2, 188, -1, {"name":"Block"},
   3, "keyword", e[11], 113,
   3, "keyword", e[12], 115,
   3, "keyword", e[13], 119,
   3, "keyword", e[14], 123,
   3, "keyword", e[15], 129,
   3, "keyword", e[16], 130,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 192]], 129,
   3, "meta", e[17], 133,
   2, 193, 137, {"name":"DeclType"},
   ";", -1,
   1, 203, 139],
  [1, 9, 14],
  [1, 208, 15,
   0, 15],
  [1, 9, 16],
  [3, "operator", "=", 17,
   2, 217, -1, {"name":"NamespaceBlock"}],
  [1, 9, 18],
  [1, 141, 19],
  [1, 9, 20],
  [";", -1],
  [1, 9, 22],
  [1, 203, 23],
  [1, 9, 24],
  [";", -1],
  [1, 9, 26],
  [2, 188, 27, {"name":"Block"}],
  [1, 9, 28],
  [3, "keyword", e[18], 29,
   0, -1],
  [1, 9, 30],
  ["(", 31],
  [1, 9, 32],
  [1, 221, 33],
  [1, 9, 34],
  [1, 231, 35,
   0, 35],
  [1, 9, 36],
  [")", 37],
  [1, 9, 38],
  [2, 188, 39, {"name":"Block"}],
  [1, 9, 28],
  [1, 9, 41],
  ["{", 42],
  [1, 9, 43],
  [2, 146, 44, {"name":"string","token":"string"}],
  [1, 9, 45],
  ["}", -1],
  [1, 9, 47],
  [3, "keyword", e[19], 48,
   3, "keyword", e[0], 49,
   0, 49],
  [1, 9, 50],
  [1, 9, 51],
  [1, 221, 52],
  [1, 141, 52],
  [1, 9, 53],
  [3, "operator", "=", 54,
   0, 55],
  [1, 9, 56],
  [1, 9, 57],
  [1, 221, 55],
  [";", -1],
  [1, 208, 59],
  [1, 9, 60],
  [2, 243, -1, {"name":"FunctionDef"}],
  [3, "meta", e[23], 62],
  [1, 9, 63],
  [0, 61,
   1, 274, 64,
   3, "variable qualified", e[22], 65,
   2, 281, 66, {"name":"qualifiedVariableName","token":"qualified"}],
  [1, 9, 67],
  [1, 9, 68],
  [1, 9, 69],
  [1, 282, -1],
  [2, 293, 66, {"name":"TemplateArgs"}],
  [1, 298, 70,
   ";", -1],
  [1, 9, 69],
  [1, 9, 72],
  [3, "type def", e[21], 73,
   0, 73],
  [1, 9, 74],
  [2, 315, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 78],
  [1, 9, 79],
  [1, 9, 80],
  ["(", 81],
  [2, 333, 82, {"name":"CondExpr"}],
  [2, 12, 83, {"name":"Statement"}],
  [1, 9, 84],
  [1, 9, 85],
  [1, 9, 86],
  [2, 12, 87, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[7], 88],
  [1, 9, 89],
  [1, 9, 90],
  [1, 203, 91,
   0, 91],
  [2, 333, 92, {"name":"CondExpr"}],
  [1, 9, 93],
  [1, 9, 94],
  [";", 95],
  [";", -1],
  [1, 9, 96],
  [1, 203, 97,
   0, 97],
  [1, 9, 98],
  [")", 99],
  [1, 9, 100],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 102],
  [2, 333, 103, {"name":"CondExpr"}],
  [1, 9, 104],
  [2, 12, 105, {"name":"Statement"}],
  [1, 9, 106],
  [3, "keyword", e[20], 107,
   0, -1],
  [1, 9, 108],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 110],
  [2, 333, 111, {"name":"CondExpr"}],
  [1, 9, 112],
  [2, 188, -1, {"name":"Block"}],
  [1, 9, 114],
  [";", -1],
  [1, 9, 116],
  [e[21], 117],
  [1, 9, 118],
  [";", -1],
  [1, 9, 120],
  [1, 203, 121,
   0, 121],
  [1, 9, 122],
  [";", -1],
  [1, 9, 124],
  [1, 208, 125,
   0, 125],
  [1, 9, 126],
  [2, 338, 127, {"name":"BlockOf"},
   0, 127],
  [1, 9, 128],
  [";", -1],
  [1, 9, 131],
  [1, 9, 132],
  [":", -1],
  [1, 203, 129],
  [1, 9, 134],
  [2, 348, 135, {"name":"ArgList"},
   0, 135],
  [1, 9, 136],
  [/^\;?/, -1],
  [1, 9, 138],
  [1, 282, -1],
  [1, 9, 140],
  [";", -1],
  [0, 142,
   3, "type", e[24], -1,
   3, "variable", e[22], 145,
   2, 353, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [3, "meta", e[23], 143],
  [0, 142,
   3, "variable qualified", e[22], 144,
   3, "type", e[24], -1,
   2, 281, -1, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 293, -1, {"name":"TemplateArgs"}],
  [2, 293, -1, {"name":"TemplateArgs"}],
  [/^R\"(?:(?!\().)*\(/, 147,
   /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 148],
  [[0, [7, "rawStringContinues"], /^[^]/], 147,
   "\"", -1],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 149],
  ["\\", 150,
   [0, /^(?!\")/, /^[^]/], 149,
   "\"", -1],
  [/^[^]/, 149],
  [3, "keyword", e[19], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 153,
   "/*", 157,
   /^\/\/.*/, -1],
  [0, 154,
   2, 354, 153, {"name":"doccomment.braced"},
   0, 155],
  [e[50], 156],
  [2, 362, 155, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 154,
   0, 153],
  [[0, /^(?!\*\/)/, /^[^]/], 157,
   "*/", -1],
  [3, "keyword", e[25], 159,
   3, "keyword", e[14], 159],
  [1, 9, 160],
  [3, "keyword", e[26], 161,
   0, 167],
  [1, 9, 162],
  ["(", 163],
  [1, 9, 164],
  [3, "number", e[27], 165],
  [1, 9, 166],
  [")", 167],
  [1, 9, 168],
  [3, "type def", e[21], 169],
  [1, 9, 170],
  [":", 171,
   0, 177],
  [1, 9, 172],
  [3, "keyword", e[28], 173,
   0, 173],
  [1, 9, 174],
  [3, "keyword", e[29], 175,
   0, 175],
  [1, 9, 176],
  [1, 221, 177],
  [1, 9, 178],
  [";", -1,
   2, 370, -1, {"name":"ClassBody"}],
  [3, "keyword", e[30], 180,
   0, 180],
  [1, 9, 181],
  [3, "keyword", e[31], 182],
  [1, 9, 183],
  [2, 374, 184, {"name":"TemplateParams"}],
  [1, 9, 185],
  [1, 9, 186],
  [1, 9, 187],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 189],
  [1, 9, 190],
  [2, 12, 191, {"name":"Statement"},
   "}", -1],
  [1, 9, 190],
  [e[46], 192,
   /^\:(?!\:)/, -1],
  [0, 194,
   0, 195,
   1, 274, -1],
  [3, "keyword", e[32], 196,
   3, "keyword", e[33], 196,
   3, "keyword", e[34], 196],
  [3, "type", e[35], 197],
  [1, 9, 198],
  [1, 9, 199],
  [0, 194,
   3, "keyword", e[36], 200,
   1, 379, 200],
  [0, 195,
   3, "type", e[37], 200,
   0, 200],
  [1, 9, 201],
  [1, 385, 202,
   0, -1],
  [1, 9, 201],
  [1, 392, 204,
   1, 407, 205],
  [1, 9, 203],
  [1, 9, 206],
  [1, 298, 207,
   0, -1],
  [1, 9, 206],
  [3, "keyword", e[38], 209,
   0, 211,
   3, "def", e[42], -1],
  [3, "operator", "->*", -1,
   ",", -1,
   3, "operator", e[39], -1,
   2, 151, -1, {"name":"prefixOp","token":"operator"},
   /^(?:\(\)|\[\])/, -1,
   3, "keyword", e[40], 210,
   3, "keyword", e[41], 210],
  [/^(?:\[\])?/, -1],
  [3, "meta", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\<)/, 212,
   3, "meta", e[23], 213],
  [1, 9, 214],
  [0, 211,
   3, "qualified def", e[42], -1],
  [2, 293, 215, {"name":"TemplateArgs"}],
  [3, "meta", "::", 216],
  [3, "qualified def", e[42], 213],
  ["{", 218],
  [1, 9, 219],
  [2, 12, 220, {"name":"Statement"},
   "}", -1],
  [1, 9, 219],
  [3, "keyword", e[19], 222,
   0, 224],
  [1, 9, 223],
  [1, 221, -1],
  [3, "keyword", e[32], 225,
   3, "keyword", e[33], 225,
   3, "keyword", e[34], 225,
   3, "keyword", e[14], 226,
   0, 226],
  [1, 9, 224],
  [1, 9, 227],
  [3, "keyword", e[36], 228,
   1, 379, 228],
  [1, 9, 229],
  [1, 385, 230,
   0, -1],
  [1, 9, 229],
  [0, 232,
   "(", 239],
  [/^(?:\*|\&\&|\&)/, 233,
   1, 208, 234],
  [1, 9, 232],
  [1, 9, 235],
  ["[", 236,
   0, -1],
  [1, 9, 237],
  ["]", 238],
  [1, 9, 235],
  [1, 9, 240],
  [1, 231, 241],
  [1, 9, 242],
  [")", -1],
  [2, 438, 244, {"name":"ParamList"}],
  [1, 9, 245],
  [3, "keyword", e[34], 246,
   /^(?:\&|\&\&)?/, 247],
  [1, 9, 245],
  [1, 9, 248],
  [3, "keyword", e[43], 249,
   3, "keyword", e[1], 250,
   0, 261],
  [1, 9, 251],
  [1, 9, 252],
  ["(", 253,
   0, 261],
  ["(", 254],
  [1, 9, 255],
  [1, 9, 256],
  [1, 203, 257],
  [1, 443, 258],
  [1, 9, 259],
  [1, 9, 260],
  [")", 261],
  [")", 261],
  [1, 9, 262],
  ["->", 263,
   0, 265],
  [1, 9, 264],
  [1, 221, 265],
  [1, 9, 266],
  [3, "keyword", e[44], 267,
   2, 449, 268, {"name":"InitializerList"},
   0, 268],
  [1, 9, 266],
  [1, 9, 269],
  [";", -1,
   2, 188, -1, {"name":"Block"},
   3, "operator", "=", 270],
  [1, 9, 271],
  [3, "keyword", e[15], 272,
   3, "keyword", e[41], 272],
  [1, 9, 273],
  [";", -1],
  [3, "keyword", e[36], 278,
   3, "keyword", e[19], 275,
   e[55], 276],
  [1, 9, 277],
  [3, "meta", e[23], 276,
   3, "type", e[56], 278],
  [3, "meta", e[23], 277,
   3, "type", e[21], 278],
  [1, 9, 279],
  [1, 385, 280,
   0, -1],
  [1, 9, 279],
  [2, 353, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 231, 283],
  [1, 9, 284],
  [[5, 455], 285,
   1, 461, 286,
   0, 286],
  [2, 243, -1, {"name":"FunctionDef"}],
  [1, 9, 287],
  [",", 288,
   ";", -1],
  [1, 9, 289],
  [1, 208, 290],
  [1, 9, 291],
  [1, 461, 292,
   0, 292],
  [1, 9, 287],
  ["<", 294],
  [1, 9, 295],
  [1, 464, 296],
  [1, 9, 297],
  [">", -1],
  [2, 490, -1, {"name":"BlockOf"},
   2, 348, 299, {"name":"ArgList"},
   2, 348, -1, {"name":"ArgList"},
   "[", 301,
   3, "operator", e[45], -1,
   /^(?:\-\>|\.)/, 305,
   3, "operator", e[39], 307,
   "?", 309],
  [1, 9, 300],
  [2, 188, -1, {"name":"Block"},
   0, -1],
  [1, 9, 302],
  [1, 203, 303],
  [1, 9, 304],
  ["]", -1],
  [1, 9, 306],
  [2, 500, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 308],
  [1, 203, -1],
  [1, 9, 310],
  [1, 203, 311],
  [1, 9, 312],
  [":", 313],
  [1, 9, 314],
  [1, 203, -1],
  ["{", 316],
  [1, 9, 317],
  [1, 208, 318,
   0, 331],
  [1, 9, 319],
  [3, "operator", "=", 320,
   0, 321],
  [1, 9, 322],
  [1, 9, 323],
  [1, 203, 321],
  [",", 324,
   0, 331],
  [1, 9, 325],
  [1, 208, 326,
   0, 327],
  [1, 9, 328],
  [1, 9, 323],
  [3, "operator", "=", 329,
   0, 327],
  [1, 9, 330],
  [1, 203, 327],
  [1, 9, 332],
  ["}", -1],
  ["(", 334],
  [1, 9, 335],
  [1, 203, 336,
   0, 336],
  [1, 9, 337],
  [")", -1],
  ["{", 339],
  [1, 9, 340],
  [1, 501, 341,
   0, 346],
  [1, 9, 342],
  [";", 343,
   0, 346],
  [1, 9, 344],
  [1, 501, 345,
   0, 345],
  [1, 9, 342],
  [1, 9, 347],
  ["}", -1],
  ["(", 349],
  [1, 9, 350],
  [1, 512, 351],
  [1, 9, 352],
  [")", -1],
  [3, "callee", e[57], -1,
   e[21], -1],
  ["{", 355],
  [3, "tag", e[47], 356,
   3, "tag", e[48], 357,
   2, 518, 361, {"name":"doccomment.type","token":"type"}],
  [e[46], 356,
   "{", 358,
   0, 357],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 357,
   0, 361],
  [2, 518, 359, {"name":"doccomment.type","token":"type"}],
  ["}", 360],
  [e[46], 360,
   3, "def", e[49], 357,
   0, 357],
  ["}", -1],
  [3, "tag", e[47], 363,
   3, "tag", e[48], 367],
  [e[46], 363,
   "{", 364,
   0, 367],
  [2, 518, 365, {"name":"doccomment.type","token":"type"}],
  ["}", 366],
  [e[46], 366,
   3, "def", e[49], 367,
   0, 367],
  [0, 368,
   2, 354, 367, {"name":"doccomment.braced"},
   0, -1],
  [e[50], 369],
  [0, 368,
   0, 367],
  ["{", 371],
  [1, 9, 372],
  [2, 519, 373, {"name":"ClassItem"},
   "}", -1],
  [1, 9, 372],
  ["<", 375],
  [1, 9, 376],
  [1, 526, 377],
  [1, 9, 378],
  [">", -1],
  [0, 380,
   3, "keyword", e[19], 383,
   0, 384],
  [3, "type", e[35], 381],
  [0, 380,
   1, 9, 382,
   0, -1],
  [3, "type", e[37], -1],
  [1, 9, 384],
  [3, "meta", e[23], 384,
   3, "type", e[21], -1],
  [2, 293, -1, {"name":"TemplateArgs"},
   "::", 386,
   "[", 388,
   /^[\*\&]/, -1,
   3, "keyword", e[34], -1],
  [1, 9, 387],
  [1, 221, -1],
  [1, 9, 389],
  [3, "number", e[27], 390,
   0, 390],
  [1, 9, 391],
  ["]", -1],
  [3, "keyword", e[41], 393,
   3, "keyword", e[40], 397,
   2, 151, -1, {"name":"prefixOp","token":"operator"}],
  [1, 9, 394],
  ["[", 395,
   0, -1],
  [1, 9, 396],
  ["]", -1],
  [1, 9, 398],
  ["[", 399,
   0, 400],
  [1, 9, 401],
  [1, 9, 402],
  ["]", 400],
  ["(", 403,
   0, -1],
  [1, 9, 404],
  [1, 203, 405],
  [1, 9, 406],
  [")", -1],
  [3, "keyword", e[51], -1,
   [0, [5, 558], "["], 408,
   3, "keyword", e[52], 414,
   2, 562, 426, {"name":"ParenExpr"},
   3, "atom", e[53], -1,
   3, "number", e[27], -1,
   2, 146, -1, {"name":"string","token":"string"},
   2, 490, -1, {"name":"BlockOf"},
   3, "keyword", e[54], 428,
   1, 141, -1],
  [1, 9, 409],
  [1, 567, 410],
  [1, 9, 411],
  ["]", 412],
  [1, 9, 413],
  [2, 243, -1, {"name":"FunctionDef"}],
  [1, 9, 415],
  ["<", 416],
  [1, 9, 417],
  [1, 221, 418],
  [1, 9, 419],
  [">", 420],
  [1, 9, 421],
  ["(", 422],
  [1, 9, 423],
  [1, 203, 424],
  [1, 9, 425],
  [")", -1],
  [1, 9, 427],
  [1, 203, -1,
   0, -1],
  [1, 9, 429],
  ["(", 430,
   /^(?:\.\.\.)?/, 431],
  [1, 9, 432],
  [1, 9, 433],
  [1, 221, 434],
  [1, 203, 435],
  [1, 9, 436],
  [1, 9, 437],
  [")", 435],
  [3, "meta", e[17], -1],
  ["(", 439],
  [1, 9, 440],
  [1, 577, 441],
  [1, 9, 442],
  [")", -1],
  [1, 221, 444,
   0, -1],
  [1, 9, 445],
  [",", 446,
   0, -1],
  [1, 9, 447],
  [1, 221, 448],
  [1, 9, 445],
  [":", 450],
  [1, 9, 451],
  [1, 591, -1],
  [1, 9, 453],
  [1, 385, 454,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 453],
  ["(", 456],
  [1, 9, 457],
  [")", -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[33], -1,
   3, "keyword", e[34], -1,
   3, "type", e[35], -1,
   3, "keyword", e[36], -1,
   3, "keyword", e[19], 458,
   e[55], 459],
  [1, 9, 460],
  [3, "meta", e[23], 459,
   3, "type", e[56], -1],
  [3, "meta", e[23], 460,
   3, "type", e[21], -1],
  [3, "operator", "=", 462,
   2, 490, -1, {"name":"BlockOf"},
   2, 348, -1, {"name":"ArgList"}],
  [1, 9, 463],
  [1, 203, -1],
  [3, "keyword", e[31], 465,
   0, 466,
   0, 467,
   3, "number", e[27], 468,
   0, -1],
  [1, 9, 469],
  [1, 9, 470],
  [3, "keyword", e[32], 471,
   3, "keyword", e[33], 471,
   1, 221, 472],
  [1, 9, 473],
  [2, 293, 466, {"name":"TemplateArgs"}],
  [3, "keyword", e[25], 474,
   3, "keyword", e[19], 474],
  [1, 9, 467],
  [1, 9, 475],
  [",", 476,
   0, -1],
  [1, 9, 477],
  [2, 438, 468, {"name":"ParamList"},
   1, 461, 468,
   0, 468],
  [1, 9, 478],
  [1, 221, 468],
  [3, "keyword", e[31], 479,
   0, 480,
   0, 481,
   3, "number", e[27], 482],
  [1, 9, 483],
  [1, 9, 484],
  [3, "keyword", e[32], 485,
   3, "keyword", e[33], 485,
   1, 221, 486],
  [1, 9, 473],
  [2, 293, 480, {"name":"TemplateArgs"}],
  [3, "keyword", e[25], 487,
   3, "keyword", e[19], 487],
  [1, 9, 481],
  [1, 9, 488],
  [1, 9, 489],
  [2, 438, 482, {"name":"ParamList"},
   1, 461, 482,
   0, 482],
  [1, 221, 482],
  ["{", 491],
  [1, 9, 492],
  [1, 203, 493,
   0, 498],
  [1, 9, 494],
  [",", 495,
   0, 498],
  [1, 9, 496],
  [1, 203, 497,
   0, 497],
  [1, 9, 494],
  [1, 9, 499],
  ["}", -1],
  [3, "callee", e[57], -1,
   e[21], -1],
  [1, 221, 502],
  [1, 9, 503],
  [2, 500, 504, {"name":"fieldName","token":"property"},
   0, 504],
  [1, 9, 505],
  [":", 506,
   "[", 507,
   0, -1],
  [1, 9, 508],
  [1, 9, 509],
  [3, "number", e[27], -1],
  [3, "number", e[27], 510,
   0, 510],
  [1, 9, 511],
  ["]", -1],
  [1, 203, 513,
   0, -1],
  [1, 9, 514],
  [",", 515,
   0, -1],
  [1, 9, 516],
  [1, 203, 517],
  [1, 9, 514],
  [1, 597, -1],
  [3, "keyword", e[29], 520,
   2, 179, -1, {"name":"Template"},
   3, "meta", e[17], 522,
   1, 158, -1,
   2, 601, -1, {"name":"ObjectMember"}],
  [1, 9, 521],
  [":", -1],
  [1, 9, 523],
  [2, 348, 524, {"name":"ArgList"},
   0, 524],
  [1, 9, 525],
  [/^\;?/, -1],
  [1, 615, 527,
   0, 528,
   0, -1],
  [1, 9, 529],
  [3, "keyword", e[32], 530,
   3, "keyword", e[33], 530,
   1, 221, 531],
  [",", 532,
   0, -1],
  [1, 9, 528],
  [1, 9, 533],
  [1, 9, 534],
  [1, 208, 535],
  [1, 615, 536,
   0, 537],
  [1, 9, 538],
  [1, 9, 529],
  [3, "keyword", e[32], 539,
   3, "keyword", e[33], 539,
   1, 221, 540],
  [3, "operator", "=", 541,
   0, 527],
  [1, 9, 537],
  [1, 9, 542],
  [1, 9, 543],
  [1, 208, 544],
  [1, 392, 545,
   1, 407, 546],
  [1, 9, 547],
  [1, 9, 543],
  [1, 9, 548],
  [3, "operator", "=", 549,
   0, 536],
  [e[58], 550,
   0, 527],
  [1, 9, 551],
  [1, 298, 552],
  [1, 392, 553,
   1, 407, 554],
  [1, 9, 548],
  [1, 9, 551],
  [1, 9, 555],
  [e[58], 556,
   0, 536],
  [1, 298, 557],
  [1, 9, 555],
  ["[", 559],
  [1, 9, 560],
  [e[46], 561,
   /^(?:\&|\=|this|\])/, -1],
  [1, 9, 560],
  ["(", 563],
  [1, 9, 564],
  [1, 203, 565,
   0, 565],
  [1, 9, 566],
  [")", -1],
  ["&", 568,
   "=", 569,
   3, "keyword", e[51], 569,
   0, -1],
  [1, 9, 570],
  [1, 9, 571],
  [1, 141, 569,
   0, 569],
  [",", 572,
   0, -1],
  [1, 9, 573],
  ["&", 574,
   "=", 575,
   3, "keyword", e[51], 575],
  [1, 9, 576],
  [1, 9, 571],
  [1, 141, 575,
   0, 575],
  [1, 221, 578,
   0, -1],
  [1, 9, 579],
  [1, 231, 580,
   0, 581],
  [1, 9, 582],
  [1, 9, 583],
  [2, 438, 581, {"name":"ParamList"},
   0, 581],
  [",", 584,
   0, -1],
  [1, 9, 585],
  [1, 221, 586],
  [1, 9, 587],
  [1, 231, 588,
   0, 589],
  [1, 9, 590],
  [1, 9, 583],
  [2, 438, 589, {"name":"ParamList"},
   0, 589],
  [1, 626, 592,
   0, -1],
  [1, 9, 593],
  [",", 594,
   0, -1],
  [1, 9, 595],
  [1, 626, 596],
  [1, 9, 593],
  [/^(?!\}|\*\/)/, 598,
   0, -1],
  ["{", 599,
   /^[^]/, 597],
  [1, 597, 600],
  [/^\}?/, 597],
  [3, "keyword", e[32], 602,
   3, "keyword", e[33], 602,
   3, "keyword", e[34], 602,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 605,
   1, 221, 603],
  [1, 9, 601],
  [1, 9, 604],
  [1, 231, 605],
  [1, 9, 606],
  [2, 243, -1, {"name":"FunctionDef"},
   1, 461, 607,
   ":", 608,
   "[", 609,
   0, 607],
  [1, 9, 610],
  [1, 9, 611],
  [1, 9, 612],
  [";", -1],
  [3, "number", e[27], 607],
  [3, "number", e[27], 613,
   0, 613],
  [1, 9, 614],
  ["]", 607],
  [3, "keyword", e[31], 616,
   0, 618],
  [1, 9, 617],
  [2, 293, 618, {"name":"TemplateArgs"}],
  [1, 9, 619],
  [3, "keyword", e[25], 620,
   3, "keyword", e[19], 620],
  [1, 9, 621],
  [3, "type def", e[21], 622],
  [1, 9, 623],
  [3, "operator", "=", 624,
   0, -1],
  [1, 9, 625],
  [1, 141, -1,
   3, "number", e[27], -1],
  [2, 500, 627, {"name":"fieldName","token":"property"}],
  [1, 9, 628],
  ["(", 629,
   "{", 630],
  [1, 9, 631],
  [1, 9, 632],
  [1, 512, 633],
  [1, 512, 634],
  [1, 9, 635],
  [1, 9, 636],
  [")", -1],
  ["}", -1]
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
  } else if (typeRE.test(type) && !/qualified/.test(type) &&
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

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" || cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || cx.name == "NamespaceBlock" ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
    var base = statementIndent(cx, config), sub;
    if (!curLine && (sub = hasSubStatement(cx)))
      { return base + (sub == "if" && (/[{;]\s*(\/\/.*)?$/.test(cx.startLine) || /^else\b/.test(textAfter)) ? 0 : config.indentUnit); }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 :
                cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos)) ? 2 * config.indentUnit :
                0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
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

CppMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.blockCommentContinue = " * ";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
