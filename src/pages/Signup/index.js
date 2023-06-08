import React from "react";
import Navbar from "../../components/templates/navbar";
import Footer from "../../components/templates/footer";
import SignupCard from "../../components/molecules/signupcard";

function Signup() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="relative">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8579/1498579-h-4dfb0de0e149" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80">
                    <SignupCard />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default Signup;