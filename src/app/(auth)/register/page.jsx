"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [isShowPassword,setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegisterFunc = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/login",
    });

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Sign up successful");
    }
  };
  return (
    <div className="container  mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
      <div className="p-14 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-4">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              {...register("name", {
                required: "Name Field is required",
              })}
              placeholder="Type your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-center p-2 font-semibold">
                {errors.name.message}
              </p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              {...register("photo", {
                required: "Photo Field is required",
              })}
              placeholder="Type your Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500 text-center p-2 font-semibold">
                {errors.photo.message}
              </p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              {...register("email", {
                required: "Email Field is required",
              })}
              placeholder="Type your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-center p-2 font-semibold">
                {errors.email.message}
              </p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? 'text' :"password"}
              className="input"
              {...register("password", {
                required: "Password Field is required",
              })}
              placeholder="Type your password"
            />
            <span
              className="absolute right-10 top-4"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-center p-2 font-semibold">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn w-full btn-neutral text-white">
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have account?{" "}
          <Link href={"/login"} className="text-red-500 ">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
