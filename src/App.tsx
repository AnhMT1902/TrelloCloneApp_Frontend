import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./component/auth/Login";
import {Register} from "./component/auth/Register";
import {RequiredLogin} from "./component/auth/RequiredLogin";

function App() {
    return (
        <>
            <Routes>
                <Route path={"auth/signup"} element={<Register/>}></Route>
                <Route path={"auth/login"} element={<Login/>}></Route>
                <Route path={"/required"} element={<RequiredLogin/>}></Route>
            </Routes>
        </>);
}

export default App;
