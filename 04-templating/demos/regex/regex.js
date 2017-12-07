Pattern match text
[a-zA-Z] -> match any one character, upper case or lower case, order doesn’t matter
Shorthand: \w


Validate lower case character followed by whitespace
[a-z]\s


Optional group
Dec(ember)?   // this will match Dec or December


Pattern match numbers
[0-4]   // will limit to range
[0-9]   // matches any number, 0-9
Shorthand for all digits:  \d


Validate phone numbers
\([0-9]+\) -> will match any character 0-9, any quantity, within parens
\([0-9]{3}\) -> will limit to three characters, can specify ending num
\(\d{3}\) -> shorthand for any digit, [0-9]
? makes it optional


(555) 555-5555    \(\d{3}\)\s\d{3}-\d{4}
555 555-5555      \(?\d{3}\)?\s\d{3}-\d{4}
555-555-5555      \(?\d{3}\)?-?\s?\d{3}-\d{4}
555 555 5555      \(?\d{3}\)?-?\s?\d{3}-?\s?\d{4}
5555555555        \(?\d{3}\)?-?\s?\d{3}-?\s?\d{4}


Validate email addresses
allie@codefellows.com           \w+@\w+\.\w+
allie.grampa@codefelllows.com   \w+\.?\w+?@\w+\.\w+
