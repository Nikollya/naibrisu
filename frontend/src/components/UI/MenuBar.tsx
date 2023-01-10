import React from 'react';
import "./menuBar.scss"

const MenuBar = () => {
    return (
        <div className="wrapper">
            <div className="menu-bar">
                <h2 className="logo">naibrisu</h2>
                <ul>
                    <li><a href="#">Main</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MenuBar;