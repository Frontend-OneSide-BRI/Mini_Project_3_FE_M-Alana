import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/Home" exact component={<Home/>} />
                <Route path="/Login" exact component={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
