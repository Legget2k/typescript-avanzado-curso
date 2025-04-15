// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//keyof = Obtener las llaves de un objeto
//Index Type = obtener el tipo de una propiedad dentro de un objeto
//Mapped Type = crear un nuevo tipo a partir de otro


type Mochila = {
  tipoDeTela: string;
  peso: number;
  colores: string[];
  marca?: string;
}

//type PropsMochila = "tipoDeTela" | "peso" | "colores" | "marca" basado en Mochila
type PropsMochila = keyof Mochila;


//type Colores = "colores" basado en Mochila
//type Colores = Mochila["colores"] -> string[]
type Colores = Mochila["colores"]; //string[]

//crea un nuevo objeto mediante un objeto existente para verificar si existen las props, dependiendo de la validacion las propiedades seran true or false
type MochilaEvaluada = {
  [Validacion in keyof Mochila]: boolean;  
}
/*
tipoDeTela: string;
peso: number;
colores: string[];
marca?: string;
*/

const mochilaValidada: MochilaEvaluada = {
  tipoDeTela: true,
  peso: true,
  colores: true,
  marca: true
}



const mochila: Mochila = {
  tipoDeTela: 'lona',
  peso: 2,
  colores: ['roja', 'negra']
}

function App() {

  return (
    <>
    </>
  )
}

export default App
