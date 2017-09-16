import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
          <div className = "myHome">  
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
                    <Link to ="products" className="btn btn-primary btn-lg"> check Products
                    </Link>
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
                <div className = "container text-center">
                    <h2>Interests</h2>
                    <div className="row">
                        <div className="col-sm-4">
                        <img src = "/public/webdevelopment.jpeg" alt="web development" id ="icon"/>
                        <h4>Web development</h4>
                        </div>  
                        <div className="col-sm-4">
                        <img src = "/public/nlp.jpg" alt="Natural Language" id ="icon"/>
                        <h4>Natural Language processing</h4>
                        </div>
                        <div className="col-sm-4">
                        <img src = "/public/data-science.jpg" alt="data science"id ="icon"/>
                        <h4>Data Science</h4>
                        </div>  
                    </div>
                </div> 
           </div> 
        );
    }
}

export default HomePage;