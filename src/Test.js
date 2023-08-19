import React, { useState } from 'react';
import ChildComponent from './child/ChildComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './child/Home';
import Blogs from './child/Blogs';
import Contact from './child/Contact';
import NoPage from './child/NoPage';
import Layout from './child/Layout';
const Test = () => {

    const [defaultName, setDefaultName] = useState("Default")

    const prop1 = "Hey Prop1";
    let counter = 10;
    const updateCounter = () => {
        console.log(counter)
        counter++;
        setDefaultName("Raju")
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

}

export default Test;