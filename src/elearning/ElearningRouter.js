import Blog from "./Blog";
import ElearningLayout from "./ElearningLayout";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Courses from "./Courses";
import Home from "./Home";
import Webinars from "./Webinars";
import NoPage from "../child/NoPage";
import ElearningDashboard from "./ElearningDashboard";

const ElearningRouter = () => {

    const courses = [
        { name: "Java", id: 1, desc: "This is Java", durationInMonths: 3 },
        { name: "ReactJS", id: 2, desc: "This is ReactJS", durationInMonths: 1 }
    ]
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ElearningLayout />}>
                    <Route path="/" element={<ElearningDashboard />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/courses" element={<Courses courses={courses} />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default ElearningRouter;
