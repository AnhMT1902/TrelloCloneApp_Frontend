import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./component/auth/Login";
import {Register} from "./component/auth/Register";
import {RequiredLogin} from "./component/auth/RequiredLogin";
import {Home} from "./component/boards/Home";
import {BackgroundHome} from "./component/boards/BackgroundHome";
import {BoardContent} from "./component/boards/BoardContent";

function App() {
    return (
        <>
            <Routes>
                <Route path={"auth/signup"} element={<Register/>}/>
                <Route path={"auth/login"} element={<Login/>}/>
                <Route path={"/required"} element={<RequiredLogin/>}/>
                <Route path={''} element={<Home/>}>
                    <Route path={''} element={<BackgroundHome/>}></Route>
                    <Route path={'/:id'} element={<BoardContent/>}/>
                </Route>
            </Routes>
        </>);
}

export default App;
