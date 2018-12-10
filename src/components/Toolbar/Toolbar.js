import React from 'react';

import './Toolbar.css';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className = "toolbar-logo"><a href="/">⬅️ ADD SONG</a></div>
            <div></div>
                
        </nav>
    </header>
);

export default toolbar;