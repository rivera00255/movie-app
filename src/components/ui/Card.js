import React from 'react';
import { IMAGE_URL } from '../Config';
import { Link } from 'react-router-dom';

function Card({ card, data }) {

    return ( 
        <div className='card'>
            <Link to={`/${data}/${card.id}`} key={card.id}>
                <img src={`${IMAGE_URL}w500${card.poster_path}`} alt={card.title} />
            </Link>
        </div>
     );
}

export default Card;