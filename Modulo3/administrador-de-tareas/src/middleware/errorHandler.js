// funcion encargada de manejar los errores
// si hay un error a nivel del servidor
export const errorHandler = (err, _req, res, _next) => {
    console.log(err);
    res.status(500).send(err.message || "Internal Server Error");
};