import React, { useState, useEffect } from "react";


const Course = ({ id, name, desc, durationInMonths, cb }) => {

    let [likes, setLikes] = useState(0);

    const incrLikes = () => {
        setLikes(likes + 1);
    }
    useEffect(() => {
        cb();
    }, [likes]);

    const shoot = (a, b) => {

        console.log(b);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
    }
    return <>
        <br></br>
        Course Details
        <div>Name : {name}</div>
        <div>Description {desc}</div>
        <div>Duration in Months :{durationInMonths}</div>
        <div>Likes : {likes}</div>
        <button onClick={incrLikes}>Like</button>
        <br></br>
        <button onClick={shoot}>Take the shot!</button>
    </>
}

export default Course;