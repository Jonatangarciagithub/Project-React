import "bootstrap/dist/css/bootstrap.min.css"
import Tarjeta from "./Componentes/Tarjeta";

const App = () => {
    return (
        <div className="container-fluid">
           <div className="row justify-content-sm-center">
            <div className="col-sm-4">
                <Tarjeta titulo= "Esto es un titulo"
                parrafo="Esto deberia ser un parrafo"
                textoboton="Suscribirse">
                    <a href="#" className="btn btn-success"> Texto boton</a>
                </Tarjeta>


            </div>
           </div>

        </div>
    )
}

export default App;