import React from 'react'
import './Home.css'
import Product from './Product';
import { useStateValue } from './StateProvider';

function Home() {
    const BANNER_SRC = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";
    const [{ products }] = useStateValue();

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={BANNER_SRC} alt="" />

                <div className="home__row">
                    {
                        products.filter((e, i) => [0, 1].includes(i)).map((item, j) => (
                            <Product
                                key={j}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>

                <div className="home__row">
                    {
                        products.filter((e, i) => [2, 3, 4].includes(i)).map((item, j) => (
                            <Product
                                key={j}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>

                <div className="home__row">
                    {
                        products.filter((e, i) => [5].includes(i)).map((item, j) => (
                            <Product
                                key={j}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Home
