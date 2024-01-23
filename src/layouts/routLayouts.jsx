import React, { useEffect, useState } from 'react'

// recat-router-dom
import { Outlet } from 'react-router-dom'
//  Components

// styles
import './style.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/loader';
const RoutLayouts = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <div>
            {loading ? (
                <div className='bg-[#282828] z-[10000] h-[100vh]'>
                    <p><Loader/></p>
                </div>
            ) : (
                <>
                    <div>
                        < Header />
                        <main>
                            <Outlet />
                        </main>
                        <Footer />
                    </div>
                </>
            )}
        </div>

    )
}

export default RoutLayouts