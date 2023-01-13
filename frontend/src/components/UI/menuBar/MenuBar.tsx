import React from 'react';
import "./menuBar.scss"
import Header from "../header/Header";

const MenuBar = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="menu-bar">
                    <h2 className="logo">naibrisu</h2>
                    <ul>
                        <li><a href="frontend/src/components/UI#">Main</a></li>
                        <li><a href="frontend/src/components/UI#">Works</a></li>
                        <li><a href="frontend/src/components/UI#">Reviews</a></li>
                        <li><a href="frontend/src/components/UI#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <Header/>
        </header>
    );
};

export default MenuBar;