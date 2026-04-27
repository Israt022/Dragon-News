"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const [isShowPassword,setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginFunc = async (data) => {
    // e.preventDefault();
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Sign in successful");
    }
  };
  return (
    <div className="container  mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
      <div className="p-14 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-4">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              {...register("email", {
                required: "Password Field is required",
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
            className="absolute right-2 top-4"
              onClick={()=>setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye size={16}/> : <FaEyeSlash size={16}/> }
            </span>
            {errors.password && (
              <p className="text-red-500 text-center p-2 font-semibold">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn w-full btn-neutral text-white">Login</button>
        </form>
        <p className="mt-4 text-center">
          Don't have account?{" "}
          <Link href={"/register"} className="text-red-500 ">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
