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
          <div className=" h-[42vh] w-[100%] flex flex-col items-center justify-around text-3xl sm:text-5xl font-extrabold">
            <div className="text-center text-white">
              <p className="">
                Unlocks <span className="text-pink900"> endless</span> services,
              </p>
              <p>One platform.</p>
            </div>
            <div className="lg:w-[15%] md:w-[25%] w-[70%] h-[25%] text-base font-normal flex justify-around pt-[1em]">
              <NavLink
                to="artissans/signup"
                className="lg:h-[50%] h-[100%] px-2  lg:rounded-[50px] rounded-xl border-2 border-pink900 text-center flex items-center justify-center text-white"
              >
                Artisan
              </NavLink>
              <NavLink
                to="customer/signups"
                className="lg:h-[50%] h-[100%]  px-2 lg:rounded-[50px] rounded-xl border-2 border-pink900 text-center flex items-center justify-center text-white"
              >
                Customer
              </NavLink>
            </div>
            <button className="px-4 py-2 rounded-md bg-pink900 text-white font-bold text-lg  relative top-7 md:top-0 md:bottom-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* our services */}

      <div className="md:h-[55vh] h-[40vh] bg-white w-[100%] flex flex-col items-center justify-around">
        <div className="text-3xl font-bold">Our Services</div>
        <div className="h-[60%] w-[100%] flex items-center justify-around md:text-base text-xs">
          <div className="h-[100%] lg:w-[20%] sm:w-[30%] w-[27%] shadow-2xl flex items-center justify-center">
            <div className="h-[60%] w-[60%] flex flex-col items-center justify-around text-center">
              <BsGearWideConnected className="text-skyBlue900 font-bold text-2xl" />
              Connecting you to your customers
            </div>
          </div>
          <div className="h-[100%] lg:w-[20%] sm:w-[30%] w-[27%] shadow-2xl flex items-center justify-center">
            <div className="md:h-[60%] h-[70%] md:w-[60%] w-[98%] flex flex-col items-center justify-around text-center">
              <BsGearWideConnected className="text-skyBlue900 font-bold text-2xl" />
              Connecting you as customer to your desire artisant
            </div>
          </div>
          <div className="h-[100%] lg:w-[20%] sm:w-[30%] w-[27%] shadow-2xl flex items-center justify-center">
            <div className="h-[60%] md:w-[60%] w-[98%] flex flex-col items-center justify-around text-center">
              <BsGearWideConnected className="text-skyBlue900 font-bold text-2xl" />
              Making sure your works are properly delivered
            </div>
          </div>
        </div>
      </div>

      {/* about us */}

      <div className="h-[60vh] w-[100%] bg-[#e6dede] flex items-center justify-center">
        <div className="aboutus h-[80%] w-[44%] "></div>
        <div className="md:h-[80%] h-[60%] w-[44%] flex flex-col items-center justify-around">
          <div className="md:w-[70%] w-[90%] text-black font-semibold md:text-base text-xs">
            <p className="text-2xl font-bold text-center">About Us</p>
            <p className="md:w-[90%] w-[100%] text-center">
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
            className="md:px-3 md:py-3 px-1 py-1 bg-pink900 font-bold text-white rounded-md"
          >
            Know more
          </NavLink>
        </div>
      </div>
      {/* contact us */}

      <div className="w-[100%] md:h-[70vh] h-[50vh] bg-skyBlue900 flex items-center justify-around">
        <div className="w-[50%] h-[70%] text-white md:pt-[4em]">
          <p className=" md:text-4xl font-bold">
            Book appointments on-the-go, and
          </p>
          <p className=" md:text-4xl font-bold">
            discover a world of expert services.
          </p>
          <p>Your satisfaction is our concern.</p>
          <div className="lg:w-[60%] w-[80%] flex md:items-center justify-between lg:flex-row flex-col sm:relative right-9 lg:right-0">
            <div className="lg:w-[40%] sm:w-[60%] w-[100%] flex items-center justify-between text-black font-medium sm:font-bold lg:top-0 top-4 relative">
              <NavLink>Artisan</NavLink>
              <NavLink>Customer</NavLink>
            </div>
            <button className="md:px-3 md:py-3 px-2 py-2  bg-pink900 text-white md:font-bold md:text-lg rounded-lg lg:top-0 top-8 relative">
              Get Started
            </button>
          </div>
        </div>
        <div className="toolstwo w-[40%] h-[80%]"></div>
      </div>

      <div className="lg:h-[100vh] bg-white h-[70vh] w-[100%] flex items-center md:justify-center justify-around">
        <div className="h-[45%] w-[50%] flex flex-col justify-around">
          <div>
            <b className="text-black md:text-4xl">Contact Us</b>
            <div>
              <p>
                We're always here to assist with concerns, questions and
                feedbacks you might have.
              </p>
              <p>Our top priority is your best interest.</p>
            </div>
          </div>
          <div className="md:w-[40%]  md:pr-8">
            <div className="md:flex flex-col items-center md:items-start justify-around w-[100%]">
              <div className="md:h-[6vh] h-[4vh] lg:w-[3vw] w-[10vw] bg-pink500 flex items-center justify-center">
                <MdOutlineMailOutline className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <b className="text-black font-bold">Email Us</b>
                <p>fasthands@gmail.com</p>
              </div>
            </div>
            <div className="md:flex flex-col items-center md:items-start justify-around w-[100%] pr-[3.5em]">
              <div className="md:h-[6vh] h-[4vh]  lg:w-[3vw] w-[10vw] bg-pink500 flex items-center justify-center">
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
        <div className="contact w-[35vw] md:h-[90%] h-[70%]"></div>
      </div>
    </>
  );
};

export default Home;
