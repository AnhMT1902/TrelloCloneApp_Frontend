import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./component/auth/Login";
import {Register} from "./component/auth/Register";
import {RequiredLogin} from "./component/auth/RequiredLogin";
import {Home} from "./component/Home";
import {BackgroundHome} from "./component/boards/BackgroundHome";

function App() {
    return (
        <>
            <Routes>
                <Route path={"auth/signup"} element={<Register/>}/>
                <Route path={"auth/login"} element={<Login/>}/>
                <Route path={"/required"} element={<RequiredLogin/>}/>
                <Route path={''} element={<Home/>}>
                    <Route path={''} element={<BackgroundHome/>}></Route>
                    <Route path={'/:id'} element={<Login/>}/>
                </Route>
            </Routes>
        </>);
}

export default App;
