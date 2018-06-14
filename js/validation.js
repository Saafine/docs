function validateValueItem(valueItem) {
  //console.log('valueItem?', !!valueItem);
  //console.log('hasOwnProperty column in valueItem?', valueItem && valueItem.hasOwnProperty('column'));
  //console.log('asc, desc includes validation?', valueItem && ['asc', 'desc'].includes(valueItem.direction));
  
  return valueItem &&
    valueItem.hasOwnProperty('column') &&
    ['asc', 'desc'].includes(valueItem.direction);
}

function validateValue(val) {
        return (
            Array.isArray(val) &&
            val.reduce((acc, valueItem) => {
                return acc ? validateValueItem(valueItem) : false;
            }, true)
        )}
        
const test = [
{
	column: 'test1',
  direction: 'desc'
},
{
	column: 'test2',
  direction: 'asc'
},
{
	column: 'test3',
  direction: 'asc'
},
];

console.log('is valid arrray?', validateValue(test))