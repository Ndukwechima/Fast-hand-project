import Logo from "../../assets/images/Logo.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Pajamas from "../../assets/pajamas.png";

const Footer = () => {
  return (
    <footer className=" foot w-[100%] bottom-0 left-0 right-0">
      <div className="w-[100%] h-[100%] bg-black bg-opacity-[0.8] ">
        <div className=" w-[96%] flex md:flex-row flex-col justify-between">
          <div className="py-[5em] px-[3em] md:w-[40%]">
            <div>
              <img src={Logo} width={100} alt="logo" />
            </div>

            <p className="text-[14px] text-white">
              Fasthands is a response to the gradual integration of all facets
              of the society into the digital space.{" "}
            </p>
            <p className="text-[14px] text-white">
              it is meant to give all Artisans and local producers the same
              platform and advantage of reach as the ICT sector.
            </p>
          </div>
          <div className="py-[5em] px-[3em] flex flex-col items-center justify-center">
            <h4 className="text-3xl text-center">Info</h4>
            <p className="text-white">About Us</p>
            <p className="text-white">Contact Us</p>
            <p className="text-white">Feedbacks</p>
          </div>
          <div className="py-[5em] md:px-[3em] px-[2em]">
            <h4 className="text-white py-1">
              Want to get updated with our services, add your email
            </h4>
            <div className="relative">
              <form action="" className="">
                <input
                  type="text"
                  className="py-2 px-10 bg-white rounded-full"
                  placeholder="Email"
                />
                <span className="bg-skyBlue900 py-1 px-4 text-white rounded-full absolute -ml-24 cursor-pointer  mt-2 text-[12px]">
                  Subscribe
                </span>
                <div className="flex">
                  <input type="checkbox" name="" id="" />
                  <span className="text-white py-1 text-[12px]">
                    I agree to my email being stored to receive the update
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center -mt-8">
          <div className="flex md:w-[10%] w-[30%] justify-between items-center">
            <img src={Facebook} alt="facebook" width={30} />
            <img src={Instagram} alt="" width={30} />
            <img src={Pajamas} alt="" width={30} />
          </div>
        </div>
        <div>
          <p className="text-center py-1">Stay Conncted</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
