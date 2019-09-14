import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import {Scoreboard} from "../Scoreboard/Scoreboard";


export default function App() {
    return (
        <div className={"app"}>
            <Header/>
            <Route path="/" exact component={Container}/>
            <Route path="/scoreboard" exact component={Scoreboard}/>
            <Footer/>
        </div>

    );
}