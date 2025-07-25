import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Root = () => {
    

  return (
    <div>
      <nav className="bg-slate-400 w-full flex items-center">
        <ul className="flex gap-4 p-6">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
      <div className="container pt-10">

      <Outlet  />
      </div>
    </div>
  );
};

export default Root;
