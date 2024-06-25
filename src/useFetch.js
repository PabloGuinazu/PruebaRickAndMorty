import { useState, useEffect } from "react";// se importan useState, useEffect

export function useFetch(){ //se crea una funcion donde se traeran y se trasformaran los datos de la api

  const [data, setData] = useState(null); 
	const [speciesFilter, setSpeciesFilter] = useState("all");

	useEffect(()=>{
		fetch("https://rickandmortyapi.com/api/character")
		.then((Response)=> Response.json())//convierte a json
		.then((data) => {
			//ordena los datos por nombre y luego genero
			const SortData = data.results.sort((a,b) => {
				const nameComparison = a.name.localeCompare(b.name);
          if (nameComparison === 0) { //se compara el nombre si este es igual se compara por genero
            return a.gender.localeCompare(b.gender);
					}
					return nameComparison;
			});
			setData(SortData);
		});
	},
	[]);
	const filteredData = speciesFilter === "all" ? data : data.filter((character) => character.species === speciesFilter);

  return { data: filteredData, speciesFilter, setSpeciesFilter };
	// return { data };
}