import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { MyContextProvider } from './context.js';
import Navbar from './navbar';
import CardBox from './CardBox.js';
import Home from './home';
import PastProject from './past-project.js';


export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};


