// funcion encargada de manejar los errores
// si hay un error a nivel del servidor
export const errorHandler = (err, req, res) => {
    console.log(error);
    res.status(500).send(error);
};