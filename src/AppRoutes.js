import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Project from './academic-project';
import Animation from './animation';
import PageTransition from './page-transition';
import Illustration from './illustration';
import Resume from './resume';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/Project" element={<PageTransition><Project /></PageTransition>} />
            <Route path="/animation" element={<PageTransition><Animation /></PageTransition>} />
            <Route path="/illustration" element={<PageTransition><Illustration /></PageTransition>} />
            <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
            {/* <Route path="/instrument" element={<PageTransition><Home /></PageTransition>} /> */}
        </Routes>
    )
}

export default AppRoutes;