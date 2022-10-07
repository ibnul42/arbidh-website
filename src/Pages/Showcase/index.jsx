import { Accordion } from 'flowbite-react'
import React from 'react'
import CustomAccordion from '../../Components/CustomAccordion'

const appDevelop = [
    {
        title: 'Expert iOS App development',
        desc: 'We are proud of our 4 steps tested methodology in app development which guarantees that your project will stay within the timeline, scope, and budget.',
        link: '#!'
    },
    {
        title: 'iOS App consulting',
        desc: 'We will analyze your iOS app project with business and tech analysts to ensure there are no critical problems.',
        link: '#!'
    },
    {
        title: 'iOS App Code Audit',
        desc: 'Let our specialist audit your source code to ensure your iOS app doesn’t have bugs, security breaches, or violations of programming conventions.',
        link: '#!'
    },
    {
        title: 'iOS App Maintenance and Support',
        desc: 'Our world-class engineers and QA specialists ensure that your iOS application runs flawlessly.',
        link: '#!'
    },
    {
        title: 'iOS UI/UX Design',
        desc: 'We make iOS applications user-friendly and engaging for the end-users. All thanks to the UI/UX team, for bringing the best app experiences with the motivation to use it continuously.',
        link: '#!'
    },
    {
        title: 'iOS App Deployment',
        desc: 'We are the #1 iOS app development company that provides seamless integration of the apps on all Apple devices. iOs, macOS, WatchOS.',
        link: '#!'
    }
]

const appBusiness = [
    {
        title: 'Expert iOS App development',
        desc: 'iOS apps are the easiest to use. They have simplified what looks complicated with its user-friendly and intuitive interface. Fast and fun, users can easily navigate and find what they are looking for.'
    },
    {
        title: 'Drives Real Business',
        desc: 'iOS apps translate user engagement into sales revenue. Coupled with advanced functionalities, the apps drive users to more satisfaction and sales leads. Your business earns a competitive edge via iPhone apps.'
    },
    {
        title: 'Discover Untapped Market',
        desc: 'iPhone users are growing and so will your business if you have a robust and powerful iOS app. We can help your business stretch its wings and find customers beyond the USA into overseas countries.'
    },
    {
        title: 'Win User Trust',
        desc: 'People will trust you if you protect their confidential information. iOS apps are highly secure and safe to use. They provide ample protection to your business/user data against viruses, malware, and other unethical data breach practices.'
    },
]

const faqs = [
    {
        title: 'What is the cost and timeline for building an iOS app?',
        desc: 'We have developed a proprietary 4 steps methodology that starts with Free App Idea Audit. Various factors like custom features, integrations, and extra security features may affect the project cost and timeline. We are honest and transparent and thus invest our time and effort in providing you with accurate delivery time and cost before starting the work.'
    },
    {
        title: 'Do we sign an NDA before the iOS app development work begins?',
        desc: 'Yes, that’s an integral part of JetRuby. We maintain complete client confidentiality by signing an NDA agreement. You can rest assured that your data is safe and secure with us. Once the project is completed, we will forward the source code to you.'
    },
    {
        title: 'Do we sign an NDA before the iOS app development work begins?',
        desc: 'Yes, that’s an integral part of JetRuby. We maintain complete client confidentiality by signing an NDA agreement. You can rest assured that your data is safe and secure with us. Once the project is completed, we will forward the source code to you.'
    }
]

function index() {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-50 to-orange-100 via-indigo-50 py-10">
                <div className="max-w-7xl mx-auto px-3 flex flex-col gap-8 items-center text-center">
                    <h1 className='font-bold text-xl md:text-4xl px-10'><span className='text-orange-600'>iOS App</span> Development Services</h1>
                    <p className='md:px-20 text-xl'>We transform our clients' ideas into flawless iOS applications making businesses stand out from the competition.</p>
                    <p className='border border-indigo-500 rounded-xl py-3 px-2 md:px-5 font-semibold'>Always on time, to specification, and on budget</p>
                </div>
            </div>
            <div className="py-10">
                <div className="max-w-7xl mx-auto px-3 flex flex-col gap-8 items-center text-center">
                    <p className='font-bold text-xl md:text-4xl px-10'>Our iOS app <span className='text-orange-600'>development services</span></p>
                    <p className='text-lg'>iOS apps are the go-to solutions for most businesses. They are secure and scalable. Something that can take a business ahead of others. Our world-class iOS developers ensure you get the best mobile app solution that will help you to increase your market reach!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {appDevelop && appDevelop.map((item, index) => (
                            <div key={index} className="col-span-1 bg-orange-200 flex flex-col items-start gap-3 p-3 rounded-md">
                                <p className='text-orange-500 font-bold text-2xl'>{item.title}</p>
                                <p>{item.desc}</p>
                                <a href={item.link} className='text-blue-400 hover:text-orange-500 font-medium'>Read more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-10 bg-gradient-to-r from-gray-50 to-orange-100">
                <div className="max-w-7xl mx-auto px-3 grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-8">
                        <p className='font-bold text-xl md:text-3xl'>How do we build iOS apps that rank #1 on the App Store and get featured in Forbes</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col items-center gap-3">
                        <p className='font-semibold'>Fill out the form and find out</p>
                        <button className='border-2 border-orange-500 px-10 py-3 rounded-lg bg-orange-500 hover:bg-transparent font-semibold text-white hover:text-orange-500'>Let's Talk</button>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="max-w-7xl mx-auto px-3 flex flex-col gap-8 items-center text-center">
                    <p className='font-bold text-xl md:text-4xl px-10'>How iOS Apps Set Your Business Apart from Others</p>
                    <p className='text-lg'>iOS apps make a notable difference in business growth no other app can contest. Why is it so? Learn more.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {appBusiness && appBusiness.map((item, index) => (
                            <div key={index} className="col-span-1 border border-orange-500 flex flex-col items-start gap-3 py-4 px-3 rounded-md">
                                <div className=" flex gap-2 items-center">
                                    <div className="bg-orange-100 h-5 w-5 rounded-full flex justify-center items-center">
                                        <div className="h-[10px] w-[10px] bg-orange-500 rounded-full"></div>
                                    </div>
                                    <p className='font-bold text-lg'>{item.title}</p>
                                </div>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="max-w-7xl mx-auto px-3 flex flex-col gap-8 items-center">
                    <p className='font-bold text-xl md:text-4xl px-10'>What sets JetRuby Agency apart from other <span className='text-orange-600'>iOS app development companies</span>?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1 flex items-center justify-center">
                            <img src="images/phone1.svg" className='w-full' alt="phone" />
                        </div>
                        <div className="col-span-1 flex flex-col gap-5">
                            {appBusiness && appBusiness.map((item, index) => (
                                <div key={index} className="flex flex-col items-start gap-3 py-4 px-3 rounded-md">
                                    <div className=" flex gap-2 items-center">
                                        <div className="bg-orange-100 h-5 w-5 rounded-full flex justify-center items-center">
                                            <div className="h-[10px] w-[10px] bg-orange-500 rounded-full"></div>
                                        </div>
                                        <p className='font-bold text-lg'>{item.title}</p>
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <CustomAccordion title={'Frequently asked Questions'} items={faqs} />
            </div>
        </div>
    )
}

export default index