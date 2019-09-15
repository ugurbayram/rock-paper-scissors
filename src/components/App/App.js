import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Container from "../Container/Container";
import {Scoreboard} from "../Scoreboard/Scoreboard";


export default function App() {
    return (
        <div className={"app"}>

            <Route path="/" exact component={Container}/>
            <Route path="/scoreboard" exact component={Scoreboard}/>

        </div>

    );
}