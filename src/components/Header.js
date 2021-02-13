import React, {Component} from 'react';

import data from '../data.json';
import './Header.css';

class Header extends Component {
    constructor() {
        super()
        this.toggleMenuHandler = this.toggleMenuHandler.bind(this)
        this.state = {
          opened: false
        }
      }
      
      toggleMenuHandler() {
        this.setState(prevState => ({
            opened: !prevState.opened
        }));
      }
    render() {
        return (
            <div className="section-header">
                <div className="mobile-header">
                    <div className="mobile-header__container">
                        <img 
                            className="mobile-header__menu-icon" 
                            src="images/bars.svg" alt="" 
                            onClick={this.toggleMenuHandler}
                        />
                        <div className="mobile-header__site-logo">
                            <a href="#">
                                <h1>Amene<span className="mobile-header__dot"></span></h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="desktop-header" data-opened={this.state.opened ? `opened`: ``}>
                    <div className="mobile-header">
                        <div className="mobile-header__container">
                            <img 
                                className="mobile-header__menu-icon" 
                                src="images/times.svg" alt="" 
                                onClick={this.toggleMenuHandler}
                            />
                            <div className="mobile-header__site-logo">
                                <a href="#">
                                    <h1>Amene<span className="mobile-header__dot"></span></h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="desktop-header__site-logo">
                        <a href="#">
                            <h1>Amene<span className="desktop-header__dot"></span></h1>
                        </a>
                    </div>
                    <nav>
                        <ul className="desktop-header__vertical-menu">
                            {data.header.menu.map(item => (
                                <li className="desktop-header__nav-item">
                                    <a className="desktop-header__nav-link" href="#">
                                        <img src={item.icon} alt="" className="desktop-header__nav-icon"/>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;