import React from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <div className="max-w-7xl mx-auto px-3 py-20 flex flex-col gap-5">
                <div className="flex justify-center items-center">
                    <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" className='w-full md:w-8/12' alt="" />
                </div>
                <p className="text-4xl text-gray-600 font-semibold text-center">2022 Best Android App Design Award</p>
                <div className="flex flex-wrap gap-2 py-2">
                    <p className='bg-sky-100 text-sky-600 font-semibold rounded-full px-3 py-1'>Award</p>
                    <p className='bg-sky-100 text-sky-600 font-semibold rounded-full px-3 py-1'>Ux</p>
                </div>
                <p>RVA 311, awarded one of The Best Android App Designs by DesignRush, is the fruit of ClearSummit's partnership with AvePoint Public Sector to relaunch the City of Richmond's city services mobile app.</p>

                <p>ClearSummit worked with AvePoint in managing the redesign and rebuilding of the public and internal web portals of what used to be an out-of-date mobile application. They leveraged usability testing sessions to refine the UX and make sure users were able to complete the tasks available on the app. ClearSummit built the app in React Native, and incorporated features including account creation, push notifications, geolocation, and third-party login.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, a? Consequuntur pariatur aspernatur, corporis voluptas consectetur laboriosam porro fuga error. Nostrum dicta quod numquam ducimus fugit! Sapiente inventore et quod eligendi temporibus. Eveniet cumque impedit similique quia atque nesciunt molestiae excepturi, officiis repudiandae commodi ea saepe sint necessitatibus quam placeat. Excepturi nemo molestias error similique maxime eius cumque illo pariatur eligendi iste placeat, porro nihil vitae neque distinctio optio sequi. Accusantium vero at cupiditate ducimus alias et accusamus dolores laudantium sed. Nesciunt dolore cupiditate ipsa tempora, dignissimos ex eos alias omnis ipsum unde. Explicabo fugiat ipsa magnam eaque rerum pariatur amet minima cumque ut harum animi reiciendis dignissimos necessitatibus quos earum aperiam, dicta beatae optio officiis odit reprehenderit, est tenetur. Mollitia sint praesentium voluptatem in voluptates iure quod unde obcaecati culpa quis harum nisi, quam nulla beatae iste perspiciatis laborum, natus cumque nemo laboriosam molestiae recusandae cum. Maxime, consectetur necessitatibus!</p>

            </div>
        </div>
    )
}

export default BlogDetails