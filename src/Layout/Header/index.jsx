import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Index() {
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState('/')
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? "#6366f1" : "black",
            borderBottom: isActive ? "3px solid #6366f1" : null,
        };
    };
    const links = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/services' },
        { name: 'Showcase', link: '/showcase' },
        { name: 'About', link: '/about' },
        // { name: 'Contact us', link: '/contact' },
    ]
    return (
        <div className="z-50">
            <div className='max-w-7xl mx-auto px-3 flex justify-between'>
                <div className="flex items-center my-5 md:my-auto cursor-pointer">
                    {/* <p className="font-bold text-2xl">Logo</p> */}
                    {/* <img src="/assets/ui_logo.svg" className='h-10 w-10' alt="logo" /> */}
                    <p className="text-xl font-bold">Logo</p>
                </div>
                <div className="h-[56px] w-16 absolute top-2 right-5 flex flex-col justify-around items-center rounded-lg cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
                    <div className={`w-12 h-2 rounded-2xl bg-black transition-all duration-500 ease-in ${open ? 'rotate-45 mt-7 mb-5' : ''}`}></div>
                    <div className={`w-12 h-2 rounded-2xl bg-black transition-all duration-500 ease-in ${open ? 'hidden mb-5' : ''}`}></div>
                    <div className={`w-12 h-2 rounded-2xl bg-black transition-all duration-500 ease-in ${open ? '-rotate-45 -mt-7 mb-5' : ''}`}></div>
                </div>
                <ul className={`flex flex-col md:flex-row items-start md:items-center justify-center absolute left-0 md:static w-full md:w-auto transition-all duration-500 ease-in ${open ? 'opacity-100 top-[73px] bg-indigo-500 text-white' : 'opacity-0 md:opacity-100 top-[-500px] z-[-1]'} z-[-1] md:z-auto`}>
                    {links.map((item, index) => (
                        <NavLink to={item.link} key={index}
                            className={`px-3 text-md font-semibold py-3 md:my-0 cursor-pointer uppercase text-[#1a1937] hover:text-[rgba(26,25,55,0.8)]`}
                            // style={navLinkStyles}
                            onClick={() => setActiveId(item.link)}
                        >{item.name}</NavLink>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Index