import React from 'react';

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

    return (
        <div>
            <div className="max-w-7xl mx-auto px-3">
                <div className="flex flex-col gap-2 py-5">
                    <p className="text-2xl font-bold text-center">What makes us different?</p>
                    <p className="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore accusantium perspiciatis optio voluptatem nostrum necessitatibus, rem, similique aliquam corporis nesciunt consequatur, eos saepe? Aliquid molestias magni minus? Iste provident veritatis accusamus consequuntur adipisci deleniti numquam temporibus perferendis ab odio recusandae quibusdam delectus repellendus consectetur explicabo, qui facilis excepturi nisi asperiores.</p>
                </div>
                {/* impact */}
                <div className="grid grid-cols-2 gap-2 py-5">
                    <div className="col-span-2 md:col-span-1 flex justify-center">
                        <img src="images/impact.jpg" alt="impact" className="w-8/12 h-auto rounded-lg hover:rotate-2 transition-all" />
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-3">
                        <p className="text-2xl font-bold text-center md:text-left">Impact</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates deleniti quidem laboriosam temporibus nulla doloribus, eum non, laborum ipsa alias unde veritatis quis magni? Debitis corrupti quia iure ad, vero eius qui consequatur quo.</p>
                    </div>
                </div>
                {/* awards */}
                <div className="flex justify-center flex-wrap gap-3 py-5">
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                    <img src="images/awards.png" className="h-28 md:h-36 w-28 md:w-36" alt="award" />
                </div>
            </div>
            {/* value */}
            <div className="bg-[#262746] text-white">
                <div className="max-w-7xl mx-auto px-3 py-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {quality.map((item, index) => (
                        <div key={index} className="col-span-1 flex flex-col gap-4 py-3">
                            <img src={item.image} className="h-10 w-10" alt="" />
                            <p className="text-2xl font-bold">{item.name}</p>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* team */}
            <div className="bg-gray-300">
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
            </div>
        </div>
    )
}

export default Index