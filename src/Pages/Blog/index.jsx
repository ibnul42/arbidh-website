import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
    {
        title: '2022 Best Android App Design Award',
        imgLink: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        author: 'Shawn Mendis',
        desc: 'ClearSummit worked with AvePoint in managing the redesign and rebuilding of the public and internal web portals of what used to be an out-of-date mobile application. They leveraged usability testing sessions to refine the UX and make sure users were able to complete the tasks available on the app. ClearSummit built the app in React Native, and incorporated features including account creation, push notifications, geolocation, and third-party login.',
        categories: ['UX', 'Award'],
    },
    {
        title: 'Best Android App Design Award',
        imgLink: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        author: 'Shawn Mendis',
        desc: 'ClearSummit worked with AvePoint in managing the redesign and rebuilding of the public and internal web portals of what used to be an out-of-date mobile application. They leveraged usability testing sessions to refine the UX and make sure users were able to complete the tasks available on the app. ClearSummit built the app in React Native, and incorporated features including account creation, push notifications, geolocation, and third-party login.',
        categories: ['UX', 'Award'],
    },
    {
        title: 'Best Android App Design Award',
        imgLink: 'https://images.unsplash.com/photo-1595013694368-aab1b4f70dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        author: 'Shawn Mendis',
        desc: 'ClearSummit worked with AvePoint in managing the redesign and rebuilding of the public and internal web portals of what used to be an out-of-date mobile application. They leveraged usability testing sessions to refine the UX and make sure users were able to complete the tasks available on the app. ClearSummit built the app in React Native, and incorporated features including account creation, push notifications, geolocation, and third-party login.',
        categories: ['UX', 'UI'],
    },
    {
        title: 'Best Android App Design Award',
        imgLink: 'https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        author: 'Shawn Mendis',
        desc: 'ClearSummit worked with AvePoint in managing the redesign and rebuilding of the public and internal web portals of what used to be an out-of-date mobile application. They leveraged usability testing sessions to refine the UX and make sure users were able to complete the tasks available on the app. ClearSummit built the app in React Native, and incorporated features including account creation, push notifications, geolocation, and third-party login.',
        categories: ['UX', 'UI'],
    },
    {
        title: 'Best Android App Design Award',
        imgLink: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        author: 'Shawn Mendis',
        desc: 'ClearSummit worked with AvePoint in managing the redesign and rebuilding of the public and internal web portals of what used to be an out-of-date mobile application. They leveraged usability testing sessions to refine the UX and make sure users were able to complete the tasks available on the app. ClearSummit built the app in React Native, and incorporated features including account creation, push notifications, geolocation, and third-party login.',
        categories: ['UX', 'UI'],
    }
]

function Blog() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {blogs.map((blog, index) => (
                    <Link to={`${blog.title}`} key={index} className="col-span-1 flex flex-col gap-2 border rounded-t-md shadow-sm hover:shadow-lg">
                        <div className="overflow-hidden rounded-md">
                            <img src={blog.imgLink} className='w-full h-48 object-cover hover:scale-105' alt={blog.title} />
                        </div>
                        <div className="px-4 flex flex-col gap-3">
                            <p className="text-gray-400">by {blog.author}</p>
                            <p className="font-semibold">{blog.title}</p>
                            <p className="h-[66px] overflow-hidden after:content-['...']">{blog.desc}</p>
                            <div className="flex flex-wrap gap-2 py-2">
                                {blog.categories.map((item, index) => (
                                    <p key={index} className='bg-sky-100 text-sky-600 font-semibold rounded-full px-3 py-1'>{item}</p>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog