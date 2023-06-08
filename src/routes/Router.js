import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/Home" exact component={<Home/>} />
                <Route path="/Login" exact component={<Login/>} />
                <Route path="/Signup" exact component={<Signup/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
