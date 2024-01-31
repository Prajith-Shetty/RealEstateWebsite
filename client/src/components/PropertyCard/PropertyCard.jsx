import React from 'react'
import './PropertyCard.css'
import {truncate} from 'lodash'
import { useNavigate } from 'react-router-dom'
import Heart from '../Heart/Heart'

const PropertyCard = ({card}) => {
    const navigate = useNavigate();
    return (
        <div className="flexColStart r-card"
        onClick={()=>navigate(`../properties/${card.id}`)}
        // backticks are used since we are using constants 'card.id'
        >
            <Heart id={card?.id} />
            <img src={card.image} alt="home" />
            <span className='secondaryText r-price'>
                <span style={{ color: 'orange' }}>$</span>
                <span>{card.price}</span>
            </span>

            <span className="primaryText">
                {truncate(card.title, {length: 15})}
            </span>

            <span className="secondayText">{truncate(card.description, {length: 80})}</span>
        </div>
    )
}

export default PropertyCard