import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Services</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem

                            text="Hello hello"
                            label="adventure"
                            path="/services"
                        />
                        <CardItem

                            text="Hello hello"
                            label="adventure"
                            path="/services"
                        />
                        <CardItem

                            text="Hello hello"
                            label="adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
