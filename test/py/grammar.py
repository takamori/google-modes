[comment # this is a comment]

[keyword import] [variable foo].[property bar] [keyword as] [def ugh]
[keyword from] [variable huh] [keyword import] *

[def foo] [operator =] [string "bar"]; [variable abc_cde].[property&callee prop]([operator **][variable baz]); [keyword del] [variable foo], [variable bar]

[meta @foo.bar]
[keyword async] [keyword def] [def f]([def&local v]: [variable myType] [operator =] [number 0xffff], [operator **][def&local blah]):
  [builtin print]([variable-2 v] [operator +] [string 'hi\''] [keyword if] [atom False] [keyword else] [string '''blah'''])
  [keyword yield] [keyword from] [variable ugh]

[keyword class] [type&def C]([variable hi]):
  [string """my docstring"""]
  [def&property x] [operator =] [number 100_000.0]

  [keyword def] [def&property method]([atom self], [def&local u]) -> [variable t]:
    [atom self].[property&callee map]([keyword lambda] [def&local a]: [variable-2 x] [keyword not in] [variable-2 a])
    [keyword return] [variable-2 u][[ : [number 1] : [number 2], [variable a] ]]

[keyword if] [atom None]:
  [keyword for] [def i] [keyword in] [[ [variable-2 k] [keyword for] [def k] [keyword in] [variable p] ]]:
    [keyword global] [variable m]
    [keyword break]

  [keyword while] [atom False]: [string fr"single line"]
  [keyword raise] [number 0e+20] [keyword from] [variable huh]
[keyword elif] [string """ok"""]:
  [keyword pass]
[keyword else]:
  [keyword assert] [atom False]

[def empty] [operator =] {}

[keyword if] [variable pfile] [keyword is] [atom None] [keyword or] [variable pfile].[property project].[property disabled]: [keyword return]

[keyword class] [type&def B]:
  [keyword def] [def&property __init__]([atom self]):
    [keyword try]:
      [keyword with] [string U"x"] [keyword as] [def&local ay]: [variable-2 ay]
    [keyword except] [variable Except] [keyword as] [def&local e]:
      [variable&callee report]([variable-2 e])
    [keyword finally]:
      [def&local hey] [operator =] [atom True] [keyword or] [atom False]
      [variable-2 hey] [operator =] [string "again"]
      [variable-2 hey] [operator <<=] [number 0b10] [operator @] [operator ~][number 0O7] [operator **] [variable n]

  [def&property dict1] [operator =] {
      [string "x"]: ([number 22]),
      [string "y"]: [operator ...],
      [number 3]: [string "str"] [string "more str"]
  }

[variable hey] [operator |=] [variable dict1]

[keyword def] [def foo]():
  [keyword try]:
    [keyword yield]
  [keyword finally]:
    [keyword return]

[keyword def] [def abc]():
  [def&local x], [def&local y] [operator =] [number 1], [number 2]

[keyword for] [def a], [def b] [keyword in] [builtin enumerate]([string 'xyz']):
  [keyword pass]

[callee&variable foo]([meta dir]=[string "a"], [meta file]=[string "b"])

[keyword def] [def testRaise]():
  [def&local bar] [operator =] [number 1]
  [keyword raise] [variable Exception], [string 'blah']
  [variable-2 bar] [operator =] [builtin map]([keyword lambda] [def&local x]: [number 1], [variable-2 bar])

[keyword import] [variable typing]

[keyword class] [type&def Example]([builtin object]):
  [keyword def] [def&property method]([atom self], [def&local x]: [variable typing].[property List]):
    [atom self].[property x] [operator =] [variable-2 x]
