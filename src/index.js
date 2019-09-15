import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'

import {UserProvider} from "./components/UserContext/UserContext";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <UserProvider >
        <BrowserRouter >
            <App/>
        </BrowserRouter>
    </UserProvider>,
    rootElement
);
