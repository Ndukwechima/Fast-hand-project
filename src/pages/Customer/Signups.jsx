import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneno: "",

      location: "",
      password: "",
      confirm: "",
      nin: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Enter your name"),
      phoneno: Yup.number()
        .max(11, "invalid number")
        .required("Enter your telephone number"),
      name: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Enter your name"),
      password: Yup.number()
        .max(25, "Must be 25 characters or less")
        .required("Enter your name"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  console.log(formik.values);

  return (
    <>
      <div className="form h-[100vh]">
        <div className="h-[100%]  flex">
          <div className="w-[50%] h-[100%] flex flex-col items-center justify-between">
            <div></div>
            <div className="h-[20%] text-white relative right-[9em] bottom-10">
              <p className="font-extrabold">Looking for an Artisan?</p>
              <div>
                <p>Register to get access to Artisans.</p>
                <p>Unlock endless services, One platform.</p>
              </div>
              <div className=" flex justify-between w-[20%]">
                <MdOutlineFacebook className="bg-[blue] text-2xl" />
                <FaInstagramSquare className="bg-[#eb3d5a] text-2xl" />
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex items-center justify-center">
            <div className="w-[100%] h-[100%] flex items-center justify-center bg-skyBlue900 bg-opacity-[0.3]">
              <form
                className="w-[80%] h-[90%] flex flex-col justify-around items-center text-white"
                onSubmit={formik.handleSubmit}
              >
                <p className="text-3xl mr-[9.2em] w-[50%]">Sign Up</p>
                <div className="w-[100%] flex flex-col">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="border-b border-white outline-none bg-transparent"
                  />
                  {formik.errors.name ? (
                    <p className="text-[red]">{formik.errors.name}</p>
                  ) : null}
                </div>
                <div className="w-[100%] flex flex-col">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="border-b border-white outline-none bg-transparent"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="w-[100%] flex flex-col">
                  <label htmlFor="number">Phone No:</label>
                  <input
                    type="number"
                    id="phoneno"
                    name="phoneno"
                    onChange={formik.handleChange}
                    value={formik.values.phoneno}
                    className="border-b border-white outline-none bg-transparent"
                  />
                </div>

                <div className="w-[100%] flex flex-col">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    className="border-b border-white outline-none bg-transparent"
                  />
                </div>
                <div className="w-[100%] flex flex-col">
                  <label htmlFor="'password">Password:</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="border-b border-white outline-none bg-transparent"
                  />
                </div>
                <div className="w-[100%] flex flex-col">
                  <label htmlFor="confirm">Confirm Password:</label>
                  <input
                    type="text"
                    id="confirm"
                    name="confirm"
                    onChange={formik.handleChange}
                    value={formik.values.confirm}
                    className="border-b border-white outline-none bg-transparent"
                  />
                </div>

                <div className="w-[100%] flex flex-col">
                  <label htmlFor="nin">NIN:</label>
                  <input
                    type="number"
                    id="nin"
                    name="nin"
                    onChange={formik.handleChange}
                    value={formik.values.nin}
                    className="border-b border-white outline-none bg-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="border-2 border-skyBlue900 py-1 w-[15%] rounded-md"
                >
                  Sign up
                </button>
                <p>
                  Already have an account?{" "}
                  <NavLink
                    to="/customer/logins"
                    className="text-skyBlue900 font-semibold"
                  >
                    Sign In
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
