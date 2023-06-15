import app from "./app";
import connection from "./models/db/connection";

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log(`Server is running on PORT: ${PORT}`)
  if (await connection.execute('SELECT 1')) {
    console.log('Database Connected')
  }
});
