import './styles/serving.css';
import { Link } from 'react-router-dom';
function Serving(){
   
    return(
        <>
        <div className="container">
            <div className="text">
        <h1 className='serving-text'>Cardápio</h1>
        <p className='serving-message'>Descubra a deliciosa variedade de sabores na <span>Burger Place</span>. <br /> 
        Cada item é cuidadosamente preparado para oferecer uma experiência única. Explore nosso cardápio e deixe seu paladar se encantar.</p>
       <Link  to="/Cardapio"> <button className="serving-button">Cardápio</button></Link>
        </div>
        </div>
        </>
    );
}

export default Serving