import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Highlight from "../../components/hightlight";
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80">
                        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Discover Your Favourites Movie and More</h1>
                    </div>
                    <div className="absolute text-5xl text-white top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button type="button" class="text-3xl text-white bg-gradient-to-r from-blue-500 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <span className="text-2xl">Get Started</span>
                        </button>
                    </div>
                </div>
                <div className="bg-black bg-gradient-to-t from-indigo-950 mx-auto">
                    <div className="grid grid-cols-3 place-items-center">
                        <div className="max-w-sm p-6">
                            <div className="flex flex-col items-center">
                                <img class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/usp_entertainment_1.5x" />
                                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path>
                                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                                <a href="#">
                                    <h5 class="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Subscribe To Your Needs</h5>
                                </a>
                                <p class="text-center mb-3 font-normal text-gray-500 dark:text-gray-400">Rp39.000/mo. | Rp199.000/yr. Subscription required. Add'l bank charges may apply.</p>
                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                    See our guideline
                                    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm p-6">
                            <div className="flex flex-col items-center">
                                <img class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" viewBox="0 0 20 20" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/usp_fav_device_1.5x" />
                                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path>
                                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                                <a href="#">
                                    <h5 class="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Discover A Lots of Entertaiments</h5>
                                </a>
                                <p class="text-center mb-3 font-normal text-gray-500 dark:text-gray-400">Thousands of hours of movies, series, DeMovies Original, and More.</p>
                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                    See our guideline
                                    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm p-6">
                            <div className="flex flex-col items-center">
                                <img class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" viewBox="0 0 20 20" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/usp_parental_control_1.5x" />
                                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path>
                                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                                <a href="#">
                                    <h5 class="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Choose Your Favourites</h5>
                                </a>
                                <p class="text-center mb-3 font-normal text-gray-500 dark:text-gray-400">You can choose whatever movie or series you want</p>
                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                    See our guideline
                                    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Highlight />
            </main>
            <Footer />
        </>
    )
}

export default Home;