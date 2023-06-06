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
                <div className="relative ">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8579/1498579-h-4dfb0de0e149" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-75"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-3xl font-bold">Discover Your Favourites Movies and More</h1>
                    </div>
                </div>
            </main>


        </>
    )
}

export default Home;