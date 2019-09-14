import React, {useState} from 'react';
import './Container.css';
import {Players} from "../Players/Players";
import {Weapon} from "../Weapon/Weapon";
import {Scores} from "../Scores/Scores";
import {Link} from "react-router-dom";
import ReactNotification, {store} from 'react-notifications-component';
import {messages, notificationTemplates} from "../../constants/Constants";
import 'react-notifications-component/dist/theme.css';
import finish from "../../assets/finish.png";
import useUser from "../UserContext/UserContext";


export default function Container(props) {
    const [myScore, setMyScore] = useState(0);
    const [yourScore, setYourScore] = useState(0);
    const [allScores, setAllScores] = useState([]);
    const { user } = useUser();
    alert(user);
    const getRoundDetail = (round) => {

        if (round.whoWin == 1) {
            setMyScore(myScore + 1);
        } else if (round.whoWin == 2) {
            setYourScore(yourScore + 1);
        }
        setAllScores([...allScores, round]);
        callNotification(round);
    };

    function callNotification(round) {
        let notification = notificationTemplates[round.whoWin];
        notification.message = messages[round.iPlayed - 1][round.youPlayed - 1];
        store.addNotification(notification);
    }

    return (

        <div className={"body"}>
            <ReactNotification/>
            <div className={"outContainer"}>
                <Link to={{
                    pathname: "/scoreboard/",
                    state: allScores
                }}>
                    <img className={"finish"} src={finish}></img>
                </Link>
            </div>

            <div className={"container"}>

                <div className={"flex-center"}>
                    <img className={"rpc-image"} src={require("../../assets/rpc-cartoon-small.png")} height={"240px"}/>
                </div>
                <Players username={"asd"}/>
                <Scores myScore={myScore} yourScore={yourScore}/>
                <div className="content">
                    <div className={"mat-card"}>
                        <div className={"mat-card-content"}>
                            <h3> Make a Choice: </h3>
                            <Weapon updateRound={getRoundDetail.bind(this)} who={"me"}/>
                        </div>
                    </div>
                    <div className={"mat-card"}>
                        <div className={"mat-card-content"}>
                            <h3> Computer: </h3>
                            <Weapon who={"you"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}