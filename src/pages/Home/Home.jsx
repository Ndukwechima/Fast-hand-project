import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsGearWideConnected } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const data = [
  {
    id: "m1",
    text: "Artisan?",
  },
  {
    id: "m2",
    text: "Client?",
  },
];

const Home = () => {
  return (
    <>
      <div className="hero-page h-[84vh] w-[100%]">
        <div className="h-[84vh] w-[100%] bg-blue-600 bg-opacity-[0.3] flex items-center justify-center ">
          <div className=" h-[42vh] w-[100%] flex flex-col items-center justify-around text-5xl font-extrabold">
            <div className="text-center text-white">
              <p className="">
                Unlocks <span className="text-pink900"> endless</span> services,
              </p>
              <p>One platform.</p>
            </div>
            <div className="w-[15%] h-[25%] text-base font-normal flex justify-around pt-[1em]">
              <NavLink
                to="artissans/signup"
                className="h-[50%] px-2  rounded-[50px] border border-pink900 text-center flex items-center justify-center text-white"
              >
                Artisan
              </NavLink>
              <NavLink
                to="customer/signups"
                className="h-[50%]  px-2 rounded-[50px] border border-pink900 text-center flex items-center justify-center text-white"
              >
                Customer
              </NavLink>
            </div>
            <button className="px-4 py-2 rounded-md bg-pink900 text-white font-bold text-lg  relative bottom-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* our services */}
      <div className="h-[55vh] w-[100%] bg-white flex flex-col items-center justify-around">
        <div className="text-3xl font-bold">Our Services</div>
        <div className="h-[60%] w-[100%] flex items-center justify-around">
          <div className="h-[100%] w-[20%] shadow-2xl flex items-center justify-center">
            <div className="h-[60%] w-[60%] flex flex-col items-center justify-around text-center">
              <BsGearWideConnected className="text-skyBlue900 font-bold text-2xl" />
              Connecting you to your customers
            </div>
          </div>
          <div className="h-[100%] w-[20%] shadow-2xl flex items-center justify-center">
            <div className="h-[60%] w-[60%] flex flex-col items-center justify-around text-center">
              <BsGearWideConnected className="text-skyBlue900 font-bold text-2xl" />
              Connecting you as customer to your desire artisant
            </div>
          </div>
          <div className="h-[100%] w-[20%] shadow-2xl flex items-center justify-center">
            <div className="h-[60%] w-[60%] flex flex-col items-center justify-around text-center">
              <BsGearWideConnected className="text-skyBlue900 font-bold text-2xl" />
              Making sure your works are properly delivered
            </div>
          </div>
        </div>
      </div>

      {/* about us */}

      <div className="h-[60vh] w-[100%] bg-[#e6dede] flex items-center justify-center">
        <div className="aboutus h-[80%] w-[44%]"></div>
        <div className="h-[80%] w-[44%] flex flex-col items-center justify-around">
          <div className="w-[70%] text-black font-semibold">
            <p className="text-2xl font-bold text-center">About Us</p>
            <p className="w-[90%]">
              Fasthands is a response to the gradual integration of all facets
              of the society into the degital space.
              <p>
                It is meant to give all artisans and local producers the same
                platform and advantage of reach as the ICT sector
              </p>
            </p>
          </div>
          <NavLink
            to="/about"
            className="px-3 py-3 bg-pink900 font-bold text-white rounded-md"
          >
            Know more
          </NavLink>
        </div>
      </div>
      {/* contact us */}

      <div className="w-[100%] h-[70vh] bg-skyBlue900 flex items-center justify-around">
        <div className="w-[50%] h-[70%] text-white pt-[4em]">
          <p className=" text-4xl font-bold">
            Book appointments on-the-go, and
          </p>
          <p className=" text-4xl font-bold">
            discover a world of expert services.
          </p>
          <p>Your satisfaction is our concern.</p>
          <div className="w-[60%] flex items-center justify-between">
            <div className="w-[40%] flex items-center justify-between text-black font-bold">
              <NavLink>Artisan</NavLink>
              <NavLink>Customer</NavLink>
            </div>
            <button className="px-3 py-3 bg-pink900 text-white font-bold text-lg rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="toolstwo w-[40%] h-[80%]"></div>
      </div>
      <div className="h-[100vh] bg-white w-[100%] flex items-center justify-center">
        <div className="h-[45%] w-[50%] flex flex-col justify-around">
          <div>
            <b className="text-black text-4xl">Contact Us</b>
            <div>
              <p>
                We're always here to assist with concerns, questions and
                feedbacks you might have.
              </p>
              <p>Our top priority is your best interest.</p>
            </div>
          </div>
          <div className="w-[40%]  pr-8">
            <div className="flex items-center justify-around w-[100%]">
              <div className="h-[6vh] w-[3vw] bg-pink500 flex items-center justify-center">
                <MdOutlineMailOutline className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <b className="text-black font-bold">Email Us</b>
                <p>fasthands@gmail.com</p>
              </div>
            </div>
            <div className="flex itemcs-center justify-around w-[100%] pr-[3.5em]">
              <div className="h-[6vh] w-[3vw] bg-pink500 flex items-center justify-center">
                <IoCallOutline className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <b className="text-black font-bold">Call Us</b>
                <p>08059941818</p>
                <p>08142920154</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact w-[35vw] h-[90%]"></div>
      </div>
    </>
  );
};

export default Home;
