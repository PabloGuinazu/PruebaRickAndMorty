import './App.css'
import { useFetch } from "./useFetch";
//importacion del css y del archivo donde se  obtienen los datos de la api
function App() {
  const {data} = useFetch();//los datos de la api se añaden a "data"

  return (
    <>
      <div className="container">
        <h1>Rick & Morty</h1>
        <div className="card">
          <ul>
            {data?.map((character)=>(//se evalua data para evitar errores y se usa .map iterar cada elemento en data
              <li key={character.id}> {character.name} </li>//se usa character.name para mostrar el nombre del personaje y de la misma manera para mostrar otros datos
            ))}
          </ul>
        </div>
      </div>

    </>
  );
}

export default App
