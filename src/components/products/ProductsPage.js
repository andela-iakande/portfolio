import React from 'react';
import { Link } from 'react-router';

class ProductsPage extends React.Component {
    render() {
        return (
           <div className="jumbotron">
             <h1>My Products avenue </h1> 
             <p> Check out my products page here </p>
             <Link to ="about" className="btn btn-primary btn-lg"> Go to about
             </Link>
           </div>         
        );
    }
}
export default ProductsPage;

