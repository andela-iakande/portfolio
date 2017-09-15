import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
           <div className="jumbotron">
             <h1>My portfolio </h1> 
             <p> Know more about me </p>
             <Link to ="products" className="btn btn-primary btn-lg"> Meet Me
             </Link>
           </div>         
        );
    }
}
export default AboutPage;

