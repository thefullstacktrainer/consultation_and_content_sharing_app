import React, { useState } from "react";


const Course = ({ id, name, desc, durationInMonths }) => {

    let [likes, setLikes] = useState(0);

    const incrLikes = () => setLikes(likes + 1)
    return <>
        <br></br>
        Course Details
        <div>Name : {name}</div>
        <div>Description {desc}</div>
        <div>Duration in Months :{durationInMonths}</div>
        <div>Likes : {likes}</div>
        <button onClick={incrLikes}>Like</button>
        <br></br>
    </>
}

export default Course;