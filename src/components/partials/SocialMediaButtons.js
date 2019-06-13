import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare  } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare  } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';

export class SocialMediaButtons extends Component {
    render() {
        return (
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
        )
    }
}

export default SocialMediaButtons;