import { IoSearch } from "react-icons/io5";
import Black from "../../assets/black.jpg";

const SearchCustomer = () => {
  return (
    <>
      <section className=" bg-white ">
        <section className=" w-[100%] py-[10.6em] bg-white flex justify-center items-center ">
          <section className="w-[80%]">
            <div>
              <h1 className="text-center text-3xl font-bold text-skyBlue900">
                Lets help you locate your desired Artisan
              </h1>
            </div>
            <div className="flex justify-center items-center mt-[3em]">
              <input
                type="text"
                placeholder="Search for Artisan... "
                className="w-[35em] h-[2em] m-1 bg-gray-200  rounded-full placeholder:px-2 placeholder:italic outline-none"
              />
              <IoSearch className="text-[1em] -ml-8 text-pink900 " />
            </div>
          </section>
        </section>
        <section className="w-[100%] flex justify-center items-center py-8">
          <section className="w-[60%] ">
            <div className="flex justify-center items-center pb-10">
              <h1 className="text-2xl text-gray-700 font-bold">
                Spotlight Artisans
              </h1>
            </div>
            <div className=" flex justify-center items-center">
              <img
                src={Black}
                alt="image-black-lady"
                width={800}
                className="h-[400px] rounded-3xl"
              />
            </div>
          </section>
          <div className="absolute z-50 -ml-[12em] mt-8">
            <div>
              <h1 className="text-white text-2xl font-bold">
                Spotlight on
                <span className="text-pink900 text-2xl font-bold">
                  AMY BEAUTY SALOON
                </span>
              </h1>
              <div className="w-[40%]">
                <p className="text-gray-700">
                  Professional hair dresser Makeup artist and Skin care
                  therapist
                </p>
              </div>
            </div>
            <div className=" w-[50%] flex justify-between mt-4">
              <button className="bg-skyBlue500 py-[0.4em] px-[1em] text-white rounded-md shadow-md ">
                Profile
              </button>
              <button className="bg-skyBlue500 py-[0.4em] px-[1em] text-white rounded-md shadow-md">
                Book Now
              </button>
            </div>
          </div>
        </section>
      </section>
      <section className=" bg-white ">
        <section className="w-[100%] flex justify-center items-center">
          <section className="w-[96%]">
            <div className="flex justify-center items-center mt-[3em] text-gray-800 text-2xl font-semibold ">
              <h1>Best Artisans of the month</h1>
            </div>
            <section className="flex justify-center items-center">
              <section className="w-[96%] flex justify-between flex-wrap min-h-screen space-y-8 mt-10">
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%] ">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="w-[23vw] flex justify-center items-center shadow-md">
                  <figure className=" flex justify-center items-center p-6 space-x-4 ">
                    <img
                      src={Black}
                      alt="img"
                      className="w-16 h-16 rounded-full"
                    />
                    <figcaption className="w-[33%]">
                      <p className="text-pink900 font-bold">Johns Smith</p>
                      <p className="text-gray-700">
                        Looks first,we prioritize your concerns
                      </p>
                      <button className="bg-skyBlue900 py-1 px-6 rounded-md text-white">
                        Profile
                      </button>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SearchCustomer;
