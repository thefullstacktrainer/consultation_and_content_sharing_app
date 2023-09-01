import React, { useState } from 'react'
import UseEffectExample from './UseEffectExample'

function TestUseEffect() {
    const [render, setRender] = useState(0);
    const interval = setInterval(() => {
        console.log('Interval tick');
        setRender(render => render + 1)
    }, 5000);
    return (
        <div>TestUseEffect
            {render % 2 == 0 ? <UseEffectExample /> : <div>This is test</div>}
        </div>
    )
}

export default TestUseEffect