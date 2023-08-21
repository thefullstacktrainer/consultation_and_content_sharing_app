// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Workouts from './Workouts';
import { BrowserRouter } from 'react-router-dom';
import NoPage from '../child/NoPage';
import WorkoutLayout from './WorkoutLayout';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WorkoutLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="workouts" element={<Workouts />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
