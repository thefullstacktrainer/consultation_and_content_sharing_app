import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsultationListRouting from './ConsultationListRouting';

function Routing() {
    return (
        <Router>
            <div>
                <h1>Online Consultation Platform</h1>
                <Switch>
                    <Route path="/" exact component={ConsultationListRouting} />
                </Switch>
            </div>
        </Router>
    );
}

export default Routing;
