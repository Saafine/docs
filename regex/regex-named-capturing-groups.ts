const sentence = 'You were born on 1990-08-25 in Hollywood.';

const dateRegExp2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const dateMatch2 = sentence.match(dateRegExp2);

console.log(dateMatch2.groups.year);
// console output: 1990

console.log(dateMatch2.groups.month);
// console output: 08

console.log(dateMatch2.groups.day);
// console output: 25

const modifiedSentence2 = sentence.replace(
  dateRegExp2,
  '$<day>-$<month>-$<year>'
);

console.log(modifiedSentence2);
// console output: You were born on 25-08-1990 in Hollywood.