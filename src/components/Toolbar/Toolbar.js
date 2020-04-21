import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
  <header className="toolbar">
  <nav className="toolbar_navigation">
  <div className="toolbar_toggle-button">
  <DrawerToggleButton click={props.drawerClickHandler} />
  </div>
  <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
  <div className="spacer" />
  <div className="toolbar_navigation-items">
  <ul>
  
  <li><a href="/">Home</a></li>
  <li><a href="/">Add Location</a></li>
  <li><a href="/">Get Meals</a></li>
  <li><a href="/">About Us</a></li>
  </ul></div>
  </nav>
    </header>
);

export default toolbar;