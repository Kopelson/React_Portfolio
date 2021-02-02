import React from "react";
import gifYourMood from "../images/groupProject.jpg";
import bearShare from "../images/bearshare.png";
import apiQuiz from "../images/apiQuiz.PNG";
import eatABurger from "../images/eat-a-burger.png";
import employeeTracker from "../images/employeeTrackerCMS.PNG";
import horiseon from "../images/horiseon.png";
import htmlTemplateEngine from "../images/html-template-engine.png";
import momentDayScheduler from "../images/momentDayScheduler.PNG";
import nodeReadmeGenerator from "../images/nodeReadmeGenerator.PNG";
import noteTakerExpress from "../images/noteTakerExpress.png";
import passwordGenerator from "../images/passwordGenerator.png";
import weatherApp from "../images/weatherApp.png";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "./Portfolio.css";


function Portfolio(){      

    return(
        <article className="row page tab-pane fade show mx-auto mb-5">
            <div className="col-lg-6 mx-auto text-center">
                <h2>Portfolio</h2>
                <p>Choose a type of project you would like to explore.</p> 
                <Tabs className="myClass" defaultActiveKey="frontEnd">
                <Tab eventKey="frontEnd" title="Front-end">
                <section>
                        <div className="row">
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">Ajax Weather App</h5>
                                    <p className="card-text">This weather app focuses on using API's to retrieve weather data for cities across the United States.</p>
                                    <img src={weatherApp} className="card-img mb-3" alt="weather application"/>
                                    <a href="https://github.com/Kopelson/ajaxWeatherApp" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://kopelson.github.io/ajaxWeatherApp/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">JavaScript Password Generator</h5>
                                    <p className="card-text">This application generates a random password based on user-selected criteria.</p>
                                    <img src={passwordGenerator} className="card-img mb-3" alt="password generator application"/>
                                    <a href="https://github.com/Kopelson/javascriptPasswordGenerator" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://kopelson.github.io/javascriptPasswordGenerator/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">Moment.js Daily Scheduler</h5>
                                    <p className="card-text">This app features a dynamically updated HTML and CSS powered by JQuery and uses Moment.js library to work with date and time within the application.</p>
                                    <img src={momentDayScheduler} className="card-img mb-3" alt="Moment Day Scheduler application"/>
                                    <a href="https://github.com/Kopelson/momentJSDailyScheduler" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://kopelson.github.io/momentJSDailyScheduler/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">API Code Quiz Challenge</h5>
                                    <p className="card-text">This app is a lightweight timed coding quiz with multiple-choice questions. By using DOM manipulation, JavaScript, Bootstrap, and the web browsers API local storage this app can challenge users to their knowledge of JavaScript.</p>
                                    <img src={apiQuiz} className="card-img mb-3" alt="Code Quiz application"/>
                                    <a href="https://github.com/Kopelson/APICodeQuizChallenge" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://kopelson.github.io/APICodeQuizChallenge/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">Horiseon - The Search Engine Optimization Project</h5>
                                    <p className="card-text">Horiseon is an artificial marketing agency that wants their code base to follow accessibility standards so that their own site is optimized for search engines.</p>
                                    <img src={horiseon} className="card-img mb-3" alt="Horiseon project"/>
                                    <a href="https://github.com/Kopelson/Horiseon" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://kopelson.github.io/Horiseon/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </Tab>
                <Tab eventKey="BackEnd" title="Back-end">
                <section>
                        <div className="row">
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">MVC Handlebar Burger Joint</h5>
                                    <p className="card-text">This app is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM.</p>
                                    <img src={eatABurger} className="card-img mb-3" alt="MVC Handlebar Burger application"/>
                                    <a href="https://github.com/Kopelson/MVC_Handlebar_Burger_Joint" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://rocky-sierra-82131.herokuapp.com/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">HTML-Template-Engine</h5>
                                    <p className="card-text">Built a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.</p>
                                    <img src={htmlTemplateEngine}className="card-img mb-3" alt="HTML Template Engine"/>
                                    <a href="https://github.com/Kopelson/HTML-Template-Engine" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">Employee Tracker CMS</h5>
                                    <p className="card-text">This project involved architecting and building a solution for managing a company's employees using node, inquirer, and MySQL.</p>
                                    <img src={employeeTracker} className="card-img mb-3" alt="employee tracker cms app"/>
                                    <a href="https://github.com/Kopelson/employeeTrackerCMS" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://www.youtube.com/watch?v=I9s21EbcL1Y" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Demonstration</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">Note Taker Express</h5>
                                    <p className="card-text">This application uses an Express backend to write, save, and delete notes.</p>
                                    <img src={noteTakerExpress} className="card-img mb-3" alt="note taker Express app"/>
                                    <a href="https://github.com/Kopelson/noteTakerExpress" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://sleepy-ocean-58474.herokuapp.com/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                <div className="card-body">
                                    <h5 className="card-title">Node README Generator</h5>
                                    <p className="card-text">This is a terminal based application to produce professional looking README md files.</p>
                                    <img src={nodeReadmeGenerator} className="card-img mb-3" alt="Node ReadMe Generator"/>
                                    <a href="https://github.com/Kopelson/nodeREADMEGenerator" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://www.youtube.com/watch?v=24iaJGACyec" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Demonstration</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </Tab>
                <Tab eventKey="Collaboration" title="Collaboration">
                <section>
                        <div className="row">
                           
                            <div className="col-lg-6 card">
                                
                                <div className="card-body">
                                    <h5 className="card-title">Gif Your Mood</h5>
                                    <p className="card-text">This is a purely fun application that tries to find a gif that matches the user's current mood.</p>
                                    <img src={gifYourMood} className="card-img mb-3" alt="Gif Your Mood application"/>
                                    <a href="https://github.com/Kopelson/gifYourMood" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://kopelson.github.io/gifYourMood/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 card">
                                
                                <div className="card-body">
                                    <h5 className="card-title">Bear Share</h5>
                                    <p className="card-text">A plushie buy and sell listing platform for build-a-bear enthusiasts.</p>
                                    <img src={bearShare} className="card-img mb-3" alt="Bear Share application"/>
                                    <a href="https://github.com/jre23/bear-share" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
                                    <a href="https://nameless-plains-06669.herokuapp.com/" target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end">Deployed Project</a>
                                
                                </div>
                            </div>
                        </div>
                    </section>
                </Tab>
                </Tabs>
            </div>
        </article>
    );
}

export default Portfolio;