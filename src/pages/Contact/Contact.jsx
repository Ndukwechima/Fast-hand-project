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
      <section className="contactpage w-[100%] ">
        <div className=" bg-skyBlue700 bg-opacity-[0.2]">
          <div className=" py-[5em]  bg-black  mt-[6em] w-[100%] bg-opacity-[0.5] flex items-center justify-center">
            <section className="w-[90%]">
              <div>
                <h2 className="text-center text-white text-2xl py-10 md:mt-[2em]  font-bold">
                  Get In Touch
                </h2>
              </div>
              <section className=" w-[100%] flex md:flex-row flex-col items-center  justify-around">
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
          </div>
        </div>
      </section>
      <section className=" w-[100%] bg-white flex items-center justify-center">
        <section className="w-[100%] md:w-[80%] lg:w-[60%] flex flex-col items-center justify-center">
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
            className="bg-gray-200 flex flex-col items-center justify-around h-[70vh] lg:h-[90vh] w-[90%] rounded-xl"
          >
            <input
              type="name"
              placeholder="Full Name"
              className="pl-10 w-[80%] h-[6vh] rounded-md bg-white outline-none"
            />
            <div className="w-[80%] flex items-center justify-between">
              <input
                type="email"
                placeholder="Email"
                className="pl-10 w-[45%] h-[6vh] rounded-md bg-white outline-none"
              />
              <input
                type="phone-number"
                placeholder="Phone"
                className="pl-10 w-[45%] h-[6vh] rounded-md bg-white outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="pl-10 w-[80%] h-[6vh] rounded-md bg-white outline-none"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Subject......"
              className="pl-10 w-[80%] h-[40vh] rounded-md bg-white outline-none pt-4"
            ></textarea>
          </form>
        </section>
      </section>
      <section className="bg-white py-16">
        <div>
          <div className="text-2xl text-pink900 text-center">
            <h2 className=" text-pink900">Follow us on social media</h2>
          </div>
          <div className="flex justify-around md:justify-center items-center ">
            <div className="lg:w-[10%] md:w-[20%] w-[50%] flex justify-between  items-center py-4">
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
