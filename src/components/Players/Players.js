import React from 'react';
import './Players.css';


export const Players = props => {

    return (
        <div className={"user-card-content"}>
            <div className={"col-md-2"}>
                <h3>{props.username}</h3>
            </div>
            <div className={"col-md-2"}>
                <h3>{"Computer"}</h3>
            </div>
        </div>
    );
}