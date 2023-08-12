import React from 'react';

const ChildComponent = ({ greeting, user }) => {
    return (
        <div>
            <p>{greeting}, {user.name}!</p>
            <p>Age: {user.age}</p>
        </div>
    );
};

export default ChildComponent;
