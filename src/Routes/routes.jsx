import React from 'react';

// react-router-dom
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from 'react-router-dom'
// layouts
import RootLayout from '../layouts/routLayouts'
import Home from '../views/Home';
import Gallery from '../views/Gallery';
import Second from '../views/Second';
import Third from '../views/Third';
import Contact from '../views/Contact';
import About from '../views/About';
// views

const Routes = () => {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<RootLayout />}>
                <Route index path='/' element={<Home />} />
                <Route index path='/first' element={<Gallery/>} />
                <Route index path='/second' element={<Second />} />
                <Route index path='/third' element={<Third />} />
                <Route index path='/about' element={<About />} />
                <Route index path='/contact' element={<Contact />} />
            </Route>)
    );
    return <RouterProvider router={routes} />
}

export default Routes