import './footer.css';
import { Element } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
function Footer({textInfos}){
  const homePage = () => {
    window.location.href = '/';
  };

  const locationLink = () => (
    <ScrollLink
        className="location-text-footer"
        to="locationSection"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
    >
        Localização
    </ScrollLink>
);

    return(
    <>
    <footer>
        <ul>
            <li className="name"><Link to="/History" className="name">Burger Place</Link></li>
            <hr className="div-line" />
            <li className="links"  onClick={homePage}><h5 className="link-text">Início</h5></li>
            <hr className="div-line" />
            <li className="links"><Link to="/Galeria" className="link-text">Galeria</Link></li>
            <hr className="div-line" />
            {locationLink()}
            <hr className="div-line" />
            <li className="links"><Link to="/Cardapio" className="link-text">Cardápio</Link></li>
            <hr className="div-line" />
       </ul>

       <div className="about">
        <h3>A HAMBURGUERIA</h3>
        <p>Explore a paixão pelos hambúrgueres no Burger Place, onde cada criação é uma obra-prima culinária. Desde a suculência da carne até a combinação perfeita de ingredientes frescos, nossa hambúrgueria é um convite a uma experiência gastronômica única. Sinta a textura, saboreie os aromas e deixe-se envolver pela tradição reinventada. No Burger Place, não servimos apenas hambúrgueres; entregamos momentos inesquecíveis a cada cliente. 
          Bem-vindo ao lugar onde o sabor encontra a excelência</p>
       </div>
        
       <h4 className='follow-text'>Follow Us</h4>

       <div className="follow">
        <button className="media-link-button"><img src="./imgs/facebook_icon.png" alt="media-icon" className="followImg" /></button>
        <button className="media-link-button"><img src="./imgs/tiktok_icon.png" alt="media-icon" className="followImg" /></button>
        <button className="media-link-button"><img src="./imgs/instagram_icon.png" alt="media-icon" className="followImg" /></button>
       </div>

       <Element name="contactSection" className='location-contact'>
       <div className="location-contact">
       <h4 className='location-text2'>Localização e Contato</h4>

  <ul>
    {Object.entries(textInfos).map(([key, value], index) => (
      <li key={index} className="information">
        <p className='information-text'>{`${key}: ${value}`}</p>
      </li>
    ))}
  </ul>
</div>
</Element>
    </footer>
    </>
    );
}

export default Footer