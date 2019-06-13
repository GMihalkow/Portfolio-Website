import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare  } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare  } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';

export class SocialMediaButtons extends Component {

    redirectToMedia(link){
        window.location.href = link;
    }

    render() {
        return (
            <footer id="social-buttons">
                <div>
                    <FontAwesomeIcon onClick={this.redirectToMedia.bind(this, "https://www.github.com/GMihalkow")} className="growing-icon" icon={faGithubSquare} size="3x" />
                </div>
                <div>
                    <FontAwesomeIcon onClick={this.redirectToMedia.bind(this, "https://www.linkedin.com/in/georgi-mihalkov-592955158/")} className="growing-icon" icon={faLinkedin} size="3x" />
                </div>
                <div>
                    <FontAwesomeIcon onClick={this.redirectToMedia.bind(this, "https://www.facebook.com/profile.php?id=100009654850759")} className="growing-icon" icon={faFacebookSquare} size="3x" />
                </div>
            </footer>
        )
    }
}

export default SocialMediaButtons;