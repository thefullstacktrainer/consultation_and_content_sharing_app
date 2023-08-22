import React, { useState } from "react";
import Course from "./Course";

const Courses = ({ courses }) => {
    const [totalLikes, setTotalLikes] = useState(0);

    return <>
        <div>Courses component</div>
        <div>
            {courses.map(course => <Course key={course.id} {...course} cb={() => console.log("callback invoked")} />)}

        </div>

    </>
}

export default Courses;