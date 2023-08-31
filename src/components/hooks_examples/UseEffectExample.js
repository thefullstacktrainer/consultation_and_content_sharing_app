import React, { useEffect } from 'react';

function UseEffectExample() {

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
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('Component unmounted');
        };
    }, []);

    return (
        <>
            <div>UseEffectExample</div>
        </>
    )
}

export default UseEffectExample;