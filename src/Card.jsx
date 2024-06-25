import './Card.css';
import RedIcon from './assets/RedIcon';
import Greenicon from './assets/GreenIcon';
import Unknown from './assets/Unknown';
import AlienIcon from './assets/AlienIcon';
import HumanIcon from './assets/HumanIcon';
import MaleIcon from './assets/MaleIcon';
import FemaleIcon from './assets/FemaleIcon';
//se importan icon
//se importan estilos y el componente recibe componente de app.jsx despues se construye la card con los estilos y datos correspondientes
const Card =({ name, status,species,gender,image }) =>{
	return(
		<div className='card'>
			<picture>
				<img src={image} alt={name} />
			</picture>
				<h2>{name}</h2>
			<div className='content'>
				{/* se añaden condiciones dependiewndo del dato obtenido en el primer caso si esta vivo saldra el icon verde, sino el rojo todo esto atra vez de componentes jsx */}
				<p>Status: {status}{'  '}
					{status === 'Dead' ? <RedIcon/> :
					 status === 'Alive' ? <Greenicon/> : <Unknown/> }</p>
				<p>Species: {species}{'  '}
						{species === 'Alien' ? <AlienIcon/> : <HumanIcon/>}
				</p>
				<p>Gender: {gender}{'  '}
				{gender === 'Male' ? <MaleIcon/> :
					 gender === 'Female' ? <FemaleIcon/> : <Unknown/> }</p>
			</div>
		</div>
	);
};
export default Card;