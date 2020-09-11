import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import BasketItem from './BasketItem';

function Checkout() {
    const BANNER_AD = 'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg';
    const [{ basket, user }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src={BANNER_AD} alt="" />
                <div className="checkout__title">
                    <h2>Hey {user?.email}, here's you shopping basket</h2>
                </div>

                {basket.map((_, i) => (
                    <BasketItem
                        key={i}
                        id={_.id}
                        title={_.title}
                        image={_.image}
                        price={_.price}
                        cartId={_.cartId}
                    ></BasketItem>
                ))
                }

            </div>
            <div className="checkout__right">
                <Subtotal
                    basket={basket} />
            </div>
        </div>
    )
}

export default Checkout
