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
                    <Link to ="products" className="btn btn-primary btn-lg"> VIEW MY PRODUCTS
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
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-6">
                            <h4> Here is the fun fact about Me</h4>
                            <p>Software Developer with MSc in Computer Science and MSc Information Technology. 
                                I believe strongly in the quote "if you want to shine like the sun you must burn like the sun".
                                I believe in hard work and I don't give up on learning. I have done research on Machine learning 
                                and Natural Language processing in the past and I aspire to establish standard products in this fields.I am passionate about Software development and Data science.
                            </p>
                            <p>
                                In love teaching, I like to impact people around me with knowledge I have acquired, I feel satisfied with that. When I am not coding 
                                I like to travel and watch movies. One thing I hate most is "Lies". 
                            </p>     
                            <p>
                                In the nearest future, my aim is to make impact in the lives of people and "Data is one of the most important element I need to use". 
                                I am building substantive expertise in Data Science  and Software development to achieve my dreams."
                            </p>     
                        </div>  
                        <div className = "col-md-6">
                            <img src="/public/imisi-teen.jpg" alt="" className ="img-responsive"/>
                        </div>  
                    </div>  
                </div>
                <div id = "services" className="services">
           <div className="jumbotron">
             <h2>Services</h2>
             <p>What I can offer</p>
             <div className="row">
                <div className="col-lg-3 col-md-3">
                    <i className="fa fa-desktop" aria-hidden="true"></i>  
                    <h4>WEB DEVELOPMENT</h4>
                    <p> Building fascinating websites that is responsive and user friendly </p>  
                </div> 
                <div className="col-lg-3 col-md-3">
                    <i className="fa fa-mobile" aria-hidden="true"></i>  
                    <h4>MOBILE DEVELOPMENT
                    </h4>
                    <p> Building fascinating cross-platform mobile application with React Native </p>  
                </div> 
                <div className="col-lg-3 col-md-3">
                    <i className="fa fa-database" aria-hidden="true"></i>  
                    <h4>DATABASE</h4>
                    <p> Design database of any type using Microsoft SQL, PostGre SQL, and firebase </p>  
                </div> 
                <div className="col-lg-3 col-md-3">
                    <i className="fa fa-university" aria-hidden="true"></i>  
                    <h4>CONSULTING</h4>
                    <p> Do you need help? Are you confused about web frameworks to use? Do you need orientation on software development?  </p>  
                </div>
              </div>  
            </div> 
          </div>
        </div> 
        );
    }
}
export default HomePage;