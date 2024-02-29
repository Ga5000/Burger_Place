import React from 'react';
import Header from '../Header/Header';
import Location from '../Home/Location';
import './history.css';
function History() {
    return (
        <>
            <Header></Header>
            <section className='introduction'>
                <h2 className='introduction-welcome'>Bem-vindo ao BurgerPlace!</h2>
                <p className='introduction-text'>
                    No BurgerPlace, nossa paixão por hambúrgueres vai além da simples comida. Começamos nossa jornada com um desejo ardente de criar uma experiência gastronômica única, onde cada mordida é uma celebração de sabores autênticos e ingredientes de qualidade.
                </p>
            </section>
            <hr />
            <section className='history'>
                <h2 className='history-title'>Nossa História</h2>
                <p className='history-text'>
                    Fundada em 2010, a BurgerPlace teve suas humildes origens em um food truck local. Desde então, crescemos, evoluímos e continuamos a servir os melhores hambúrgueres da cidade. Cada capítulo da nossa história é marcado por momentos deliciosos compartilhados com nossa comunidade de amantes de hambúrgueres.
                </p>
            </section>
            <hr />
            <section className='values'>
                <h2 className='values-title'>Nossos Valores</h2>
                <p className='values-text'>
                    No BurgerPlace, acreditamos em valores fundamentais que orientam cada aspecto de nossa operação. Comprometemo-nos a utilizar ingredientes frescos e locais, garantindo a qualidade em cada pedaço. Valorizamos a hospitalidade e buscamos criar um ambiente acolhedor onde cada cliente se sinta parte da família BurgerPlace.
                </p>
                <p className='values-text'>
                    A inovação está no centro do que fazemos. Estamos constantemente explorando novos sabores e combinações para surpreender seu paladar. Nosso compromisso com a sustentabilidade também nos impulsiona a tomar decisões responsáveis para o planeta e para você, nosso apreciado cliente.
                </p>
            </section>
            <Location></Location>
        </>
    );
}

export default History;
