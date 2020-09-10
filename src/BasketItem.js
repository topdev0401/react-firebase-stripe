import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider';

function BasketItem({ id, title, image, price, rating, cartId }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            cartId: cartId
        })
    };

    return (
        <div className="basketItem">
            <div className="basketItem__info">
                <p>{title}</p>
                <p className="basketItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="basketItem__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p key={i}>🌟</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={removeFromBasket}>Remove from Basket</button>

        </div>
    )
}

export default BasketItem
