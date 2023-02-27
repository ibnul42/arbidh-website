import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Showcase from "../Pages/Showcase";
import { Route, Routes } from "react-router-dom";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import Pricing from "../Pages/Pricing";
import Contact from "../Pages/Contact";
import ShowcaseService from "../Pages/Showcase/ShowcaseService";

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${open ? "h-screen overflow-y-hidden md:min-h-screen md:overflow-y-scroll" : "min-h-screen"} flex flex-col justify-between text-gray-700`}
    >
      <Header open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/showcase/:id" element={<ShowcaseService />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:title" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Index;
