import React, { forwardRef } from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider';

//{ id, title, image, price, rating, cartId }

const BasketItem = forwardRef((props, ref) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBaskset = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            cartId: props.cartId
        })
    };

    return (
        <div className="basketItem" ref={ref}>
            <div className="basketItem__info">
                <p>{props.title}</p>
                <p className="basketItem__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="basketItem__rating">
                    {
                        Array(props.rating).fill().map((_, i) => (
                            <p key={i}>🌟</p>
                        ))
                    }
                </div>
            </div>

            <img src={props.image} alt="" />

            <button onClick={removeFromBaskset}>Remove from Basket</button>

        </div>
    )

});

export default BasketItem
