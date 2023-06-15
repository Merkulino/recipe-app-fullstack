import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT as unknown as number || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || '123456',
  database: process.env.MYSQL_DATABASE || 'RECIPES_APP',
  waitForConnections: true,
});

export default connection;