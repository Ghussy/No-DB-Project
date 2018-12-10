import React from 'react';
import "./SideDrawer.css";
import axios from 'axios';





const sideDrawer = props => {
    let newsongObj = {
        track: '',
        artist: '',
        rating: [],
        coverArt: ''
    };

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open' ;
    }
    return (<nav className={drawerClasses} >
        <ul>
            <h1>To add a song, fill out info below</h1>
            <li>Track Name- <input></input>  </li>
            <li className="spaces"></li>
            <li>Artist- <input></input>  </li>
            <li className="spaces"></li>
            <li>Cover art- <input></input> </li>
            <button id="add-button">+ add song</button>
        </ul>
    </nav>);
};


export default sideDrawer;