import React, { useEffect, useState } from 'react';

function UseEffectExample() {

    useEffect(() => {
        console.log('Component without dependency');
    });

    useEffect(() => {
        console.log('Component mounted');
    }, []);

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count updated:', count);
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Interval tick');
            setCount(count => count + 1)
        }, 10000);

        return () => {
            clearInterval(interval);
            console.log('Component unmounted');
        };
    }, []);

    return (
        <>
            <div>UseEffectExample</div>
            {count}
        </>
    )
}

export default UseEffectExample;