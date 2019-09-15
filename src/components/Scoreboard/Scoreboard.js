import React from 'react';
import './Scoreboard.css'
import {game, weapons} from "../../constants/Constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Scoreboard = props => {

    function renderTableData() {

        return props.location.state.map((round, index) => {
            return (
                <tr className={"rounds"}>
                    <td>{`# ${index + 1}`}</td>
                    <td>{weapons[round.iPlayed - 1].name}</td>
                    <td>{weapons[round.youPlayed - 1].name}</td>
                    <td style={{backgroundColor: game[round.whoWin].color}}>{game[round.whoWin].result}</td>
                </tr>
            )
        });
    }

    return (
        <div >
            <Header/>
            <div className={"container"}>
                <table className="w3-table-all w3-hoverable">
                    <caption className={"sbTitle"}>Game History</caption>
                    <thead>
                    <tr className="w3-light-grey">
                        <th>Rounds</th>
                        <th>I Played</th>
                        <th>Computer Played</th>
                        <th>Result</th>
                    </tr>
                    </thead>

                    {renderTableData()}

                </table>

            </div>
            <Footer/>
        </div>
    )
}