import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Carousel = () => {
  return (
    <carousel>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
            <div className="item active">
                <img src="snow.png" alt="Los Angeles"/>
            </div> 
            <div className="item">
                <img src="red.png" alt="Los Angeles"/>
            </div> 
            <div className="item">
                <img src="mountains.png" alt="Los Angeles"/>
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

    </carousel>    
);
};

export default Carousel;
