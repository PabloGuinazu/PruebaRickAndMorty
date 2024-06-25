import { useState, useEffect } from "react";// se importan useState, useEffect

export function useFetch(){ //se crea una funcion donde se traeran y se trasformaran los datos de la api

  const [data, setData] = useState(null); 
	
	useEffect(()=>{
		fetch("https://rickandmortyapi.com/api/character")
		.then((Response)=> Response.json())
		.then((data) => setData(data.results));
	},
	[]);
	return { data };
}