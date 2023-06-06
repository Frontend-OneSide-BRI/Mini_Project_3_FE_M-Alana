import React from "react";
import Navbar from "../../components/navbar";
import "./index.css";
import img1 from "../../assets/homebg.jpg";


function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="relative">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8579/1498579-h-4dfb0de0e149" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="productlogo inset-0 justify-center items-center">
                            <p>Discover Your Favourite Movie and More</p>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}

export default Home;