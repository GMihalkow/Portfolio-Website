import React, { Component } from 'react';
import './css/navigation.css';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/certificates">Certificates</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;