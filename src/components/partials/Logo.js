import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export class Logo extends Component {
    render() {
        return (
            <div className="p-1rem">
                <FontAwesomeIcon icon={faCode} size={"lg"}/>
            </div>
        )
    }
}

export default Logo;