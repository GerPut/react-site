import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = (props) => {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path} >
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <i class="fas fa-balance-scale"></i>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">Hi</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
