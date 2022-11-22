import React from 'react';



function Contact() {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-3">
                {/* contact us */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                        <p className='uppercase text-indigo-500 font-semibold'>Contact Us</p>
                        <p>We would love to hear about your project.</p>
                        <p>Contact us for a free confidential app consultation.</p>
                        <div className="grid grid-cols-2">
                            <div className="col-span-2">
                                <p className="underline">Address</p>
                                <p>1968 S Coast Hwy</p>
                                <p>Laguna Beach, CA 92651</p>
                                {/* <p>+1 (512) 949-8991</p>
                                <p>hello@moove-it.com</p> */}
                            </div>
                            {/* <div className="col-span-2 md:col-span-1">
                                <p className="underline">Address 02</p>
                                <p>701 Brazos St</p>
                                <p>PMB 51503</p>
                                <p>San Francisco, CA, 94104-5401</p>
                                <p>USA</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex justify-between">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <span id="phone-description" className="text-sm text-gray-500">
                                        Optional
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        aria-describedby="phone-description"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex justify-between">
                                    <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                                        How can we help you?
                                    </label>
                                    <span id="how-can-we-help-description" className="text-sm text-gray-500">
                                        Max. 500 characters
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <textarea
                                        id="how-can-we-help"
                                        name="how-can-we-help"
                                        aria-describedby="how-can-we-help-description"
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium text-gray-700">
                                    How did you hear about us?
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="how-did-you-hear-about-us"
                                        id="how-did-you-hear-about-us"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    />
                                </div>
                            </div>
                            <div className="text-right sm:col-span-2">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact