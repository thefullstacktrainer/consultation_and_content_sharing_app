import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsultationListRouting from './routing/ConsultationListRouting';
import ConsultationDetails from './routing/ConsultationDetails';
import NewContentSharing from './routing/NewContentSharing';
function Main() {
    return (
        <Router>
            <div>
                <h1>Online Consultation Platform</h1>
                <Switch>
                    <Route path="/" exact component={ConsultationListRouting} />
                    <Route path="/consultations/:consultationId" component={ConsultationDetails} />
                    <Route path="/content-sharing" component={NewContentSharing} />
                </Switch>

            </div>
        </Router>
    );
}

export default Main;
