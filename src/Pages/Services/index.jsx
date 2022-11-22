import React from 'react';

const services = [
    {
        title: 'Research Journey',
        imgLink: '/images/icons/product.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo placeat in ab earum. Officia molestias adipisci perspiciatis aspernatur minima incidunt laboriosam architecto est quibusdam ea. In ipsa autem mollitia.',
        itemList: ["Research other competitors in the same market", "Initial consultation ", "Do complete market research for your idea", "Help in creating a rough draft and Wireframes", "Premarket"]
    },
    {
        title: 'Design Journey',
        imgLink: '/images/icons/scale.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo placeat in ab earum. Officia molestias adipisci perspiciatis aspernatur minima incidunt laboriosam architecto est quibusdam ea. In ipsa autem mollitia.',
        itemList: ["Full UI Design", "Full UX Design", "Add Fluid animation and fluid user flow", "Figma design / presentation for UI"]
    },
    {
        title: 'Development Journey',
        imgLink: '/images/icons/design.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo placeat in ab earum. Officia molestias adipisci perspiciatis aspernatur minima incidunt laboriosam architecto est quibusdam ea. In ipsa autem mollitia.',
        itemList: ["Develop FrontEnd UI Design", "Develop BackEnd Connectivity", "Develop additional Tech ( ML, AR)", "User latest Software", "Databases( AWS, FirebaseFireStore, FireBaseDatabase, Redshift, SQL, GraphQL)", "Backend Languages(PHP, ReactJS, JS, HTML)", "IOS App build using Flutter/ ReactNative/Swift/SwiftUI/Objc", "REST API implementation", "Add Machine learning models supported"]
    },
    {
        title: 'Testing Journey',
        imgLink: '/images/icons/development.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo placeat in ab earum. Officia molestias adipisci perspiciatis aspernatur minima incidunt laboriosam architecto est quibusdam ea. In ipsa autem mollitia.',
        itemList: ["Write UI/Unit Tests to test functionality", "Full UI/Front End/User Experience/Funcitonal Test/IntegrationTest using Manual Testing"]
    },
    {
        title: 'Deliver Journey',
        imgLink: '/images/icons/transformation.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo placeat in ab earum. Officia molestias adipisci perspiciatis aspernatur minima incidunt laboriosam architecto est quibusdam ea. In ipsa autem mollitia.',
        itemList: ["Demo app", "Answer questions", "Debug ", "Continue support for 6 months"]
    }
]

const practises = [
    {
        title: 'Strategy',
        imgLink: '/images/icons/strategy.svg',
        services: ["product ownership", "project management", 'lean product', 'development']
    },
    {
        title: 'technology',
        imgLink: '/images/icons/technology.svg',
        services: ['software', 'development', 'web development', 'mobile development', 'platform', 'devOps']
    },
    {
        title: 'design',
        imgLink: '/images/icons/design_practice.svg',
        services: ['product descovery', 'UI/UX design']
    },
    {
        title: 'coaching',
        imgLink: '/images/icons/coaching.svg',
        services: ['technological', 'coaching', 'methodology', 'agile adoption']
    },
    {
        title: 'delivery',
        imgLink: '/images/icons/delivery.svg',
        services: ['automated testing', 'continuous delivery']
    }
]

function Index() {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-3">
                {/* introduce */}
                <div className="flex flex-col items-center text-center gap-4 mx-0 md:mx-20 lg:mx-40 my-5">
                    <p className="uppercase tracking-wide text-[#878684]">Our Services</p>
                    <h1 className="capitalize text-4xl font-bold">Enter you App Journey</h1>
                    <div className="flex flex-col gap-1">
                        <p>We are unlike any other consulting company because we keep you updated during your app journey. We work with your budget, needs, and requirements. We never leave you high and dry. We always use the latest and greatest technology. We can also integrate AR, Machine Learning, and Crypto.</p>
                    </div>
                </div>

                {/* services */}
                <div className="flex flex-col items-center text-center gap-2 mx-0 md:mx-20 lg:mx-40 my-5">
                    <p className="uppercase tracking-wide text-[#878684]">This is what we do</p>
                    <h1 className="capitalize text-4xl font-bold">Our services</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 my-3">
                        {services && services.map((item, index) => (
                            <div key={index} className="col-span-1 flex flex-col gap-2 hover:border border-gray-100 hover:scale-[1.02] rounded-md px-4 py-6 hover:shadow-xl font-bold cursor-pointer transition-all delay-75">
                                {/* <img src={item.imgLink} className="h-7 w-7 fill-orange-500 text-indigo-200" alt="" /> */}
                                <p className='capitalize self-start w-full text-center text-lg'>{item.title}</p>
                                {/* <p className='selt-start text-start text-gray-400 font-medium'>{item.desc}</p> */}
                                <ul className="list-item">
                                    {item.itemList.map((list, index) => (
                                        <li className="list-disc text-left font-normal ml-2 capitalize">{list}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* expertise */}
                {/* <div className="flex flex-col items-center text-center gap-4 mx-0 md:mx-20 lg:mx-40 my-5">
                    <h1 className="capitalize text-4xl font-bold my-3">Our practices</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {practises && practises.map((item, index) => (
                            <div key={index} className="col-span-1 flex flex-col gap-2 items-center">
                                <img src={item.imgLink} className='w-20 h-20' alt="" />
                                <p className='font-bold text-xl uppercase'>{item.title}</p>
                                <div className="flex flex-col gap-1 items-start w-full">
                                    {item.services && item.services.map((service, index) => (
                                        <p key={index} className='text-gray-500 text-lg font-medium cursor-pointer capitalize'>{service}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Index