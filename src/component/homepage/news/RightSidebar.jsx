'use client'

import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  const handleGoggleSignIn = async()=>{
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data,'data');
  }
  const handleGithubSignIn = async()=>{
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data,'data');
  }
  return (
    <div>
      <h1 className="text-[#403F3F] text-xl font-semibold mb-4">Login With</h1>
      <div className="flex flex-col gap-4">
        <button onClick={handleGoggleSignIn} className="btn border border-blue-500 text-blue-500">
            <FaGoogle /> Login with Google
        </button>
        <button onClick={handleGithubSignIn} className="btn ">
            <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
