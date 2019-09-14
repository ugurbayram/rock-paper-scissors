import React from 'react';
import './Header.css';
import headerimg from '../../assets/main2-bg-rs.png';


export default function Header() {
    return (

        <div className={"header"}>
            <div className={"container"}>
                <div className={"header-container"}>
                    <div className={"header-thumb"}>
                        <a href={"/"}>
                            <img src={headerimg}/>
                        </a>
                    </div>

                </div>
            </div>
        </div>

    );
}

