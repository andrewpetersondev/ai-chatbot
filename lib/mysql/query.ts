import * as mysql from 'mysql2/promise';
import { connection } from './connection';

// try {
//     const sql = 'SELECT * FROM `users` WHERE `name` = "Page" AND `age` > 45';
//     const [rows, fields] = await connection.query(sql);
//     console.log(rows);
//     console.log(fields);
// } catch (err) {
//     console.log(err);
// }

export async function getData() {
  try {
    const conn = await mysql.createConnection(
      // biome-ignore lint: Forbidden non-null assertion.
      process.env.MYSQL_URL!,
    );
    const sql = 'SELECT * FROM files';
    const [rows, fields] = await conn.query(sql);
    console.log(rows);
    console.log(fields);
    return { rows, fields };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getData2() {
  try {
    const sql = 'SELECT * FROM files';
    const conn = await connection();
    const [rows, fields] = await conn.query(sql);
    console.log(rows);
    console.log(fields);
    return { rows, fields };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// use connection
export async function insertData() {
  try {
    const conn = await connection();
    const sql = 'INSERT INTO files (file_name, file_data) VALUES (?, ?)';
    const [rows, fields] = await conn.query(sql, ['test', 'test']);
    console.log(rows);
    console.log(fields);
    return { rows, fields };
  } catch (error) {
    console.error(error);
  }
}
