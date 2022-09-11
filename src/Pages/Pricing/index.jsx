import { Accordion } from 'flowbite-react';
import React from 'react';

const packages = [
    {
        title: 'bug consultation',
        price: 100,
        annualBilling: 300,
        props: [
            {
                title: '3 sites',
                type: true
            },
            {
                title: 'Landing Pages, Pop-Ups, Alert Bars',
                type: true
            },
            {
                title: 'Unlimited Traffic & Leads',
                type: true
            },
            {
                title: 'Free Custom Domain*',
                type: true
            },
            {
                title: 'Free Hosting',
                type: true
            },
            {
                title: 'Mobile-Responsive Site Templates',
                type: true
            },
            {
                title: 'Lead Notifications',
                type: true
            },
            {
                title: '40+ Standard Integrations',
                type: true
            },
            {
                title: 'Advanced Integrations',
                type: false
            },
            {
                title: 'Includes 5 Pro Sub Accounts',
                type: false
            }
        ]
    },
    {
        title: 'bug fixing',
        price: 60,
        annualBilling: 220,
        popular: true,
        props: [
            {
                title: '3 sites',
                type: true
            },
            {
                title: 'Landing Pages, Pop-Ups, Alert Bars',
                type: true
            },
            {
                title: 'Unlimited Traffic & Leads',
                type: true
            },
            {
                title: 'Free Custom Domain*',
                type: true
            },
            {
                title: 'Free Hosting',
                type: true
            },
            {
                title: 'Mobile-Responsive Site Templates',
                type: true
            },
            {
                title: 'Lead Notifications',
                type: false
            },
            {
                title: '40+ Standard Integrations',
                type: false
            },
            {
                title: 'Advanced Integrations',
                type: false
            },
            {
                title: 'Includes 5 Pro Sub Accounts',
                type: false
            }
        ]
    },
    {
        title: 'feature development',
        price: 40,
        annualBilling: 150,
        props: [
            {
                title: '3 sites',
                type: true
            },
            {
                title: 'Landing Pages, Pop-Ups, Alert Bars',
                type: true
            },
            {
                title: 'Unlimited Traffic & Leads',
                type: true
            },
            {
                title: 'Free Custom Domain*',
                type: false
            },
            {
                title: 'Free Hosting',
                type: true
            },
            {
                title: 'Mobile-Responsive Site Templates',
                type: false
            },
            {
                title: 'Lead Notifications',
                type: false
            },
            {
                title: '40+ Standard Integrations',
                type: true
            },
            {
                title: 'Advanced Integrations',
                type: false
            },
            {
                title: 'Includes 5 Pro Sub Accounts',
                type: false
            }
        ]
    },
    {
        title: 'new app monthly',
        price: 150,
        annualBilling: 200,
        props: [
            {
                title: '3 sites',
                type: true
            },
            {
                title: 'Landing Pages, Pop-Ups, Alert Bars',
                type: true
            },
            {
                title: 'Unlimited Traffic & Leads',
                type: false
            },
            {
                title: 'Free Custom Domain*',
                type: false
            },
            {
                title: 'Free Hosting',
                type: true
            },
            {
                title: 'Mobile-Responsive Site Templates',
                type: true
            },
            {
                title: 'Lead Notifications',
                type: false
            },
            {
                title: '40+ Standard Integrations',
                type: false
            },
            {
                title: 'Advanced Integrations',
                type: true
            },
            {
                title: 'Includes 5 Pro Sub Accounts',
                type: false
            }
        ]
    }
]

function Pricing() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-3">
                {/* introduce */}
                <div className="flex flex-col items-center text-center gap-4 mx-0 md:mx-20 lg:mx-40">
                    <p className="uppercase tracking-wide text-[#878684]">Leadpages pricing</p>
                    <h1 className="capitalize text-4xl font-bold">Try leadpages risk-free Today</h1>
                    <p>Discover why more than 40,000 small business owners choose Leadpages.
                        Select a plan to get started with your free 14-day trial.</p>
                </div>
            </div>
            <div className="bg-gray-100 my-5">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="py-10">
                        {/* pricing */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 px-3">
                            {packages && packages.map((item, index) => (
                                <div key={index} className="col-span-1 h-auto shadow hover:shadow-lg hover:scale-105 rounded overflow-hidden transition-all delay-75 bg-gray-50">
                                    {item?.popular && <p className='capitalize bg-gray-200 py-2 text-center tracking-widest font-medium'>Most popular</p>}
                                    <div key={index} className="px-3 py-3 flex flex-col gap-3">
                                        <p className="uppercase font-bold">{item.title}</p>
                                        <p><span className='font-bold text-5xl'>${item.price}</span>/month</p>
                                        <p className='text-gray-500'><span className='text-indigo-500'>save ${item.annualBilling}/year</span> | billed annual</p>
                                        <button className='capitalize bg-indigo-600 hover:bg-indigo-800 text-white font-semibold rounded-full py-3'>Start for free</button>
                                        {item.props && item.props.map((prop, index) => (
                                            prop.type ? (
                                                <p key={index} className="text-gray-500 capitalize"># {prop.title}</p>
                                            ) : (
                                                <del key={index} className="text-gray-500 capitalize">{prop.title}</del>
                                            )
                                        ))}
                                        {/* <button className='capitalize bg-indigo-600 hover:bg-indigo-800 text-white font-semibold rounded-full py-3'>Start for free</button> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* more */}
                        <div className="bg-gray-50 mx-3 px-8 py-10 shadow-md">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-3 md:col-span-2 flex flex-col gap-5">
                                    <p className="text-black text-2xl font-extrabold">Need even more?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati temporibus voluptas vero minima molestias nemo beatae sequi. Accusantium, quis</p>
                                </div>
                                <div className="col-span-3 md:col-span-1 flex flex-col justify-center">
                                    <button className='capitalize py-2 rounded-full border-2 border-indigo-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all delay-75 mx-5'>Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6">
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Question 01
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quo molestiae ipsum excepturi, magni, architecto consequatur earum quam id ut distinctio expedita ipsa dolore aperiam perspiciatis rerum quibusdam ullam enim? Repellat quo, ex dolorem perspiciatis, deleniti nam debitis quod temporibus blanditiis nulla tenetur harum odio quibusdam error beatae eaque officiis vel repudiandae autem incidunt.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Question 02
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi neque modi perspiciatis velit incidunt sit iure. Voluptatibus magni aspernatur accusamus veritatis porro accusantium similique dignissimos, quae exercitationem ipsum vel officiis eligendi eius itaque optio nobis, placeat iusto corporis officia alias blanditiis! Odio corporis sint temporibus error commodi.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Question 03
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, illum, saepe id debitis fugiat est alias labore voluptatum quod iste sequi nisi ea? Quae quo illo id repellat! Placeat, magni commodi in laboriosam quaerat nisi sit odit? Ullam consequuntur, aliquid officia, tenetur quis impedit, accusantium esse culpa temporibus necessitatibus consequatur.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    )
}

export default Pricing