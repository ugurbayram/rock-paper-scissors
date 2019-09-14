import React from 'react';
import './Footer.css';
import github from "../../assets/github.png";
import uio from "../../assets/uio.png";


export default function Footer() {
    return (
        <footer className={"footer"}>
            <div className={"container"}>
                <div className={"footer_links"}>
                    <a
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        href={"http://folk.uio.no/ugurb"}
                    >
                        <img className="footer_icon" alt="UiO" src={uio}/>
                    </a>
                    <a
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        href={"https://github.com/ugurbayram"}
                    >
                        <img className="footer_icon" alt="Github" src={github}/>
                    </a>
                    <p className="footer_copyright">©2019 Ugur Bayram</p>
                </div>
            </div>
        </footer>

    );
}