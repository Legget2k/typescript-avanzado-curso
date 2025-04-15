import { useState } from 'react'
import type {Usuario, UsuarioValidado} from '../types/formTypes'
import './Form.css'


const validadores: {[K in keyof Usuario]: (valor: string) => boolean}  = {
    nombre: (value) => value.trim().length > 0,
    edad: (value) => Number(value) > 0 && Number(value) < 120,
    email: (value) => /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)$/.test(value),
}


function Form() {

    const [Usuario, setUsuario] =  useState<Usuario>({
        nombre: "",
        edad: 0,
        email: ""
    })

    const [Validacion, setValidacion] = useState<UsuarioValidado>({
        nombre: false,
        edad: false,
        email: false
    });

    const handleChange = (campo: keyof Usuario, value: string) => {
        const nuevoUsuario = {
            ...Usuario,
            [campo]: campo === "edad" ? Number(value) : value
        }

        setUsuario(nuevoUsuario);

        const esValidado = validadores[campo](value);

        setValidacion({
            ...Validacion,
            [campo]: esValidado
        })
    }
    console.log(Usuario)

    return (
      <>
        <form>
            <label htmlFor="">Nombre</label>
            <input 
                type="text" 
                value={Usuario.nombre} 
                onChange={ (e) => handleChange("nombre", e.target.value) }
                style = {{color: Validacion.nombre === false? "red" : "green" }}
                />

            <label htmlFor="">Edad</label>
            <input 
                type="number
                " value={Usuario.edad} 
                onChange={ (e) => handleChange("edad", e.target.value) }
                style = {{color: Validacion.edad === false? "red" : "green" }}
                />

            <label htmlFor="">Email</label>
            <input 
                type="text" 
                value={Usuario.email}  
                onChange={ (e) => handleChange("email", e.target.value) }
                style = {{color: Validacion.email === false? "red" : "green" }}
                />
        </form>
      </>
    )
  }
  
  export default Form