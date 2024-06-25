import './App.css'
import Card from "./Card";
import { useFetch } from "./useFetch";
//importacion del css y del archivo donde se obtienen los datos de la api y el componente card
function App() {
  const {data} = useFetch();//los datos de la api se añaden a "data"

  return (
    <>
        <h1>Rick And Morty</h1>
        <div className="container">
            {data?.map((character)=>(//se evalua data para evitar errores y se usa .map iterar cada elemento en data
              <Card
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               image={character.image}
               /> /* //se usa character.name para mostrar el nombre del personaje y de la misma manera para mostrar otros datos */

            ))}
        </div>
    </>
  );
}
export default App
