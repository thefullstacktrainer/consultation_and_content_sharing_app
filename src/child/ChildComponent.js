import { useState } from "react";

const ChildComponent = (props) => {
    const [compName, setCompName] = useState('Init Value')
    const handleLike = () => {
        setCompName(props.content2);
    };
    return (
        <div>{compName} <button onClick={handleLike}> Click</button></div>
    )
}

export default ChildComponent;