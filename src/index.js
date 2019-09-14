import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'

import {UserProvider} from "./components/UserContext/UserContext";
import {BrowserRouter} from "react-router-dom";

/*ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();*/


const rootElement = document.getElementById("root");
ReactDOM.render(
    <UserProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </UserProvider>,
    rootElement
);
