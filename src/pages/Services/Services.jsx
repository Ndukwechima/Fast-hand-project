import Testing from "../../assets/testing.png";
import Comb from "../../assets/comb.png";
import Tool from "../../assets/tools2.png";
import { TiSpanner } from "react-icons/ti";
import { MdOutlineSettings } from "react-icons/md";
import { MdSettingsInputAntenna } from "react-icons/md";

const Services = () => {
  return (
    <>
      <section className="py-[10em] bg-white flex lg:flex-row flex-col justify-center items-center">
        <h1 className="md:text-[4rem] text-3xl font-bold text-pink900 lg:hidden block lg:mt-0 mt-10">
          Our services
        </h1>
        <section className="w-[80%]">
          <div className="flex justify-around items-center">
            <h1 className="text-[4rem] font-bold text-pink900 hidden lg:block">
              Our services
            </h1>
            <div className="w-[100%] md:w-[50%] flex justify-around lg:mt-0 mt-10">
              <img src={Testing} alt="services1" width={300} className="" />
            </div>
            <img
              src={Comb}
              alt="services2"
              lg:width={300}
              md:width={100}
              width={125}
              className="mt-[12em]"
            />
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
      <section className="w-[100%] bg-skyBlue900 md:py-8 flex relative">
        <section className="flex justify-between items-center w-[100%]">
          <div className="w-[60%] bg-skyBlue900 py-[8.5em] md:px-[3em] px-3 shadow-sm">
            <div>
              <h1 className="w-[60%] text-white md:text-3xl font-bold  ">
                Book appointments on-the-go, and discover a world of expert
                services.
              </h1>
              <p className="text-white">Your satisfaction is our concern</p>
            </div>
            <div>
              <div className="md:w-[50%] w-[100%] flex lg:flex-row flex-col justify-between lg:items-center">
                <div className="lg:w-[40%] md:w-[75%] md:font-bold lg:font-normal w-[70%] flex justify-between items-center">
                  <p className="text-gray-900">Artisan</p>
                  <p className="text-gray-900">Customer</p>
                </div>
                <div>
                  <button className="text-white bg-pink900 py-[0.4em] md:px-6 px-1 rounded-sm font-bold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] py-[2em] flex justify-items-end justify-end">
            <img src={Tool} alt="tools" className="w-[50vw] lg:h-[55vh]" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Services;
