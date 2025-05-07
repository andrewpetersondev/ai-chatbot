import * as mysql from 'mysql2/promise';

export async function connection() {
  try {
    const conn = await mysql.createConnection(
      // biome-ignore lint: Forbidden non-null assertion.
      process.env.MYSQL_URL!,
    );
    return conn;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
