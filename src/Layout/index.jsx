import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Showcase from '../Pages/Showcase';
import { Route, Routes } from 'react-router-dom';

function Index() {
    return (
        <div className='min-h-screen flex flex-col justify-between text-gray-700'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/showcase" element={<Showcase />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Index