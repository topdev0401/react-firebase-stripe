import React from 'react'
import './Home.css'
import Product from './Product';
import { useStateValue } from './StateProvider';

function Home() {
    const BANNER_SRC = ["https://images-fe.ssl-images-amazon.com/images/G/65/Gateway_Launch/3P/FBA/clearanceSale/desktop_landing.jpg",
        "https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2020/img/Associates_Mass_/XCM_Manual_ORIGIN_1237295_1252815_SG_content_grid_3225363_1500x300_en_SG.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"];

    const [{ products }] = useStateValue();

    const scrollBanner = () => {
        let banner = document.querySelector("#carousel");
        console.log(banner.style);
        banner.style.marginLeft = "-100%";
    }

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__carouselActions">
                    <button onClick={scrollBanner} className="home_carouselLeft">Left</button>
                    <button className="home_carouselRight">Right</button>
                </div>

                <div className="home__carouselContainer">
                    <div id="carousel" className="home__carousel">
                        <img className="home__image" src={BANNER_SRC[0]} alt="" />
                        <img className="home__image" src={BANNER_SRC[1]} alt="" />
                        <img className="home__image" src={BANNER_SRC[2]} alt="" />
                    </div>
                </div>

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
