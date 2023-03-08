import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";

const App = () => {
    const [Nombre, setNombre]=useState("Pedro")

    const EscribirenConsolo=()=>{
        setNombre("Maria")
        console.log("El nombre ha cambiado a " + Nombre)
    }

    useEffect(()=>{
        console.log("2.El nombre ha cambiado a " + Nombre)
    },[Nombre])

    useEffect(()=>{
        console.log("La aplicacion a comenzado")
    },[])//Estos es muy necesario para tomar recursos al iniciar aplicaciones


    return (
        <div className="container-fluid">
            <h1>Esto es un conteo: {Nombre}</h1>
            <button
            onClick={EscribirenConsolo}
            >Cambiar Nombre</button>
           
        </div>
        
        

        
    )
}

export default App;