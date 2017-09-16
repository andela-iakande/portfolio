import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import {
  a
} from 'react-dom';
 
const Footer = () => {
    return (
      <footer className= "container-fluid text-center">
        <div className = "row">
          <div className="col-sm-4">
            <h3>Contact Us</h3>
            <br/>
            <h4>Our address and Contact Info here.</h4>
          </div>
          <div className="col-sm-4">
            <h3>Connect</h3>
            <a href="https://www.facebook.com/akande.imisioluwaezekiel">
              <i className="fa fa-facebook" />
            </a>
            
            <a href="https://twitter.com/imizezek">
              <i className="fa fa-twitter" />
            </a>

            <a href="https://medium.com/@imizezek">
              <i className="fa fa-medium" />
            </a> 

            <a href="https://www.aedin.com/in/imisioluwa-akande-39030b70/">
              <i className="fa fa-linkedin" />
            </a>           
          </div>
          <div className="col-sm-4">
            <img className = "self" src="/public/my-passport.jpg" alt=""/> 
          </div>  
        </div>
      </footer>
    );
  };
export default Footer;
