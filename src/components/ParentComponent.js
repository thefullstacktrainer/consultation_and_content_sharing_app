import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const greeting = 'Hello';
    const user = { name: 'Rajesh', age: 25 };

    return <ChildComponent greeting={greeting} user={user} />;
};

export default ParentComponent;
