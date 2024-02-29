import React, { useState } from "react";
import './galery.css';
import Header from '../Header/Header';
import Location from '../Home/Location';

function Galeria() {
    let products = [
        { src: 'classic.jpg' },
        { src: 'bacon.jpg' },
        { src: 'cheddar.jpg' },
        { src: 'cogumelo.jpg' },
        { src: 'combo.jpg' },
        { src: 'onionRing.jpg' },
        { src: 'peru.jpg' },
        { src: 'vegan.jpg' },
        { src: 'sorvete.jpg' },
        { src: 'torta.jpg' },
        { src: 'mooseMaracuja.jpg' },
        { src: 'sucos.jpg' }
    ];

    return (
        <>
            <Header></Header>
            <div className="galery">
                <h1>Galeria</h1>
                <div className="container-galery">
                    <div className="card">
                        {products.map((product, index) => (
                            <div key={index} className="product">
                                <img
                                    src={`/imgs/${product.src}`}
                                    alt={product.product_name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <Location></Location>
        </>
    );
}

export default Galeria;
