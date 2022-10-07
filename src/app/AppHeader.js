import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/kyn logo.png';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <img src={logo} alt='Logo' className='app-title' style={{width:'60px', height:'60px', padding:'5px'}} /> &nbsp;
                        <Link to="/" className="app-title" >
                            KNOW YOUR NEIGHBOUR
                        </Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">PROFILE</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/seeStores">VIEW STORES</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/addstore">ADD STORE</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/about">ABOUT US</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">CONTACT US</NavLink>        
                                        </li>
                                        <li>
                                            <a onClick={this.props.onLogout}>LOGOUT</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                            <NavLink to="/">HOME</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/about">ABOUT US</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/contact">CONTACT US</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/login" className='login'>LOGIN</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup" className='login'>SIGNUP</NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;