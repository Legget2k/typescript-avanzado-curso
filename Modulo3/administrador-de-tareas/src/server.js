import { app } from "./app.js";
import dotenv from "dotenv";

// carga las variables de entorno desde el archivo .env
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({a : 1});
});

app.listen(PORT, () => {
  console.log(`Server listening on port http//:localhost:${PORT}`);
});