// Warning ! No escaping !
connection.query('INSERT INTO `XXXX` (`browser`) VALUES (\'abc\');', (error, results, fields) => {
 if (error) throw error;
	console.log('Success');
});

// Escaped internally with connection.escape()
connection.query('INSERT INTO `Errors - backoffice` SET ?', post, (error, results, fields) => {
if (error) throw error;
console.log('Success2');
});