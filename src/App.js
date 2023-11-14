import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink, useLocation  } from 'react-router-dom';
import { MyContextProvider } from './context.js';
import Navbar from './navbar';
import CardBox from './CardBox.js';
import Home from './home';
import AcademicProject from './academic-project';
import Animation from './animation'


export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/academicProject" element={<AcademicProject />} />
        <Route path="/animation" element={<Animation />} />
        {/* Add routes for other pages */}
      </Routes>
    </BrowserRouter>
  );

};


