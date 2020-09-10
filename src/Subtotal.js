import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal({ basket }) {
    const getBasketTotal = (basket) => {
        let sum = 0;

        basket.forEach(item => {
            sum += item.price;
        });

        return sum;

    };

    return (
        < div className="subtotal" >
            <CurrencyFormat
                renderText={
                    (value) => (
                        <>
                            <p>
                                Subtotal ({basket.length} items):
                    <strong>{` ${value}`}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />This order contains a gift
                            </small>
                        </>

                    )
                }

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />

            <button>Proceed to Checkout</button>
        </div >
    )
}

export default Subtotal
