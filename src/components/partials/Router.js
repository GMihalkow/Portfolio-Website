import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';

export class Router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/skills" component={SkillsPage} />
            </div>
        )
    }
}

export default Router;