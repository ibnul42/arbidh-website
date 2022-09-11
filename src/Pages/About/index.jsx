import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const quality = [
    {
        name: 'Quality over Quantity',
        image: 'images/icons/arrow1.png',
        desc: 'That’s the key to our philosophy. We strive to deliver the best service and create the highest quality products by constantly renewing and improving every aspect of our process.',
    },
    {
        name: 'Quality over Quantity',
        image: 'images/icons/arrow2.png',
        desc: 'That’s the key to our philosophy. We strive to deliver the best service and create the highest quality products by constantly renewing and improving every aspect of our process.',
    },
    {
        name: 'Quality over Quantity',
        image: 'images/icons/arrow3.png',
        desc: 'That’s the key to our philosophy. We strive to deliver the best service and create the highest quality products by constantly renewing and improving every aspect of our process.',
    },
    {
        name: 'Quality over Quantity',
        image: 'images/icons/arrow2.png',
        desc: 'That’s the key to our philosophy. We strive to deliver the best service and create the highest quality products by constantly renewing and improving every aspect of our process.',
    },
]

const peoples = [
    {
        name: 'Shane Zilinskas',
        position: 'Founder | Engineering & Delivery',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
        name: 'Kara McGehee',
        position: 'Founder | Experience & Operations',
        image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
    },
    {
        name: 'Nik Mellett',
        position: 'Sales & Marketing',
        image: 'https://i.pinimg.com/280x280_RS/4a/13/c8/4a13c8850b1c00e5d8c22146c47c6d25.jpg'
    },
    {
        name: 'Jenny Wang',
        position: 'Technical Project Manager',
        image: 'https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?fit=1200%2C900&ssl=1'
    },
    {
        name: 'Ibsen Fahir',
        position: 'Technical Lead',
        image: 'https://www.freedigitalphotos.net/images/category-images/118.jpg'
    },
    {
        name: 'Juno Sheridan',
        position: 'Full Stack Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOlCnRPqYRYE_40qtuz1Vn2ghEBHG9dueTYj15jq6KN4utraWVIUvnGTt9WSMKTU97EY&usqp=CAU'
    },
    {
        name: 'Daziah Turner',
        position: 'Assistant Project Manager',
        image: 'https://st3.depositphotos.com/4071389/12805/i/600/depositphotos_128051066-stock-photo-goatee-handsome-man.jpg'
    },
    {
        name: 'Walter Castillo',
        position: 'Administrative Manager',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YRgrMauTguMRC9XZRpDTUZF3rnWsk2Hm5uoQAE3XsPr2044-GzhQa2ulnM_kIsPfV8Y&usqp=CAU'
    },
]

function Index() {

    const { ref: heroRef, inView: heroInView } = useInView();

    const { ref: solutionRef, inView: solutionInView } = useInView();
    const { ref: solutionRef2, inView: solutionInView2 } = useInView();
    const { ref: solutionRef3, inView: solutionInView3 } = useInView();
    const { ref: solutionRef4, inView: solutionInView4 } = useInView();

    const { ref: fusionRef, inView: fusionInView } = useInView();
    const { ref: fusionRef2, inView: fusionInView2 } = useInView();
    const { ref: fusionRef3, inView: fusionInView3 } = useInView();
    const { ref: fusionRef4, inView: fusionInView4 } = useInView();

    const { ref: patientRef, inView: patientInView } = useInView();
    const { ref: patientRef2, inView: patientInView2 } = useInView();
    const { ref: patientRef3, inView: patientInView3 } = useInView();
    const { ref: patientRef4, inView: patientInView4 } = useInView();

    const heroAnimation = useAnimation();
    const solutionAnimation = useAnimation();
    const solutionAnimation2 = useAnimation();
    const solutionAnimation3 = useAnimation();
    const solutionAnimation4 = useAnimation();

    const fusionAnimation = useAnimation();
    const fusionAnimation2 = useAnimation();
    const fusionAnimation3 = useAnimation();
    const fusionAnimation4 = useAnimation();

    const patientAnimation = useAnimation();
    const patientAnimation2 = useAnimation();
    const patientAnimation3 = useAnimation();
    const patientAnimation4 = useAnimation();

    useEffect(() => {
        if (patientInView4)
        {
            patientAnimation4.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.4, bounce: 0.0
                },
            })
        }
        if (!patientInView4)
        {
            patientAnimation4.start({ x: '+100vw' })
        }
        if (patientInView3)
        {
            patientAnimation3.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.5, bounce: 0.0
                },
            })
        }
        if (!patientInView3)
        {
            patientAnimation3.start({ y: '+100vh' })
        }
        if (patientInView2)
        {
            patientAnimation2.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.4, bounce: 0.0
                },
            })
        }
        if (!patientInView2)
        {
            patientAnimation2.start({ y: '+100vh' })
        }
        if (patientInView)
        {
            patientAnimation.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!patientInView)
        {
            patientAnimation.start({ y: '+100vh' })
        }
        if (fusionInView4)
        {
            fusionAnimation4.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.4, bounce: 0.0
                },
            })
        }
        if (!fusionInView4)
        {
            fusionAnimation4.start({ x: '-100vw' })
        }
        if (fusionInView3)
        {
            fusionAnimation3.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.5, bounce: 0.0
                },
            })
        }
        if (!fusionInView3)
        {
            fusionAnimation3.start({ y: '+100vh' })
        }
        if (fusionInView2)
        {
            fusionAnimation2.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.4, bounce: 0.0
                },
            })
        }
        if (!fusionInView2)
        {
            fusionAnimation2.start({ y: '+100vh' })
        }
        if (fusionInView)
        {
            fusionAnimation.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!fusionInView)
        {
            fusionAnimation.start({ y: '+100vh' })
        }
        if (solutionInView4)
        {
            solutionAnimation4.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.4, bounce: 0.0
                },
            })
        }
        if (!solutionInView4)
        {
            solutionAnimation4.start({ x: '+100vw' })
        }
        if (solutionInView3)
        {
            solutionAnimation3.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.5, bounce: 0.0
                },
            })
        }
        if (!solutionInView3)
        {
            solutionAnimation3.start({ y: '+100vh' })
        }
        if (solutionInView2)
        {
            solutionAnimation2.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.4, bounce: 0.0
                },
            })
        }
        if (!solutionInView2)
        {
            solutionAnimation2.start({ y: '+100vh' })
        }
        if (solutionInView)
        {
            solutionAnimation.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!solutionInView)
        {
            solutionAnimation.start({ y: '+100vh' })
        }
        if (heroInView)
        {
            heroAnimation.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!heroInView)
        {
            heroAnimation.start({ y: '+100vh' })
        }
    }, [heroInView, solutionInView, solutionInView2, solutionInView3, solutionInView4, fusionInView, fusionInView2, fusionInView3, fusionInView4, heroAnimation, solutionAnimation, solutionAnimation2, solutionAnimation3, solutionAnimation4, fusionAnimation, fusionAnimation2, fusionAnimation3, fusionAnimation4, patientAnimation, patientAnimation2, patientAnimation3, patientAnimation4, patientInView, patientInView2, patientInView3, patientInView4])

    return (
        <div>
            <div className="max-w-7xl mx-auto px-3">
                <div className="py-3 overflow-hidden" ref={heroRef}>
                    <motion.div
                        animate={heroAnimation}
                        className="flex flex-col gap-3 overflow-hidden">
                        <p className="text-center text-3xl">Noteworthy Projects We Have Worked Upon</p>
                        <p className="text-center">From bespoke ERP/CRM/Management software solutions to multi-level web and mobile apps, implementing AI/ML to integrating IoT, we created what it took for our clients to reach new heights.</p>
                    </motion.div>
                </div>
                {/* solution 01 */}
                <div className="py-5 grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 flex flex-col-reverse md:flex-col gap-5">
                        <p className='text-2xl'>Ostrij- Data Integration Solution</p>
                        <div ref={solutionRef} className="overflow-hidden">
                            <motion.div animate={solutionAnimation} className="flex gap-3">
                                <div className="">
                                    <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/04/Better-Data-Management.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Data Management</p>
                                    <p className="text-gray-400">Data integration, visualization, and interactions are manageable from one place.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div ref={solutionRef2} className="overflow-hidden">
                            <motion.div animate={solutionAnimation2} className="flex gap-3">
                                <div className="">
                                    <img src="	https://www.matellio.com/solutions/wp-content/uploads/2022/02/Centralized-Dashboard-1.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Centralized Dashboard</p>
                                    <p className="text-gray-400">A central dashboard with complete control and high-quality information reporting.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div ref={solutionRef3} className="overflow-hidden">
                            <motion.div animate={solutionAnimation3} className="flex gap-3">
                                <div className="">
                                    <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/02/Salesforce-Integration.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Salesforce Integration</p>
                                    <p className="text-gray-400">Salesforce makes the entire tool much better than the rest of the tools available.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-span-1 px-2 overflow-hidden" ref={solutionRef4}>
                        <motion.div animate={solutionAnimation4} className="">
                            <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/07/Ostrij-Data-Integration-Solution.jpg" className='w-full' alt="" />
                        </motion.div>
                    </div>
                </div>

                {/* solution 02 */}
                <div className="py-5 grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 px-2 overflow-hidden" ref={fusionRef4}>
                        <motion.div animate={fusionAnimation4} className="">
                            <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/07/Ostrij-Data-Integration-Solution.jpg" className='w-full' alt="" />
                        </motion.div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-5">
                        <p className='text-2xl'>Air Fusion- AI-Based Turbine</p>
                        <div ref={fusionRef} className="overflow-hidden">
                            <motion.div animate={fusionAnimation} className="flex gap-3">
                                <div className="">
                                    <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/02/Data-Encryption.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Data Encryption</p>
                                    <p className="text-gray-400">End-to-end data encryption to ensure secure operation at all times.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div ref={fusionRef2} className="overflow-hidden">
                            <motion.div animate={fusionAnimation2} className="flex gap-3">
                                <div className="">
                                    <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/02/AI-Based-Accuracy.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">AI-Based Accuracy</p>
                                    <p className="text-gray-400">AI-based accuracy in determining and managing risks/errors in the system.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div ref={fusionRef3} className="overflow-hidden">
                            <motion.div animate={fusionAnimation3} className="flex gap-3">
                                <div className="">
                                    <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/02/Efficient-Workflow.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Efficient Workflow</p>
                                    <p className="text-gray-400">An efficient workflow ensures everyone can work at their peak capacity.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* solution 03 - Patient */}
                <div className="py-5 grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 flex flex-col-reverse md:flex-col gap-5">
                        <p className='text-2xl'>MAX MRJ- Patient Discharge System</p>
                        <div ref={patientRef} className="overflow-hidden">
                            <motion.div animate={patientAnimation} className="flex gap-3">
                                <div className="">
                                    <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/03/Central-Dash-2.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Central Dash</p>
                                    <p className="text-gray-400">A glance view of all the details of the patient required to process the discharge.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div ref={patientRef2} className="overflow-hidden">
                            <motion.div animate={patientAnimation2} className="flex gap-3">
                                <div className="">
                                    <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/03/Referral-Management.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Referral Management</p>
                                    <p className="text-gray-400">Receive fast referrals and process them based on sources, easily accept/decline them.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div ref={patientRef3} className="overflow-hidden">
                            <motion.div animate={patientAnimation3} className="flex gap-3">
                                <div className="">
                                    <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/03/HIPAA-Compliance-3-1.png" alt="" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">HIPAA and PHI</p>
                                    <p className="text-gray-400">All the information is stored securely and encrypted; users can decide when to share it.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-span-1 px-2 overflow-hidden" ref={patientRef4}>
                        <motion.div animate={patientAnimation4} className="">
                            <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/07/MAX-MRJ.jpg" className='w-full' alt="" />
                        </motion.div>
                    </div>
                </div>

                {/* All services */}
                <div className="py-5">
                    <p class="text-center text-3xl">Explore Solutions We Have Built Over the Years</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="col-span-1 flex flex-col gap-3 py-5 px-3">
                            <p className="font-bold text-lg text-center">Mobile Apps</p>
                            <div className="p-2 border rounded hover:shadow-md">
                                <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/07/mobile-app-development-338x270.jpg" className="w-full" alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-3 py-5 px-3">
                            <p className="font-bold text-lg text-center">Software Solutions</p>
                            <div className="p-2 border rounded hover:shadow-md">
                                <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/07/Dashboard.jpg" className="w-full" alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-3 py-5 px-3">
                            <p className="font-bold text-lg text-center">Mobile Apps</p>
                            <div className="p-2 border rounded hover:shadow-md">
                                <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/07/mobile-app-development-338x270.jpg" className="w-full" alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-3 py-5 px-3">
                            <p className="font-bold text-lg text-center">Mobile Apps</p>
                            <div className="p-2 border rounded hover:shadow-md">
                                <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/07/mobile-app-development-338x270.jpg" className="w-full" alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-3 py-5 px-3">
                            <p className="font-bold text-lg text-center">Mobile Apps</p>
                            <div className="p-2 border rounded hover:shadow-md">
                                <img src="https://www.matellio.com/solutions/wp-content/uploads/2022/07/mobile-app-development-338x270.jpg" className="w-full" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="py-5">
                    <p class="text-center text-3xl py-5">See What Our Customers Have to Talk About Us on Clutch</p>
                    <div className="px-10 bg-gray-100">
                        <p className='flex py-3 gap-1 font-semibold'>All Reviews 4.8
                            <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                            <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                            <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                            <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                            <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                            80 Reviews
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-8">
                            <div className="col-span-1 flex flex-col gap-2 bg-[#fafafa] px-3 py-2 rounded-md shadow hover:shadow-lg">
                                <div className="flex gap-5">
                                    <p>5.0</p>
                                    <div className="flex">
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                    </div>
                                </div>
                                <p className="text-gray-800">"The resource that worked with us were very talented and iumpressive."</p>
                                <p className="text-gray-500">Partner, Nock</p>
                                <p className="text-gray-600">Verified Review</p>
                            </div>
                            <div className="col-span-1 flex flex-col gap-2 bg-[#fafafa] px-3 py-2 rounded-md shadow hover:shadow-lg">
                                <div className="flex gap-5">
                                    <p>5.0</p>
                                    <div className="flex">
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                    </div>
                                </div>
                                <p className="text-gray-800">"The resource that worked with us were very talented and iumpressive."</p>
                                <p className="text-gray-500">Partner, Nock</p>
                                <p className="text-gray-600">Verified Review</p>
                            </div>
                            <div className="col-span-1 flex flex-col gap-2 bg-[#fafafa] px-3 py-2 rounded-md shadow hover:shadow-lg">
                                <div className="flex gap-5">
                                    <p>5.0</p>
                                    <div className="flex">
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                    </div>
                                </div>
                                <p className="text-gray-800">"The resource that worked with us were very talented and iumpressive."</p>
                                <p className="text-gray-500">Partner, Nock</p>
                                <p className="text-gray-600">Verified Review</p>
                            </div>
                            <div className="col-span-1 flex flex-col gap-2 bg-[#fafafa] px-3 py-2 rounded-md shadow hover:shadow-lg">
                                <div className="flex gap-5">
                                    <p>5.0</p>
                                    <div className="flex">
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                    </div>
                                </div>
                                <p className="text-gray-800">"The resource that worked with us were very talented and iumpressive."</p>
                                <p className="text-gray-500">Partner, Nock</p>
                                <p className="text-gray-600">Verified Review</p>
                            </div>
                            <div className="col-span-1 flex flex-col gap-2 bg-[#fafafa] px-3 py-2 rounded-md shadow hover:shadow-lg">
                                <div className="flex gap-5">
                                    <p>5.0</p>
                                    <div className="flex">
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                    </div>
                                </div>
                                <p className="text-gray-800">"The resource that worked with us were very talented and iumpressive."</p>
                                <p className="text-gray-500">Partner, Nock</p>
                                <p className="text-gray-600">Verified Review</p>
                            </div>
                            <div className="col-span-1 flex flex-col gap-2 bg-[#fafafa] px-3 py-2 rounded-md shadow hover:shadow-lg">
                                <div className="flex gap-5">
                                    <p>5.0</p>
                                    <div className="flex">
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                        <span><img src="/images/icons/star.svg" className='w-4 h-4' alt="" /></span>
                                    </div>
                                </div>
                                <p className="text-gray-800">"The resource that worked with us were very talented and iumpressive."</p>
                                <p className="text-gray-500">Partner, Nock</p>
                                <p className="text-gray-600">Verified Review</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="flex flex-col gap-2 py-5">
                    <p className="text-2xl font-bold text-center">What makes us different?</p>
                    <p className="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore accusantium perspiciatis optio voluptatem nostrum necessitatibus, rem, similique aliquam corporis nesciunt consequatur, eos saepe? Aliquid molestias magni minus? Iste provident veritatis accusamus consequuntur adipisci deleniti numquam temporibus perferendis ab odio recusandae quibusdam delectus repellendus consectetur explicabo, qui facilis excepturi nisi asperiores.</p>
                </div> */}
                {/* impact */}
                {/* <div className="grid grid-cols-2 gap-2 py-5">
                    <div className="col-span-2 md:col-span-1 flex justify-center">
                        <img src="images/impact.jpg" alt="impact" className="w-8/12 h-auto rounded-lg hover:rotate-2 transition-all" />
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-3">
                        <p className="text-2xl font-bold text-center md:text-left">Impact</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates deleniti quidem laboriosam temporibus nulla doloribus, eum non, laborum ipsa alias unde veritatis quis magni? Debitis corrupti quia iure ad, vero eius qui consequatur quo.</p>
                    </div>
                </div> */}
                {/* awards */}
                {/* <div className="flex justify-center flex-wrap gap-3 py-5">
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                </div> */}
            </div>
            {/* value */}
            {/* <div className="bg-[#262746] text-white">
                <div className="max-w-7xl mx-auto px-3 py-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {quality.map((item, index) => (
                        <div key={index} className="col-span-1 flex flex-col gap-4 py-3">
                            <img src={item.image} className="h-10 w-10" alt="" />
                            <p className="text-2xl font-bold">{item.name}</p>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div> */}
            {/* team */}
            {/* <div className="bg-gray-300">
                <div className="max-w-7xl mx-auto px-3 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {peoples.map((people, index) => (
                        <div key={index} className="col-span-1 bg-white shadow-lg px-3 py-7 flex flex-col rounded-md transition-all hover:scale-[1.02]">
                            <div className="flex justify-center py-2">
                                <img src={people.image} className='h-32 w-32 rounded-full hover:rounded-lg transition-all duration-300 object-top object-cover' alt={people.name} />
                            </div>
                            <p className='font-semibold cursor-pointer contents'>{people.name}</p>
                            <p className='text-gray-600'>{people.position}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default Index