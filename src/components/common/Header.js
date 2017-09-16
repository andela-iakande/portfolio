import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <header>
            <nav className = "navbar navbar-inverse">
            <div className= "container-fluid">
                <div className="navbar-header">
                    <button type= "button" className="navbar-toggle" data-toggle="collapse"
                    data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>   
                    <Link to="/" className="navbar-brand"> <img src="/public/logo.png" alt="logo"/></Link>
                </div> 
                <div className="collapse navbar-collapse" id="myNavbar">   
                    <ul className= "nav navbar-nav navbar-right">
                    <li className= "second">
                        <Link to="/">Home</Link> 
                    </li>
                    <li className= "first">
                        <Link to="products">Product</Link> 
                    </li>
                    <li className="last">
                        <Link to="about">Contact</Link> 
                    </li>    
                    </ul>  
                </div>
            </div>
            </nav> 
          </header>     
    );
};

export default Header;
