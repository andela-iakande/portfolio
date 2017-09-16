import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
           <div className="jumbotron">
             <h1> </h1> 
             <h1>Welcome to My Home page </h1> 
             <p> Navigate through my home page here </p>
             <Link to ="products" className="btn btn-primary btn-lg"> check Products
             </Link>
           </div>         
        );
    }
}

export default HomePage;