import Testing from "../../assets/testing.png";
import Comb from "../../assets/comb.png";
import Tool from "../../assets/tools2.png";
import { TiSpanner } from "react-icons/ti";
import { MdOutlineSettings } from "react-icons/md";
import { MdSettingsInputAntenna } from "react-icons/md";

const Services = () => {
  return (
    <>
      <section className="py-[10em] bg-white flex justify-center items-center">
        <section className="w-[80%]">
          <div className="flex justify-around items-center">
            <h1 className="text-[4rem] font-bold text-pink900">Our services</h1>
            <div className="w-[50%] flex justify-around">
              <img src={Testing} alt="services1" width={300} className="" />
            </div>
            <img src={Comb} alt="services2" width={300} className="mt-[12em]" />
          </div>
        </section>
      </section>
      <section className="w-[100%] flex justify-center items-center py-9 bg-white">
        <section className="w-[80%] flex justify-between items-center">
          <div className="bg-white shadow-md w-[18em] py-12 flex flex-col justify-center items-center">
            <TiSpanner className="text-[2em] text-skyBlue900" />
            <p className="text-gray-700 text-center">
              Connecting you to your customers.
            </p>
          </div>
          <div className="bg-white shadow-md w-[18em] py-12 flex flex-col justify-center items-center">
            <MdOutlineSettings className="text-[2em] text-skyBlue900" />
            <p className="text-gray-700 text-center">
              Connecting you as a customer your desired artisant.
            </p>
          </div>
          <div className="bg-white shadow-md  w-[18em] py-12 flex flex-col justify-center items-center">
            <MdSettingsInputAntenna className="text-[2em] text-skyBlue900" />
            <p className="text-gray-700 text-center">
              Making sure your works are properly delivered.
            </p>
          </div>
        </section>
      </section>
      <section className="w-[100%] bg-skyBlue900 py-8 flex relative">
        <section className="flex justify-between items-center w-[100%]">
          <div className="w-[60%] bg-skyBlue900 py-[8.5em] px-[3em] z-50 shadow-sm">
            <div>
              <h1 className="w-[60%] text-white text-3xl font-bold  ">
                Book appointments on-the-go, and discover a world of expert
                services.
              </h1>
              <p className="text-white">Your satisfaction is our concern</p>
            </div>
            <div>
              <div className="w-[50%] flex justify-between items-center">
                <div className="w-[40%] flex justify-between items-center">
                  <p className="text-gray-900">Artisan</p>
                  <p className="text-gray-900">Customer</p>
                </div>
                <div>
                  <button className="text-white bg-pink900 py-[0.4em] px-6 rounded-sm font-bold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] py-[2em] flex justify-items-end justify-end">
            <img src={Tool} alt="tools" className="w-[50vw] h-[55vh]" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Services;
