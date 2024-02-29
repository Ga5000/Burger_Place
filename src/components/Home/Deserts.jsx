import './styles/deserts.css';
import { Link } from 'react-router-dom';

function Deserts(){
    return(
        <>
        <div className="desert-container">
            <div className="desert-text-container">
            <h1>Sobremesas</h1>
            <p className="text">Delicie-se com nossas irresistíveis sobremesas, preparadas com ingredientes frescos e amor. Cada mordida é uma experiência única que vai adoçar o seu dia.</p>
            <Link  to="/Galeria"> <button className="serving-button">Sobremesas</button></Link>
            </div>
        </div>
        </>
    );
}

export default Deserts