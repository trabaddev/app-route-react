
import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const RootLayout = () => {
    return (
    <div>
      <h1>Mon site</h1>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link> | <Link to="/auth/login">Login</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
    );
};

export default RootLayout;