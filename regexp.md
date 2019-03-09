Resources:
https://regex101.com/
https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/prototype
https://github.com/ziishaned/learn-regex

Global pattern flags
g modifier: global. All matches (don't return after first match)
i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])


### /[\w]/gi
\w matches any word character (equal to [a-zA-Z0-9_])

'.'.search(/[\w]/gi) === -1
'a'.search(/[\w]/gi) === 0

## /[a-z]/gi
Match a single character present in the list below [a-z]
a-z a single character in the range between a (index 97) 
and z (index 122) (case insensitive)
