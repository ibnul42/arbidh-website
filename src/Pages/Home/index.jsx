import React from "react";
import { Link } from "react-router-dom";
// import schedule from '../../Assets/schedule.svg'
import { PopupButton } from "react-calendly";

function Index() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 flex flex-col gap-8">
        <div className="my-5 flex flex-col items-center gap-3">
          <video
            controls
            autoPlay
            muted
            className="w-full md:w-9/12 2xl:w-10/12"
          >
            <source src="/assets/video/intro.mp4" />
          </video>
          <Link
            to="/contact"
            onClick={handleClick}
            className="border border-indigo-500 hover:bg-indigo-600 hover:text-white transition-all rounded-xl py-3 px-2 md:px-5 font-semibold capitalize"
          >
            Contact us now
          </Link>
        </div>
        {/* Schedule consultation */}
        <div className="grid grid-cols-2 gap-3">
          <p className="col-span-2 text-4xl font-bold text-center">
            Schedule for a Consultation!
          </p>
          <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-5 order-2 md:order-1">
            <p>
              Schedule a private meeting where you can tell us what app or
              website you want to create and we tell you how we can make that
              dream come true.
            </p>
            {/* <Link
              to="/contact"
              onClick={handleClick}
              className="transition ease-in-out delay-150 bg-indigo-500 hover:-translate-x-1 rounded-full py-2 hover:scale-105 hover:bg-indigo-800 hover:text-white duration-300 w-10/12 self-center text-center text-black"
            >
              Schedule a Consultation
            </Link> */}
            <PopupButton
              url="https://calendly.com/appexp/30min"
              rootElement={document.getElementById("root")}
              text="Schedule a Consultation"
              className="transition ease-in-out delay-150 bg-indigo-500 hover:-translate-x-1 rounded-full py-2 hover:scale-105 hover:bg-indigo-800 hover:text-white duration-300 w-10/12 self-center text-center text-black"
            />
            <Link
              to="/contact"
              onClick={handleClick}
              className="transition ease-in-out delay-150 bg-white border border-indigo-500 hover:-translate-x-1 rounded-full py-2 hover:scale-105 hover:bg-indigo-800 hover:text-white duration-300 w-10/12 text-center self-center text-black"
            >
              Learn more
            </Link>
          </div>
          <div className="col-span-2 md:col-span-1 order-1 md:order-2">
            <img src="images/schedule.svg" className="w-8/12 mx-auto" alt="" />
          </div>
        </div>
        {/* about us section */}
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 md:col-span-1 order-1">
            <img
              src="images/about-us.png"
              className="w-8/12 mx-auto"
              alt="about-page"
            />
          </div>
          <div className="col-span-2 md:col-span-1 order-2 flex flex-col gap-4 justify-center">
            <p className="uppercase text-indigo-500 font-semibold">About Us</p>
            <p className="text-2xl capitalize">
              We're focus on building scalable application's
            </p>
            <p>
              We are a bunch of developers that have a passion for technology
              and love to create apps and websites. We have built hundreds of
              apps and website and understand what it take to build an amazing
              website or an app. We will take you into a journey where we will
              walk with you in every step of your app journey to make sure all
              your needs/wants are met. We will not leave you high and dry and
              will continue supporting you for another 6 months for Free after
              your app or website is finished.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/about"
                onClick={handleClick}
                className="col-span-1 transition ease-in-out delay-150 bg-white border border-indigo-500 rounded-full py-2 hover:scale-[1.02] hover:bg-indigo-800 hover:text-white duration-300 self-center text-center"
              >
                More About Us
              </Link>
              <Link
                to="/about"
                onClick={handleClick}
                className="col-span-1 transition ease-in-out delay-150 bg-white border border-indigo-500 rounded-full py-2 hover:scale-[1.02] hover:bg-indigo-800 hover:text-white duration-300 self-center text-center"
              >
                View Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
