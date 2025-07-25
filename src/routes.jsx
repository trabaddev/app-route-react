

import { createBrowserRouter, useLoaderData } from 'react-router-dom';

import React, { Component } from 'react';
import Root from './layouts/Root';
import Homme from './pages/Homme';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Erreur from './pages/Erreur';

export const router = createBrowserRouter([
    {
        path: '/',
        // errorElement: <ErrorPage /> ,        
        Component: Root,
        children: [
            {index: true, Component: Homme},
            {path: 'about', Component: About},
            {path: 'contact', Component: Contact},
            {path: '*', Component: Erreur},
        ]
    }
])

