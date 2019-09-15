import React, {createRef} from 'react';
import './Weapon.css';
import {weapons} from '../../constants/Constants';


const assets = [require("../../assets/rock.png"), require("../../assets/paper.png"), require("../../assets/scissors.png")];

export const Weapon = props => {
    const round = {iPlayed: 0, youPlayed: 0, whoWin: 3}
    const computerClick = createRef();
    const userInitiate = (e) => {
        const iPlay = e.target.id;
        const opponent = comuterPlayes();
        //focusComputerClick();
        round.iPlayed = iPlay;
        round.youPlayed = opponent;

        round.whoWin = play(iPlay, opponent);
        props.updateRound(round);
    };

    function comuterPlayes() {
        let rand = (1 + Math.floor(Math.random() * 3));
        return rand;
    }

    function play(iPlay, youPlay) {
        if (iPlay == youPlay)
            return 0;
        if ((iPlay == 1 && youPlay == 3) || (iPlay == 2 && youPlay == 1) || (iPlay == 3 && youPlay == 2))
            return 1;

        return 2;
    }

    function focusComputerClick() {
        computerClick.current.focus();
    }

    return (

        <div className={`content2 ${props.who}`}>
            {weapons.map(item => (
                <img id={item.id} src={assets[(item.id) - 1]} onClick={props.who == "me" ? userInitiate : ""}
                     className={`weapon ${props.who}`} {...((props.who != "me" && (item.id == 0 || item.id == 1 || item.id == 2)) ? {ref: {computerClick}} : {})}></img>
            ))}
        </div>
    );
}