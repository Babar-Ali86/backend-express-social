import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'social',
});

db.getConnection((err) => {
  if (err) throw err;
  console.log('My Sql is connected');
});

export default db;
