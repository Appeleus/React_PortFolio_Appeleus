import * as React from 'react';
import { BrowserRouter, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Navbar from './navbar';
import AppRoutes  from './AppRoutes';
import PageTransition from './page-transition';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <PageTransition />
              <Navbar />
              <AppRoutes />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );

};


