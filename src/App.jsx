import './App.css'
import Card from "./Card";
import { useFetch } from "./useFetch";
//importacion del css y del archivo donde se obtienen los datos de la api y el componente card
function App() {
  //los datos de la api se añaden a "data"
  const { data, speciesFilter, setSpeciesFilter } = useFetch();

  const Filter = (event) => {
    setSpeciesFilter(event.target.value);
  };

  return (
    <>
        <h1>Rick And Morty</h1>
        <div className="filter-container">
          {/* //se añade filtro poe especie */}
          <label htmlFor="species-filter">Filter by Species: </label>
          <select id="species-filter" value={speciesFilter} onChange={Filter}>
            <option value="all">All</option>
            {data?.reduce((acc, character) => {
              if (!acc.includes(character.species)) {
                acc.push(character.species);
              }
              return acc;
            }, ["all"]).map((species, index) => (
              <option key={index} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>
        <div className="container">


          {/* //se evalua data para evitar errores y se usa .map iterar cada elemento en data */}
            {data?.map((character)=>(
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
