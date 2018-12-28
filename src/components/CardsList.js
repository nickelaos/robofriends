import React from 'react';
import Card from './Card';

const CardsList = ({robots}) => {

    const cardsArray = robots.map((item) => {
        return (
            <Card
                id={item.id}
                name={item.name}
                email={item.email}
                key={item.id}
            />
        )
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
};

export default CardsList;