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
