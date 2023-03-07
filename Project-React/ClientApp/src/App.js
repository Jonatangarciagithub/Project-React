import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";

const App = () => {
    const [numero, setNumero]=useState(0)

    let modelopersona={
        Nombre:"Jonatan",
        Apellido:"Garcia",
        Correo:"jogatrabajo5@gmail.com"
    }
    const [persona, setPersona]=useState(modelopersona)
    return (
        <div className="container-fluid">
            <h1>Esto es un conteo: {numero}</h1>
            <button
            onClick={()=> setNumero(numero +1)}
            >Sumar + 1</button>
            <br></br>
            <br></br>
            <p>Nombre: {persona.Nombre}</p>
            <p>Apellido: {persona.Apellido}</p>
            <p>Correo: {persona.Correo}</p>
            <button
            onClick={()=> setPersona({
                ...persona,
                Apellido:"Garcia Valencia",
                Correo:"jonatan.garcia@pascualbravo.edu.co"
            })}
            >Cambiar correo y apellidos</button>
           
        </div>
        
        

        
    )
}

export default App;