import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare  } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare  } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import './css/about.css';

export class AboutPage extends Component {
    render() {
        return (
            <section>
                <section className="card">                
                    <img className="card-image" alt="GMihalkow" src={require('./img/me.jpg')} />
                    <section className="card-body">
                        <header>
                            <h2>I'm Georgi Mihalkov</h2>
                            <p>Junior Full Stack Developer</p>
                            <hr />
                        </header>
                        <section>
                            <ul className="about-content">
                                <li><strong>Age:</strong><span>21</span></li>
                                <li><strong>Email:</strong><span>test@email.com</span></li>
                                <li><strong>Phone:</strong><span>0894321322</span></li>
                                <li><strong>Country:</strong><span>Bulgaria</span></li>
                            </ul>
                        </section>
                    </section>
                    <footer>
                        <div>
                            <FontAwesomeIcon className="growing-icon" icon={faGithubSquare} size="3x" />
                        </div>
                        <div>
                            <FontAwesomeIcon className="growing-icon" icon={faLinkedin} size="3x" />
                        </div>
                        <div>
                            <FontAwesomeIcon className="growing-icon" icon={faFacebookSquare} size="3x" />
                        </div>
                    </footer>
                </section>
                <p className="about-info">  
                    <em>
                    Discovered my passion for programming in March 2017. Always looking for new opportunities. Skilled in .NET, JavaScript, React and SQL. Good team player. 
                    </em>
                </p>
            </section>
        )
    }
}

export default AboutPage;