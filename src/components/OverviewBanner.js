import React from 'react';
import { useState } from 'react'
function OverviewBanner() {
    const [banner, updateBanner] = useState("")


    return (
        <div className="overview-banner">
            <h1>Welcome to Our Job Board</h1>
            <p>Find the perfect job opportunity for you!</p>
        </div>
    );
}

export default OverviewBanner;