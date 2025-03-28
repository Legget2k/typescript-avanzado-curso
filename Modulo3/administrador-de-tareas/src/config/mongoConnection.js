//conexion a la base de datos
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI_DB = process.env.MONGO_URI; // Obtiene la URI desde las variables de entorno

//PROMISE -> codigo que resuelve una promesa despues de cierto tiempo
//posibles resoluciones -> exitosas o no exitosas
const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Connection error", error);
    process.exit(1); // Detiene la aplicación si no puede conectarse
  }
};

export { connectDB };