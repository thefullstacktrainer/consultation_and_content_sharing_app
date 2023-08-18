import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import ProfileSettings from './ProfileSettings'; // Create this component

function Profile() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Profile</h2>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/settings`}>Settings</Link>
                    </li>
                </ul>
            </nav>
            <Route path={`${path}/settings`} component={ProfileSettings} />
        </div>
    );
}

export default Profile;
