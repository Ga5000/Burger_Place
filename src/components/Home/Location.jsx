import React from 'react';
import { Element } from 'react-scroll';
import './styles/location.css';
import Footer from '../Footer/Footer';


function Location() {
  const imgSrcs = ['phone_icon.png', 'contact_icon.png', 'location_pin_icon.png'];
  const textInfos = {
    telefone: '(11) 67378-9769',
    contato: 'contato@BurgerPlace.com',
    Endereço: 'Av. Hamburguer 535, São Paulo, Tatuapé',
  };

  return (
    <>
      <Element name="locationSection" className="location">
        <h1>Localização</h1>
        <hr className="line" />
        <ul className="info-list">
          {imgSrcs.map((src, index) => (
            <li key={index} className="info">
              <img src={"./imgs/"+src} alt={`icon-${index}`} className="info-icon" />
              <p className="info-text">{textInfos[getImageType(src)]}</p>
            </li>
          ))}
        </ul>
      </Element>
      <Footer textInfos={textInfos} />
    </>
  );
}

function getImageType(src) {
  if (src.includes('phone')) return 'telefone';
  if (src.includes('contact')) return 'contato';
  if (src.includes('location')) return 'Endereço';
  return '';
}

export default Location;
