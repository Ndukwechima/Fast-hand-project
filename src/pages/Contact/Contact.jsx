import {
  MdOutlineEmail,
  MdOutlineLocalPhone,
  MdOutlineSocialDistance,
  MdOutlineLocationOn,
} from "react-icons/md";

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import Map from "../../assets/map.png";

const Contact = () => {
  return (
    <>
      <section className="w-[100%] py-[5em]  bg-skyBlue700 flex items-center justify-center mt-[6em]">
        <section className="w-[90%]">
          <div>
            <h2 className="text-center text-white text-2xl py-10 mt-[2em]  font-bold">
              Get In Touch
            </h2>
          </div>
          <section className=" w-[90%] flex justify-around">
            <div className="">
              <div className="flex flex-col items-center">
                <div className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center">
                  <MdOutlineEmail className="text-gray-500" />
                </div>
                <h4 className="text-white font-bold">Email</h4>
                <p className="text-white">Official Emails</p>
                <p className="text-white">abigailnwadike@gmail.com</p>
                <p className="text-white">abigailnwadike@gmail.com</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center">
                  <MdOutlineLocalPhone className="text-gray-500" />
                </div>
                <h4 className="text-white  font-bold">Phone</h4>
                <p className="text-white">Management Desk</p>
                <p className="text-white">08059941818</p>
                <p className="text-white">08142920154</p>
                <p className="text-white">Managers No</p>
                <p className="text-white">08059941818</p>
                <p className="text-white">08142920154</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center">
                  <MdOutlineSocialDistance className="text-gray-500" />
                </div>
                <h4 className="text-white">Social Media</h4>
                <div>
                  <i></i>
                  <p className="text-white">FastHands Inc</p>
                </div>
                <div>
                  <i></i>
                  <p className="text-white">FastHands Inc</p>
                </div>
                <div>
                  <i></i>
                  <p className="text-white">FastHands Inc</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center">
                  <MdOutlineLocationOn className="text-gray-500" />
                </div>
                <h4 className="text-white  font-bold">Location</h4>
                <p className="text-white">No 17 LearnFactory Brass</p>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className=" w-[100%] bg-white flex items-center justify-center">
        <section className="w-[60%]">
          <div className="py-10">
            <h2 className="text-center text-2xl text-pink900 font-bold">
              Send us a message
            </h2>
            <p className="text-center text-black py-1">
              Have a question, suggestion or just want to say hello? We’d love
              to hear from you
            </p>
          </div>
          <form
            action=""
            className="bg-gray-200 flex flex-col items-center justify-center py-6 "
          >
            <div>
              <input
                className="w-[32.2em] h-[2em] m-1 bg-white rounded-md placeholder:px-2 outline-none "
                type="text"
                placeholder="Full Name"
              />
              <br />
              <div className="mt-4">
                <input
                  className="w-[15.2em] h-[2em]  ml-[2px]  bg-white  rounded-md placeholder:px-2 outline-none"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-[16.2em] h-[2em]  ml-[14px] bg-white rounded-md placeholder:px-2 outline-none"
                  type="tel"
                  placeholder="Phone"
                />
              </div>
              <br />
              <input
                className="w-[32.2em] h-[2em]  m-1 bg-white outline-none rounded-md placeholder:px-2"
                type="text"
                placeholder="subject"
              />
              <br />
              <div className="flex justify-center items-center">
                <textarea
                  className="bg-white  outline-none rounded-md w-[32.2em] h-[12em] placeholder:px-2 mt-4"
                  placeholder="Message..."
                />
              </div>
              <br />
              <button className="py-1 px-7 bg-skyBlue900 text-white rounded-md ml-2">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </section>
      <section className="bg-white py-16">
        <div>
          <div className="text-2xl text-pink900 text-center">
            <h2 className=" text-pink900">Follow us on social media</h2>
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-[10%] flex justify-between  items-center py-4">
              <div className="bg-skyBlue900 py-2 px-2 rounded-full">
                <CiFacebook className="text-white" />
              </div>
              <div className="bg-skyBlue900 py-2 px-2 rounded-full">
                <FaInstagram className="text-white" />
              </div>
              <div className="bg-skyBlue900 py-2 px-2 rounded-full">
                <FaXTwitter className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <section className="w-[100%] flex justify-center items-center">
          <div className="w-[60%] py-24 ">
            <img src={Map} alt="Map" className=" rounded-xl" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
