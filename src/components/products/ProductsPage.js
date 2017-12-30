import React from 'react';
import { Link } from 'react-router';

class ProductsPage extends React.Component {
    render() {
        return (
           <div className="jumbotron">
          <div className="row">
            <div>
              <h2>View my products</h2>
              <p>I have utilized different programming languages and different frameworks to achieve certain projects </p>
              <div className= "col-lg-3 col-md-3">
              <a href = "http://abinibi.somee.com/DigitsToWords.aspx"><img src="/public/abinibi.png" className="img-thumbnail" alt=""/></a>
                <h4> Abinibi</h4>
                <br/>C#, Jquery and SQL server
                <p>This software application is a three in one that converts digits in to Yoruba Equivalent word
                   It has a Yoruba calculator and It can also provide meaning to certain Yoruba Idioms. 
                </p>
              </div>  
              <div className= "col-lg-3 col-md-3">
                <a href="https://imisioluwa-invertedindex.herokuapp.com/"><img src="/public/inverted-index.png" className="img-thumbnail" alt=""/></a>
                <h4> Inverted Index</h4>
                <br/>Angular and Javascript
                <p>This application supports file with JSON object structure for upload.It follows an index data structure storing a mapping from words.
                   The purpose of an inverted index is to allow quick full text searches. You can upload a file from your local machine to test. 
                </p>
              </div> 
              <div className= "col-lg-3 col-md-3">
                <a href= "https://smartdocx.herokuapp.com/"><img src="/public/dms.png" className="img-thumbnail" alt=""/></a>
                <h4> Document Management System</h4>
                <br/>React Redux and Javascript
                <p>This software application manages documents of different types. It allows user to create an account, create new private and public documents.
                  It also allows  view other users of the appIt has a support for markup
                </p>
              </div>  
              <div className= "col-lg-3 col-md-3">
              <a href = "https://postitxperts.herokuapp.com/"><img src="/public/rest-api.png" className="img-thumbnail" alt=""/></a>
                <h4> RESTFUL API</h4>
                <br/>Django and Python
                <p>This is an API that manages Users, posts, comments. It is unique because of its reusability. It can be integrated to mobile frontend and web 
                  to perform required function.
                </p>
              </div>  
            </div>  
          </div>
        </div>        
            //  <Link to ="about" className="btn btn-primary btn-lg"> Go to about
            //  </Link>        
        );
    }
}
export default ProductsPage;

