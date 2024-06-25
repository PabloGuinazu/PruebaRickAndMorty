import './Card.css';
//se importan estilos y el componente recibe componente de app.jsx despues se construye la card con los estilos y datos correspondientes
const Card =({ name, status,species,gender,image }) =>{
	return(
		<div className='card'>
			<picture>
				<img src={image} alt={name} />
			</picture>
			<div className=''>
				<h2>{name}</h2>
				<p>Status: {status}</p>
				<p>Species: {species}</p>
				<p>Gender: {gender}</p>
			</div>
		</div>
	);
};
export default Card;