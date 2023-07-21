Resources:
https://regex101.com/
https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/prototype
https://github.com/ziishaned/learn-regex

Global pattern flags
g modifier: global. All matches (don't return after first match)
i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])

Shorthand	Description
.	Any character except new line
\w	Matches alphanumeric characters: [a-zA-Z0-9_]
\W	Matches non-alphanumeric characters: [^\w]
\d	Matches digit: [0-9]
\D	Matches non-digit: [^\d]
\s	Matches whitespace character: [\t\n\f\r\p{Z}]
\S	Matches non-whitespace character: [^\s]

Meta character	Description
.	Period matches any single character except a line break.
[ ]	Character class. Matches any character contained between the square brackets.
[^ ]	Negated character class. Matches any character that is not contained between the square brackets
*	Matches 0 or more repetitions of the preceding symbol.
+	Matches 1 or more repetitions of the preceding symbol.
?	Makes the preceding symbol optional.
{n,m}	Braces. Matches at least "n" but not more than "m" repetitions of the preceding symbol.
(xyz)	Character group. Matches the characters xyz in that exact order.
|	Alternation. Matches either the characters before or the characters after the symbol.
\	Escapes the next character. This allows you to match reserved characters [ ] ( ) { } . * + ? ^ $ \ |
^	Matches the beginning of the input.
$	Matches the end of the input.

### /[\w]/gi
\w matches any word character (equal to [a-zA-Z0-9_])

'.'.search(/[\w]/gi) === -1
'a'.search(/[\w]/gi) === 0

## /[a-z]/gi
Match a single character present in the list below [a-z]
a-z a single character in the range between a (index 97) 
and z (index 122) (case insensitive)

## /^test|^abc/gi
Match whole string "test" or "abc".
"Atest" will not match, but "Test" will.


## /.{1,3}/g
Matches everything (except line terminators), but maximum match can take up to 3 chars.
Example:
'abcdefgh'.match(/.{1,3}/g) => returns ['abc', 'def', 'gh'] 

## [\d]{1,}/g
Matches digits and applies quantifier, so it match starts with 1 and goes until end of number
Example:
'abcdef123' => 123

## ([0-8]?)(9*)$
Grouping, will match all nines AND optionally one number between 0-8
Example:
abcde123 => 3
abcd0089 => 89
abcdef9999 => 9999

## /^0{2,}/ 
Matches all 0's at the begining of the string, example:
00001230.replace(reg, '') -> 11230

## 
Same as above, but allows single '0
'0'.replace(reg, '')  => '0'

# Javascript

## Common use cases:
### String.prototype.match(regexp)
'abcdefgh'.match(/.{1,3}/g) => returns ['abc', 'def', 'gh'] 
''.match(/.{1,3}/g) => returns null

### String.prototype.replace(regexp|substr, newSubstr|function)
'AAAA'.replace(/./g, () => 'X') => return 'XXXX'
p.replace('dog', 'monkey')
p.replace(regex, 'ferret')

### String.prototype.search()
'.'.search(/[\w]/gi) === -1
'a'.search(/[\w]/gi) === 0

## Generating regexp dynamically
const regexp = new RegExp(pattern, 'gi');

## Snippets
in: cySelect\((.+?\))
out: cy.get(testId($1)
