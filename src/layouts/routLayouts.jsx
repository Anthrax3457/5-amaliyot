import React from 'react'

// recat-router-dom
import { Outlet } from 'react-router-dom'
//  Components

// styles
import './style.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
const RoutLayouts = () => {
    return (
        <>
            <div>
                < Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default RoutLayouts