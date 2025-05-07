import mysql from 'mysql2/promise';

// make sure to release the connection after a query
export async function pool() {
  try {
    const p = mysql.createPool(
      // biome-ignore lint: Forbidden non-null assertion.
      process.env.MYSQL_URL!,
    );
    const poolConnection = await p.getConnection();
    return poolConnection;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// import mysql from 'mysql2/promise';
// try {
//     const pool = mysql.createPool('mysql://root:password@localhost:3306/test');
//     const connection = await pool.getConnection();
//     // ... some query
//     connection.release();
// } catch (err) {
//     console.log(err);
// }
