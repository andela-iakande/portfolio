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
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src="/public/snow.png" alt="Los Angeles"/>
                    </div> 
                    <div className="item">
                        <img src="/public/red.png" alt="Los Angeles"/>
                    </div> 
                    <div className="item">
                        <img src="/public/mountains.png" alt="Los Angeles"/>
                    </div> 
                    
                </div>          
                    <div className="carousel-caption">
                        <button type= "button" className= "btn btn-default">Get Started</button>
                    </div> 
                    <Link to="#myCarousel" className="left carousel-control"  data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link to="#myCarousel" className="right carousel-control"  data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </Link>   
                </div> 
            </header>     
    );
};

export default Header;
