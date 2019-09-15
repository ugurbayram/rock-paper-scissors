import React from 'react';
import './Header.css';
import headerimg from '../../assets/main2-bg-rs.png';
import finish from "../../assets/finish.png";
import {Link} from "react-router-dom";

export const Header = props => {

    return (

        <div className={"header"}>
            <div className={"container"}>
                <div className={"header-container"}>
                    <div className={"header-thumb"}>
                        <a href={"/"}>
                            <img src={headerimg}/>
                        </a>
                    </div>


                    {!(window.location.href).includes("scoreboard") &&
                        <div className={"header-thumb-finish"}>
                            <Link to={{
                                pathname: "/scoreboard/",
                                state: props.scoreboard
                            }}>
                                <img src={finish}/>
                            </Link>
                        </div>}
                </div>
            </div>
        </div>

    );
}
export default Header;
