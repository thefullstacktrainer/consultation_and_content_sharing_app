import React from "react";
import Courses from "./Courses";
import Home from "./Home";
import Webinars from "./Webinars";
import Blog from "./Blog";
import ElearningRouter from "./ElearningRouter";

const MainElearning = () => {

    const heading = "MainElearning component"
    return <>
        <div>{heading}</div>
        {/* <Home />
        <Courses courses={courses} />
        <Webinars />
        <Blog /> */}
        <main>
            <ElearningRouter />
        </main>
    </>
}

export default MainElearning;