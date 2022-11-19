// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'customers'
});

// simple query
connection.query(
  'SELECT * FROM `Persons`',
  function(err, results, fields) {
    console.log('check data')
    console.log(results); // results contains rows returned by server
   // fields contains extra meta data about results, if available
  }
);

export default connection;