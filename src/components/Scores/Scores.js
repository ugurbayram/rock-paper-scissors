import React from 'react';
import './Scores.css';
import ReactTextTransition from 'react-text-transition'


export const Scores = props => {

    return (
        <div className={"score-card-content"}>
            <div className={"col-md-2"}>
                <ReactTextTransition
                    text={props.myScore}
                    className="mat-mini-fab first"

                />
            </div>
            <div className={"col-sm-0"}>
                <h2>{":"}</h2>
            </div>
            <div className={"col-md-2"}>
                <ReactTextTransition
                    text={props.yourScore}
                    className="mat-mini-fab second"
                    inline
                />
            </div>
        </div>
    )


    /*return (
        <div className={"score-card-content"}>
            <div className={"col-md-2"}>
                <button className={"mat-mini-fab first"}>{props.myScore}</button>
            </div>
            <div className={"col-sm-0"}>
                <h2>{":"}</h2>
            </div>
            <div className={"col-md-2"}>
                <button className={"mat-mini-fab second"}>{props.yourScore}</button>
            </div>
        </div>
    );*/
}