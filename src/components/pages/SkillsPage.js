import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare  } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare  } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import './css/about.css';
import './css/skills.css';

export class SkillsPage extends Component {
    render() {

        return (
            <section>
                <section className="card">    
                    <header>
                        <h2>Proffesional Skills</h2>
                    </header>       
                    <section className="skills-body">
                        <div className="left-skill-part">
                            <h3>C#</h3>
                            <h3>ASP.NET Core</h3>
                            <h3>Entity Framework Core</h3>
                            <h3>SQL &amp; T-SQL</h3>
                            <h3>OOP Concepts</h3>
                            <h3>Unit Testing</h3>
                            <h3>Relational DBs</h3>
                        </div>
                        <div className="right-skill-part">
                            <h3>GIT</h3>
                            <h3>JavaScript</h3>
                            <h3>HTML 5 &amp; CSS 3</h3>
                            <h3>JQuery</h3>
                            <h3>React &amp; Redux</h3>
                            <h3>NO SQL</h3>
                            <h3>Mongo DB</h3>
                        </div>
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
            </section>
        )
    }
}

export default SkillsPage;