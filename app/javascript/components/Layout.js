import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
      <>
        <h1>Navbar goes here</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink style={{marginLeft: "20px"}} to="/greeting">Random Greeting</NavLink>
        <Outlet />
      </>
    );
}

export default Layout;