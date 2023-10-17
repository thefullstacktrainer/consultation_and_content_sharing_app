import React, { useState } from 'react';

const Content = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <p>Content for logged-in users</p> : <p>Login to see content</p>}
        </div>
    );
};

export default Content;