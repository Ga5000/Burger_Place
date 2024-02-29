import React from 'react';
import Header from '../Header/Header';
import Location from '../Home/Location';
import './cardapio.css';

function Cardapio() {
    let products = [
        { src: 'classic.jpg', name: 'Classic Burger', description: 'Um clássico atemporal com um hambúrguer suculento e ingredientes frescos.' },
        { src: 'bacon.jpg', name: 'Bacon Burger', description: 'Saboreie o sabor defumado do bacon a cada mordida.' },
        { src: 'cheddar.jpg', name: 'Cheddar Burger', description: 'Delicie-se com o sabor rico e cremoso do queijo cheddar.' },
        { src: 'cogumelo.jpg', name: 'Cogumelo Burger', description: 'Uma delícia vegetariana com cogumelos saborosos.' },
        { src: 'combo.jpg', name: 'Refeição Combo', description: 'Tenha o melhor dos dois mundos com nossa refeição combo.' },
        { src: 'onionRing.jpg', name: 'Onion Ring Burger', description: 'Anéis de cebola crocantes adicionam um toque encantador a este hambúrguer.' },
        { src: 'peru.jpg', name: 'Peru Burger', description: 'Uma variação festiva com sabores de Ação de Graças em cada mordida.' },
        { src: 'vegan.jpg', name: 'Hambúrguer Vegano', description: 'Bondade à base de plantas para nossos amigos veganos.' },
        { src: 'sorvete.jpg', name: 'Sorvetes', description: 'Uma delícia doce e salgada com uma colher de sorvete.' },
        { src: 'torta.jpg', name: 'Torta de Limão', description: 'Camadas de delícias em forma de hambúrguer.' },
        { src: 'mooseMaracuja.jpg', name: 'Moose Maracuja', description: 'Sabores exóticos de maracujá combinados com um hambúrguer de alce.' },
        { src: 'sucos.jpg', name: 'Sucos Frescos', description: 'Sucos refrescantes para complementar sua refeição.' }
    ];

    return (
        <>
            <Header />
            <h1>Cardápio</h1>
            <div className="container-cardapio">
                {products.map((product, index) => (
                    <div className="card-cardapio" key={index}>
                        <img src={`/imgs/${product.src}`} alt={product.name} />
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
            <Location />
        </>
    );
}

export default Cardapio;
