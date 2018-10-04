(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^static_assert(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z]+[A-Z0-9]*_[A-Z0-9_]*(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^class(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:final|explicit)(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr|mutable|thread_local)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\-\>|(?!\.\.)\.)/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^(?:\.\.\.)?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?:\(\)|\[\])/, /^(?:\[\])?/, /^(?!\>)/, /^(?:\.\.\.|\(|\=|\>|\,)/, /^(?:\*|\&\&|\&|\.\.\.)/];
  var nodes = [
    [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
     0, 2],
    [/^[^]/, 0],
    [1, 9, 3],
    [2, 12, 4, {"name":"Statement"}],
    [0, 2,
     0, 1],
    [3, "keyword", e[27], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[42], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[55], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "type", e[32], -1,
     3, "type", e[33], -1,
     3, "keyword", e[31], -1,
     3, "atom", e[54], -1,
     3, "meta", e[16], -1,
     1, 121, -1,
     3, "number", e[20], -1,
     2, 128, -1, {"name":"string","token":"string"},
     2, 133, -1, {"name":"prefixOp","token":"operator"},
     3, "operator", e[43], -1,
     3, "operator", e[35], -1,
     2, 134, -1, {"name":"comment","token":"comment"},
     3, "keyword", e[1], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[37], -1,
     3, "keyword", e[52], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[39], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[40], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[25], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[50], -1,
     3, "keyword", e[51], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[53], -1,
     3, "keyword", e[41], -1,
     3, "keyword", e[23], -1,
     /^[^]/, -1],
    ["#", 7],
    [2, 134, 7, {"name":"comment","token":"comment"},
     "\\", 8,
     /^./, 7,
     0, -1],
    [/^[^]/, 7],
    [/^[ \t]/, 9,
     "\n", 10,
     2, 134, 9, {"name":"comment","token":"comment"},
     0, -1],
    [/^[ \t]*/, 11],
    [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
     0, 9],
    [1, 139, -1,
     1, 156, -1,
     3, "keyword", e[0], 13,
     3, "keyword", e[1], 17,
     3, "keyword", e[2], 25,
     3, "keyword", e[3], 29,
     3, "keyword", e[4], 33,
     1, 171, -1,
     2, 184, -1, {"name":"Template"},
     [7, "constructorAhead"], 39,
     1, 193, -1,
     3, "keyword", e[5], 42,
     3, "keyword", e[6], 43,
     3, "keyword", e[7], 44,
     3, "keyword", e[8], 68,
     3, "keyword", e[9], 73,
     2, 202, -1, {"name":"Block"},
     3, "keyword", e[10], 77,
     3, "keyword", e[11], 79,
     3, "keyword", e[12], 83,
     3, "keyword", e[13], 87,
     3, "keyword", e[14], 93,
     3, "keyword", e[15], 94,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 206]], 93,
     3, "meta", e[16], 97,
     2, 207, 103, {"name":"DeclType"},
     ";", -1,
     1, 224, 119],
    [1, 9, 14],
    [2, 229, 15, {"name":"ArgList"}],
    [1, 9, 16],
    [";", -1],
    [1, 9, 18],
    [1, 234, 19,
     0, 19],
    [1, 9, 20],
    [3, "operator", "=", 21,
     2, 239, -1, {"name":"NamespaceBlock"}],
    [1, 9, 22],
    [1, 121, 23],
    [1, 9, 24],
    [";", -1],
    [1, 9, 26],
    [1, 224, 27],
    [1, 9, 28],
    [";", -1],
    [1, 9, 30],
    [2, 202, 31, {"name":"Block"}],
    [1, 9, 32],
    [2, 243, -1, {"name":"Catch"}],
    [1, 9, 34],
    ["{", 35],
    [1, 9, 36],
    [2, 128, 37, {"name":"string","token":"string"}],
    [1, 9, 38],
    ["}", -1],
    [1, 234, 40],
    [1, 9, 41],
    [2, 255, -1, {"name":"FunctionDef"}],
    [1, 9, 45],
    [1, 9, 46],
    [1, 9, 47],
    ["(", 48],
    [2, 288, 49, {"name":"CondExpr"}],
    [2, 12, 50, {"name":"Statement"}],
    [1, 9, 51],
    [1, 9, 52],
    [1, 9, 53],
    [2, 12, 54, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[6], 55],
    [1, 9, 56],
    [1, 9, 57],
    [1, 224, 58,
     0, 58],
    [2, 288, 59, {"name":"CondExpr"}],
    [1, 9, 60],
    [1, 9, 61],
    [";", 62],
    [";", -1],
    [1, 9, 63],
    [1, 224, 64,
     0, 64],
    [1, 9, 65],
    [")", 66],
    [1, 9, 67],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 69],
    [2, 288, 70, {"name":"CondExpr"}],
    [1, 9, 71],
    [2, 12, 72, {"name":"Statement"}],
    [2, 293, -1, {"name":"Alternative"}],
    [1, 9, 74],
    [2, 288, 75, {"name":"CondExpr"}],
    [1, 9, 76],
    [2, 202, -1, {"name":"Block"}],
    [1, 9, 78],
    [";", -1],
    [1, 9, 80],
    [e[22], 81],
    [1, 9, 82],
    [";", -1],
    [1, 9, 84],
    [1, 224, 85,
     0, 85],
    [1, 9, 86],
    [";", -1],
    [1, 9, 88],
    [1, 234, 89,
     0, 89],
    [1, 9, 90],
    [2, 297, 91, {"name":"BlockOf"},
     0, 91],
    [1, 9, 92],
    [";", -1],
    [1, 9, 95],
    [1, 9, 96],
    [":", -1],
    [1, 224, 93],
    [1, 9, 98],
    [2, 307, 99, {"name":"ParenTokens"},
     0, 99],
    [1, 9, 100],
    [2, 202, -1, {"name":"Block"},
     0, 101],
    [1, 311, 102,
     0, -1],
    [1, 9, 101],
    [1, 9, 104],
    [1, 332, 105],
    [1, 9, 106],
    [3, "meta", e[16], 107,
     [5, 344], 108,
     1, 348, 109,
     0, 109],
    [1, 9, 110],
    [2, 255, -1, {"name":"FunctionDef"}],
    [1, 9, 111],
    [2, 307, 112, {"name":"ParenTokens"},
     0, 112],
    [",", 113,
     ";", -1],
    [1, 9, 114],
    [1, 9, 115],
    [/^\;?/, -1],
    [1, 234, 116],
    [1, 9, 117],
    [1, 348, 118,
     0, 118],
    [1, 9, 111],
    [1, 9, 120],
    [";", -1],
    [0, 122,
     3, "type", e[17], -1,
     2, 351, 127, {"name":"unqualifiedVariableName","token":"variable"}],
    [1, 352, 123],
    [0, 122,
     3, "type qualified", e[17], 124,
     2, 357, 124, {"name":"qualifiedVariableName","token":"qualified"}],
    [2, 358, 125, {"name":"TemplateArgs"},
     0, -1],
    [/^(?=\:\:)/, 126,
     0, -1],
    [1, 121, -1],
    [2, 358, -1, {"name":"TemplateArgs"},
     0, -1],
    [/^R\"(?:(?!\().)*\(/, 129,
     /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 130],
    [[0, [7, "rawStringContinues"], /^[^]/], 129,
     "\"", -1],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 131],
    ["\\", 132,
     [0, /^(?!\")/, /^[^]/], 131,
     "\"", -1],
    [/^[^]/, 131],
    [3, "keyword", e[18], -1,
     /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
    [/^\/\*\*(?!\/)/, 135,
     "/*", 138,
     /^\/\/.*/, -1],
    [e[48], 136,
     0, 137],
    [0, 135,
     0, 135],
    [2, 363, 137, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 138,
     "*/", -1],
    [3, "keyword", e[19], 141,
     [0, [5, 374], "["], 142],
    [0, 139,
     0, -1],
    [1, 9, 143],
    [1, 9, 144],
    ["(", 145],
    ["[", 146],
    [1, 9, 147],
    [1, 9, 148],
    [3, "number", e[20], 149],
    [1, 378, 150],
    [1, 9, 151],
    [1, 9, 152],
    [")", 153],
    ["]", 154],
    [1, 9, 140],
    [1, 9, 155],
    ["]", 153],
    [3, "keyword", e[21], 157,
     3, "keyword", e[13], 157],
    [1, 9, 158],
    [1, 139, 159,
     0, 159],
    [1, 9, 160],
    [0, 161,
     3, "type def", e[22], 164],
    [1, 400, 162],
    [1, 9, 163],
    [0, 161,
     3, "type qualified", e[22], 164],
    [1, 9, 165],
    [3, "keyword", e[23], 166,
     ":", 167,
     0, 169],
    [1, 9, 165],
    [1, 9, 168],
    [1, 405, 169],
    [1, 9, 170],
    [";", -1,
     2, 419, -1, {"name":"ClassBody"}],
    [3, "keyword", e[24], 172],
    [1, 9, 173],
    [3, "keyword", e[18], 174,
     3, "keyword", e[1], 175,
     0, 175],
    [1, 9, 176],
    [1, 9, 177],
    [1, 423, 178],
    [1, 121, 178],
    [1, 9, 179],
    [3, "operator", "=", 180,
     0, 182],
    [1, 9, 181],
    [1, 423, 182],
    [1, 9, 183],
    [";", -1],
    [3, "keyword", e[25], 185,
     0, 185],
    [1, 9, 186],
    [3, "keyword", e[26], 187],
    [1, 9, 188],
    [2, 436, 189, {"name":"TemplateParams"}],
    [1, 9, 190],
    [1, 9, 191],
    [1, 9, 192],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[27], 194],
    [1, 9, 195],
    [3, "keyword", e[21], 196,
     3, "keyword", /^struct(?![a-zA-Z¡-￿_0-9])/, 196,
     0, 196],
    [1, 9, 197],
    [1, 139, 198,
     0, 198],
    [1, 9, 199],
    [3, "type def", e[22], 200,
     0, 200],
    [1, 9, 201],
    [2, 441, -1, {"name":"BlockOf"},
     0, -1],
    ["{", 203],
    [1, 9, 204],
    [2, 12, 205, {"name":"Statement"},
     "}", -1],
    [1, 9, 204],
    [e[45], 206,
     /^\:(?!\:)/, -1],
    [0, 208,
     0, 209,
     3, "keyword", e[28], 220,
     [5, 459], 221],
    [3, "keyword", e[29], 210,
     3, "keyword", e[30], 210,
     3, "keyword", e[31], 210],
    [3, "type", e[32], 211],
    [1, 9, 212],
    [1, 9, 213],
    [0, 208,
     3, "keyword", e[28], 214,
     0, 215,
     1, 464, 214],
    [0, 209,
     3, "type", e[33], 214,
     0, 214],
    [1, 9, 216],
    [3, "type", e[32], 217],
    [1, 469, 218,
     0, -1],
    [0, 215,
     1, 9, 219,
     0, 214],
    [1, 9, 216],
    [3, "type", e[33], 214],
    [1, 9, 222],
    [1, 464, 220],
    [1, 469, 223,
     0, -1],
    [1, 9, 222],
    [1, 476, 225,
     1, 493, 226],
    [1, 9, 224],
    [1, 9, 227],
    [1, 311, 228,
     0, -1],
    [1, 9, 227],
    ["(", 230],
    [1, 9, 231],
    [1, 528, 232],
    [1, 9, 233],
    [")", -1],
    [3, "keyword", e[34], 235,
     0, 237,
     3, "def", e[38], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[35], -1,
     2, 133, -1, {"name":"prefixOp","token":"operator"},
     e[57], -1,
     3, "keyword", e[36], 236,
     3, "keyword", e[37], 236],
    [e[58], -1],
    [1, 538, 238],
    [0, 237,
     3, "qualified def", e[38], -1],
    ["{", 240],
    [1, 9, 241],
    [2, 12, 242, {"name":"Statement"},
     "}", -1],
    [1, 9, 241],
    [3, "keyword", e[39], 244,
     0, -1],
    [1, 9, 245],
    ["(", 246],
    [1, 9, 247],
    [1, 423, 248],
    [1, 9, 249],
    [1, 332, 250,
     0, 250],
    [1, 9, 251],
    [")", 252],
    [1, 9, 253],
    [2, 202, 254, {"name":"Block"}],
    [1, 9, 243],
    [2, 543, 256, {"name":"ParamList"}],
    [1, 9, 257],
    [3, "keyword", e[31], 258,
     /^(?:\&|\&\&)?/, 259],
    [1, 9, 257],
    [1, 9, 260],
    [3, "keyword", e[40], 261,
     3, "keyword", e[2], 262,
     0, 273],
    [1, 9, 263],
    [1, 9, 264],
    ["(", 265,
     0, 273],
    ["(", 266],
    [1, 9, 267],
    [1, 9, 268],
    [1, 224, 269],
    [1, 548, 270],
    [1, 9, 271],
    [1, 9, 272],
    [")", 273],
    [")", 273],
    [1, 9, 274],
    [1, 139, 275,
     0, 275],
    [1, 9, 276],
    ["->", 277,
     0, 279],
    [1, 9, 278],
    [1, 423, 279],
    [1, 9, 280],
    [3, "keyword", e[41], 281,
     2, 554, 282, {"name":"InitializerList"},
     0, 282],
    [1, 9, 280],
    [1, 9, 283],
    [";", -1,
     2, 202, -1, {"name":"Block"},
     3, "operator", "=", 284],
    [1, 9, 285],
    [3, "keyword", e[14], 286,
     3, "keyword", e[37], 286],
    [1, 9, 287],
    [";", -1],
    ["(", 289],
    [1, 9, 290],
    [1, 224, 291,
     0, 291],
    [1, 9, 292],
    [")", -1],
    [1, 9, 294],
    [3, "keyword", e[42], 295,
     0, -1],
    [1, 9, 296],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 298],
    [1, 9, 299],
    [1, 557, 300,
     0, 305],
    [1, 9, 301],
    [";", 302,
     0, 305],
    [1, 9, 303],
    [1, 557, 304,
     0, 304],
    [1, 9, 301],
    [1, 9, 306],
    ["}", -1],
    ["(", 308],
    [1, 9, 309],
    [1, 568, 310,
     ")", -1],
    [1, 9, 309],
    [2, 573, -1, {"name":"BlockOf"},
     2, 229, 312, {"name":"ArgList"},
     e[44], 314,
     2, 229, -1, {"name":"ArgList"},
     "[", 318,
     3, "operator", e[43], -1,
     e[44], 322,
     3, "operator", e[35], 324,
     "?", 326],
    [1, 9, 313],
    [2, 202, -1, {"name":"Block"},
     0, -1],
    [1, 9, 315],
    [2, 583, 316, {"name":"fieldName","token":"property"}],
    [1, 9, 317],
    [2, 358, -1, {"name":"TemplateArgs"},
     0, -1],
    [1, 9, 319],
    [1, 224, 320],
    [1, 9, 321],
    ["]", -1],
    [1, 9, 323],
    [2, 583, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 325],
    [1, 224, -1,
     0, -1],
    [1, 9, 327],
    [1, 224, 328],
    [1, 9, 329],
    [":", 330],
    [1, 9, 331],
    [1, 224, -1],
    [0, 333,
     "(", 340],
    [e[61], 334,
     1, 234, 335],
    [1, 9, 333],
    [1, 9, 336],
    ["[", 337,
     0, -1],
    [1, 9, 338],
    ["]", 339],
    [1, 9, 336],
    [1, 9, 341],
    [1, 332, 342],
    [1, 9, 343],
    [")", -1],
    ["(", 345],
    [1, 9, 346],
    [")", -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[31], -1,
     3, "type", e[32], -1,
     3, "keyword", e[28], -1,
     [5, 459], 347],
    [1, 464, -1],
    [3, "operator", "=", 349,
     2, 573, -1, {"name":"BlockOf"},
     2, 229, -1, {"name":"ArgList"}],
    [1, 9, 350],
    [1, 224, -1],
    [3, "callee", e[56], -1,
     e[22], -1],
    ["::", -1,
     [5, 584], 353],
    [3, "variable qualifier", e[22], 354],
    [2, 358, 355, {"name":"TemplateArgs"},
     0, 355],
    [1, 9, 356],
    ["::", -1],
    [2, 351, -1, {"name":"unqualifiedVariableName","token":"variable"}],
    ["<", 359],
    [1, 9, 360],
    [1, 588, 361],
    [1, 9, 362],
    [">", -1],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 364,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 365,
     3, "tag", e[47], 372,
     "{", 366],
    [e[45], 364,
     3, "def", e[46], 372,
     "<", 367,
     0, 372],
    [e[45], 365,
     3, "type", e[46], 372,
     0, 372],
    [3, "tag", e[47], 368],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 369],
    [/^[\t ]*/, 370],
    [">", 372],
    [1, 620, 371],
    ["}", 372],
    [e[48], 373,
     0, -1],
    [0, 372,
     0, 372],
    ["[", 375],
    [1, 9, 376],
    [" ", 377,
     "[", -1],
    [1, 9, 376],
    [1, 624, 379,
     3, "meta", e[22], 380,
     0, -1],
    [1, 9, 378],
    [1, 9, 381],
    ["(", 382,
     0, 383],
    [1, 9, 384],
    [1, 9, 385],
    [1, 629, 386,
     ")", 383],
    [e[49], 387],
    [1, 9, 384],
    [1, 9, 388],
    [",", 389,
     0, -1],
    [1, 9, 390],
    [1, 624, 391,
     3, "meta", e[22], 392],
    [1, 9, 390],
    [1, 9, 393],
    ["(", 394,
     0, 395],
    [1, 9, 396],
    [1, 9, 397],
    [1, 629, 398,
     ")", 395],
    [e[49], 399],
    [1, 9, 396],
    [1, 9, 388],
    ["::", -1,
     [5, 639], 401],
    [3, "type qualifier", e[22], 402],
    [2, 358, 403, {"name":"TemplateArgs"},
     0, 403],
    [1, 9, 404],
    ["::", -1],
    [3, "keyword", e[50], 406,
     0, 406,
     0, -1],
    [1, 9, 407],
    [3, "keyword", e[51], 408,
     0, 408],
    [1, 9, 409],
    [1, 423, 410],
    [1, 9, 411],
    [",", 412,
     0, -1],
    [1, 9, 413],
    [3, "keyword", e[50], 414,
     0, 414],
    [1, 9, 415],
    [3, "keyword", e[51], 416,
     0, 416],
    [1, 9, 417],
    [1, 423, 418],
    [1, 9, 411],
    ["{", 420],
    [1, 9, 421],
    [2, 643, 422, {"name":"ClassItem"},
     "}", -1],
    [1, 9, 421],
    [3, "keyword", e[18], 424,
     0, 426],
    [1, 9, 425],
    [1, 423, -1],
    [3, "keyword", e[29], 427,
     3, "keyword", e[30], 427,
     3, "keyword", e[31], 427,
     3, "keyword", e[13], 428,
     0, 428],
    [1, 9, 426],
    [1, 9, 429],
    [3, "keyword", e[28], 430,
     0, 431,
     1, 464, 430],
    [1, 9, 432],
    [3, "type", e[32], 433],
    [1, 469, 434,
     0, -1],
    [0, 431,
     1, 9, 435,
     0, 430],
    [1, 9, 432],
    [3, "type", e[33], 430],
    ["<", 437],
    [1, 9, 438],
    [1, 658, 439],
    [1, 9, 440],
    [">", -1],
    ["{", 442],
    [1, 9, 443],
    [1, 688, 444,
     0, 457],
    [1, 9, 445],
    [3, "operator", "=", 446,
     0, 447],
    [1, 9, 448],
    [1, 9, 449],
    [1, 224, 447],
    [",", 450,
     0, 457],
    [1, 9, 451],
    [1, 688, 452,
     0, 453],
    [1, 9, 454],
    [1, 9, 449],
    [3, "operator", "=", 455,
     0, 453],
    [1, 9, 456],
    [1, 224, 453],
    [1, 9, 458],
    ["}", -1],
    [/^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 460],
    [1, 464, 461],
    [1, 9, 462],
    [1, 469, 463,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 462],
    [3, "keyword", e[18], 465,
     0, 466],
    [1, 9, 466],
    [0, 467,
     3, "type", e[22], -1],
    [1, 400, 468],
    [0, 467,
     3, "type qualified", e[22], -1],
    [2, 358, -1, {"name":"TemplateArgs"},
     "::", 470,
     1, 139, -1,
     "[", 472,
     /^[\*\&]/, -1,
     3, "keyword", e[31], -1],
    [1, 9, 471],
    [3, "type qualified", e[22], -1],
    [1, 9, 473],
    [1, 224, 474,
     0, 474],
    [1, 9, 475],
    ["]", -1],
    [3, "keyword", e[37], 477,
     3, "keyword", e[36], 481,
     2, 133, -1, {"name":"prefixOp","token":"operator"}],
    [1, 9, 478],
    ["[", 479,
     0, -1],
    [1, 9, 480],
    ["]", -1],
    [1, 9, 482],
    ["[", 483,
     0, 484],
    [1, 9, 485],
    [1, 9, 486],
    ["]", 484],
    ["(", 487,
     0, 488],
    [1, 9, 489],
    [1, 9, 490],
    [1, 224, 491],
    [1, 139, -1,
     0, -1],
    [1, 9, 492],
    [")", 488],
    [3, "keyword", e[52], -1,
     "[", 494,
     3, "keyword", e[53], 501,
     2, 691, 513, {"name":"ParenExpr"},
     3, "atom", e[54], -1,
     3, "number", e[20], -1,
     2, 128, -1, {"name":"string","token":"string"},
     2, 573, -1, {"name":"BlockOf"},
     3, "keyword", e[55], 516,
     1, 121, -1],
    [1, 9, 495],
    [/^(?!\[)/, 496],
    [1, 696, 497],
    [1, 9, 498],
    ["]", 499],
    [1, 9, 500],
    [2, 255, -1, {"name":"FunctionDef"},
     2, 202, -1, {"name":"Block"}],
    [1, 9, 502],
    ["<", 503],
    [1, 9, 504],
    [1, 423, 505],
    [1, 9, 506],
    [">", 507],
    [1, 9, 508],
    ["(", 509],
    [1, 9, 510],
    [1, 224, 511],
    [1, 9, 512],
    [")", -1],
    [1, 9, 514],
    [/^(?![\[\(\-\+])/, 515,
     0, -1],
    [1, 224, -1],
    [1, 9, 517],
    ["(", 518,
     e[49], 519],
    [1, 9, 520],
    [1, 9, 521],
    [1, 423, 522],
    [1, 224, 523],
    [1, 9, 524],
    [1, 9, 525],
    [")", 523],
    [3, "meta", e[16], 526],
    [1, 9, 527],
    [2, 307, -1, {"name":"ParenTokens"},
     0, -1],
    [1, 224, 529,
     0, -1],
    [1, 9, 530],
    [e[49], 531],
    [1, 9, 532],
    [",", 533,
     0, -1],
    [1, 9, 534],
    [1, 224, 535],
    [1, 9, 536],
    [e[49], 537],
    [1, 9, 532],
    ["::", -1,
     [5, 706], 539],
    [3, "qualifier def", e[22], 540],
    [2, 358, 541, {"name":"TemplateArgs"},
     0, 541],
    [1, 9, 542],
    ["::", -1],
    ["(", 544],
    [1, 9, 545],
    [1, 710, 546],
    [1, 9, 547],
    [")", -1],
    [1, 423, 549,
     0, -1],
    [1, 9, 550],
    [",", 551,
     0, -1],
    [1, 9, 552],
    [1, 423, 553],
    [1, 9, 550],
    [":", 555],
    [1, 9, 556],
    [1, 724, -1],
    [1, 423, 558],
    [1, 9, 559],
    [2, 583, 560, {"name":"fieldName","token":"property"},
     0, 560],
    [1, 9, 561],
    [":", 562,
     "[", 563,
     0, -1],
    [1, 9, 564],
    [1, 9, 565],
    [3, "number", e[20], -1],
    [1, 224, 566,
     0, 566],
    [1, 9, 567],
    ["]", -1],
    [2, 307, -1, {"name":"ParenTokens"},
     2, 730, -1, {"name":"BracketTokens"},
     2, 734, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "keyword", /^(?:alignas|asm|bool|catch|class|compl|concept|constexpr|const_cast|decltype|delete|dynamic_cast|explicit|export|friend|import|module|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|reinterpret_cast|requires|static_assert|static_cast|synchronized|template|this|throw|try|typedef|typeid|using|virtual|wchar_t)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[54], -1,
     3, "number", e[20], -1,
     2, 128, -1, {"name":"string","token":"string"},
     3, "operator", e[35], -1,
     2, 133, -1, {"name":"prefixOp","token":"operator"},
     0, 569,
     2, 351, -1, {"name":"unqualifiedVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["::", 570,
     /^(?=[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*\:\:)/, 571],
    [0, 569,
     2, 357, -1, {"name":"qualifiedVariableName","token":"qualified"}],
    [3, "variable qualifier", e[22], 572],
    ["::", 570],
    ["{", 574],
    [1, 9, 575],
    [1, 224, 576,
     0, 581],
    [1, 9, 577],
    [",", 578,
     0, 581],
    [1, 9, 579],
    [1, 224, 580,
     0, 580],
    [1, 9, 577],
    [1, 9, 582],
    ["}", -1],
    [3, "callee", e[56], -1,
     e[22], -1],
    [3, "variable qualifier", e[22], 585],
    [1, 738, 586,
     0, 586],
    [1, 9, 587],
    ["::", -1],
    [3, "keyword", e[26], 589,
     0, 590,
     0, 591,
     0, -1],
    [1, 9, 592],
    [1, 9, 593],
    [3, "keyword", e[29], 594,
     3, "keyword", e[30], 594,
     [5, 743], 595,
     1, 746, 596],
    [2, 358, 590, {"name":"TemplateArgs"}],
    [3, "keyword", e[21], 597,
     3, "keyword", e[18], 597],
    [1, 9, 591],
    [1, 423, 598],
    [1, 9, 599],
    [1, 9, 600],
    [1, 9, 601],
    [e[49], 602],
    [1, 423, 602],
    [2, 543, 596, {"name":"ParamList"},
     1, 348, 596,
     0, 596],
    [1, 9, 603],
    [",", 604,
     0, -1],
    [1, 9, 605],
    [3, "keyword", e[26], 606,
     0, 607,
     0, 608],
    [1, 9, 609],
    [1, 9, 610],
    [3, "keyword", e[29], 611,
     3, "keyword", e[30], 611,
     [5, 752], 612,
     1, 746, 613],
    [2, 358, 607, {"name":"TemplateArgs"}],
    [3, "keyword", e[21], 614,
     3, "keyword", e[18], 614],
    [1, 9, 608],
    [1, 423, 615],
    [1, 9, 616],
    [1, 9, 617],
    [1, 9, 618],
    [e[49], 619],
    [1, 423, 619],
    [2, 543, 613, {"name":"ParamList"},
     1, 348, 613,
     0, 613],
    [1, 9, 603],
    [3, "attribute", "{", 621,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 620,
     "\n", 622,
     0, -1],
    [1, 620, 623],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 620],
    [/^(?=\*\/)/, 620,
     3, "attribute", "}", 620],
    ["::", -1,
     [5, 755], 625],
    [3, "meta", e[22], 626],
    [2, 358, 627, {"name":"TemplateArgs"},
     0, 627],
    [1, 9, 628],
    ["::", -1],
    [3, "number", e[20], -1,
     2, 128, -1, {"name":"string","token":"string"},
     e[22], -1,
     3, "operator", e[35], -1,
     ",", -1,
     "(", 630,
     "[", 633,
     "{", 636],
    [1, 9, 631],
    [1, 629, 632,
     ")", -1],
    [1, 9, 631],
    [1, 9, 634],
    [1, 629, 635,
     "]", -1],
    [1, 9, 634],
    [1, 9, 637],
    [1, 629, 638,
     "}", -1],
    [1, 9, 637],
    [3, "type qualifier", e[22], 640],
    [1, 738, 641,
     0, 641],
    [1, 9, 642],
    ["::", -1],
    [3, "keyword", e[51], 644,
     2, 184, -1, {"name":"Template"},
     1, 171, -1,
     3, "keyword", e[0], 646,
     1, 193, 650,
     3, "meta", e[16], 652,
     1, 156, 656,
     2, 759, -1, {"name":"ObjectMember"}],
    [1, 9, 645],
    [":", -1],
    [1, 9, 647],
    [2, 229, 648, {"name":"ArgList"}],
    [1, 9, 649],
    [";", -1],
    [1, 9, 651],
    [/^\;?/, -1],
    [1, 9, 653],
    [2, 307, 654, {"name":"ParenTokens"},
     0, 654],
    [1, 9, 655],
    [/^\;?/, -1],
    [1, 9, 657],
    [/^\;?/, -1],
    [1, 782, 659,
     0, 660,
     0, -1],
    [1, 9, 661],
    [3, "keyword", e[29], 662,
     3, "keyword", e[30], 662,
     1, 423, 663],
    [",", 664,
     0, -1],
    [1, 9, 660],
    [1, 9, 665],
    [1, 9, 666],
    [e[49], 667],
    [1, 782, 668,
     0, 669],
    [1, 9, 670],
    [1, 9, 661],
    [3, "keyword", e[29], 671,
     3, "keyword", e[30], 671,
     1, 423, 672],
    [e[49], 673],
    [1, 9, 669],
    [1, 9, 674],
    [1, 9, 675],
    [e[49], 676],
    [1, 234, 677],
    [1, 9, 678],
    [1, 9, 679],
    [e[49], 680],
    [3, "operator", "=", 681,
     0, 659],
    [1, 9, 682],
    [1, 9, 683],
    [1, 234, 684],
    [1, 746, 659],
    [1, 9, 685],
    [3, "operator", "=", 686,
     0, 668],
    [1, 9, 687],
    [1, 746, 668],
    [3, "keyword", e[34], 689,
     3, "def property", e[22], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[35], -1,
     2, 133, -1, {"name":"prefixOp","token":"operator"},
     e[57], -1,
     3, "keyword", e[36], 690,
     3, "keyword", e[37], 690],
    [e[58], -1],
    ["(", 692],
    [1, 9, 693],
    [1, 224, 694,
     0, 694],
    [1, 9, 695],
    [")", -1],
    [/^\&?/, 697,
     "=", 698,
     3, "keyword", e[52], 698,
     0, -1],
    [1, 9, 699],
    [1, 9, 700],
    [1, 121, 698,
     0, 698],
    [",", 701,
     0, -1],
    [1, 9, 702],
    [/^\&?/, 703,
     "=", 704,
     3, "keyword", e[52], 704],
    [1, 9, 705],
    [1, 9, 700],
    [1, 121, 704,
     0, 704],
    [3, "qualifier def", e[22], 707],
    [1, 738, 708,
     0, 708],
    [1, 9, 709],
    ["::", -1],
    [1, 423, 711,
     0, -1],
    [1, 9, 712],
    [1, 332, 713,
     0, 714],
    [1, 9, 715],
    [1, 9, 716],
    [2, 543, 714, {"name":"ParamList"},
     0, 714],
    [",", 717,
     0, -1],
    [1, 9, 718],
    [1, 423, 719],
    [1, 9, 720],
    [1, 332, 721,
     0, 722],
    [1, 9, 723],
    [1, 9, 716],
    [2, 543, 722, {"name":"ParamList"},
     0, 722],
    [1, 793, 725,
     0, -1],
    [1, 9, 726],
    [",", 727,
     0, -1],
    [1, 9, 728],
    [1, 793, 729],
    [1, 9, 726],
    ["[", 731],
    [1, 9, 732],
    [1, 568, 733,
     "]", -1],
    [1, 9, 732],
    ["{", 735],
    [1, 9, 736],
    [1, 568, 737,
     "}", -1],
    [1, 9, 736],
    ["<", 739],
    [1, 9, 740],
    [e[59], 741,
     ">", -1],
    [1, 738, 742,
     2, 128, 742, {"name":"string","token":"string"},
     /^[^]/, 742],
    [1, 9, 740],
    [1, 423, 744],
    [1, 9, 745],
    [e[60], -1],
    [1, 476, 747,
     1, 493, 748],
    [1, 9, 746],
    [1, 9, 749],
    [e[59], 750,
     0, -1],
    [1, 311, 751],
    [1, 9, 749],
    [1, 423, 753],
    [1, 9, 754],
    [e[60], -1],
    [3, "meta", e[22], 756],
    [1, 738, 757,
     0, 757],
    [1, 9, 758],
    ["::", -1],
    [3, "keyword", e[29], 760,
     3, "keyword", e[30], 760,
     3, "keyword", e[31], 760,
     3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 768,
     1, 423, 761],
    [1, 9, 759],
    [1, 9, 762],
    [1, 805, 763],
    [1, 9, 764],
    [",", 765,
     0, 768],
    [1, 9, 766],
    [1, 805, 767],
    [1, 9, 764],
    [1, 9, 769],
    [2, 255, -1, {"name":"FunctionDef"},
     1, 348, 770,
     ":", 771,
     "[", 772,
     0, 770,
     3, "meta", e[16], 773],
    [1, 9, 774],
    [1, 9, 775],
    [1, 9, 776],
    [1, 9, 777],
    [";", -1],
    [3, "number", e[20], 770],
    [1, 224, 778,
     0, 778],
    [2, 307, 779, {"name":"ParenTokens"},
     0, 779],
    [1, 9, 780],
    [1, 9, 781],
    ["]", 770],
    [/^\;?/, -1],
    [3, "keyword", e[26], 783,
     0, 785],
    [1, 9, 784],
    [2, 358, 785, {"name":"TemplateArgs"}],
    [1, 9, 786],
    [3, "keyword", e[21], 787,
     3, "keyword", e[18], 787],
    [1, 9, 788],
    [3, "type def", e[22], 789],
    [1, 9, 790],
    [3, "operator", "=", 791,
     0, -1],
    [1, 9, 792],
    [1, 121, -1,
     3, "number", e[20], -1],
    [1, 352, 794,
     2, 583, 795, {"name":"fieldName","token":"property"}],
    [1, 9, 793],
    [1, 9, 796],
    ["(", 797,
     "{", 798],
    [1, 9, 799],
    [1, 9, 800],
    [1, 817, 801],
    [1, 817, 802],
    [1, 9, 803],
    [1, 9, 804],
    [")", -1],
    ["}", -1],
    [0, 806,
     "(", 813],
    [e[61], 807,
     1, 688, 808],
    [1, 9, 806],
    [1, 9, 809],
    ["[", 810,
     0, -1],
    [1, 9, 811],
    ["]", 812],
    [1, 9, 809],
    [1, 9, 814],
    [1, 805, 815],
    [1, 9, 816],
    [")", -1],
    [1, 224, 818,
     0, -1],
    [1, 9, 819],
    [",", 820,
     0, -1],
    [1, 9, 821],
    [1, 224, 822],
    [1, 9, 819]
  ];
  var start = 0;
  var token = 5;

  var cpp = /*#__PURE__*/Object.freeze({
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
    var m = /^(if|for|do|while|try)\b/.exec(context.startLine.slice(context.startPos));
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
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", ObjectPattern: "}", EnumBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
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
          parent.parent.name == "Statement" && hasSubStatement(parent.parent) && !hasSubStatement(parent))
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
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
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

  var scopes = ["Block", "FunctionDef"], typeScopes = ["Template"];

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
      if (textAfter.charAt(0) == "#") { return 0 }
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
