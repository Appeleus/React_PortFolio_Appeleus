import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { MyContextProvider } from './context.js';
import Navbar from './navbar';
import CardBox from './CardBox.js';
import Home from './home';
import AcademicProject from './academic-project';
import Animation from './animation'
import PageTransition from './page-transition';


export default function App() {

  return (
    <BrowserRouter>
      <PageTransition>
        <Navbar />
      </PageTransition>
    </BrowserRouter>
  );

};


