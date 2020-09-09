import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    const BANNER_SRC = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={BANNER_SRC} alt="" />

                <div className="home__row">
                    <Product
                        id="123019821"
                        title="The lean startupHP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                        image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                        price={89.99}
                        rating={3}
                    />
                    <Product
                        id="123019822"
                        title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
                        image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
                        price={29.99}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="123019823"
                        title="1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction..."
                        image="https://images-na.ssl-images-amazon.com/images/I/71zEiQWAUoL._AC_SL1500_.jpg"
                        price={34.99}
                        rating={4} />
                    <Product 
                        id="123019824"
                        title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows..."
                        image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"
                        price={29.99}
                        rating={4} />
                    <Product 
                        id="123019825"
                        title='Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen...'
                        image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg"
                        price={959.99}
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product 
                        id="123019826"
                        title='Sceptre 24" Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)'
                        image="https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SL1500_.jpg"
                        price={129.99}
                        rating={5} />
                </div>

            </div>
        </div>
    )
}

export default Home
