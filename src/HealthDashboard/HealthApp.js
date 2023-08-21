// App.js
import React from 'react';
import AppRouter from './AppRouter';

function HealthApp() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Health & Fitness Tracker</h1>
            </header>
            <main>
                <AppRouter />
            </main>
        </div>
    );
}

export default HealthApp;
