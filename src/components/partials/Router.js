import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';
import ContactsPage from '../pages/ContactsPage';

export class Router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/skills" component={SkillsPage} />
                <Route exact path="/contact" component={ContactsPage} />
            </div>
        )
    }
}

export default Router;