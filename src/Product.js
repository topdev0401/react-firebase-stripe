import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, added }) {
    const [{ basket }, dispatch] = useStateValue();

    const generateCartId = (id) => {
        let randomString = Math.random().toString(36);
        const hashString = `${id}${randomString}`;
        console.log(hashString);
        return hashString;
    }

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                cartId: generateCartId(id)
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p key={i}>🌟</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
