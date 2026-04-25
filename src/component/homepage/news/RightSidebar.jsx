import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h1 className="text-[#403F3F] text-xl font-semibold mb-4">Login With</h1>
      <div className="flex flex-col gap-4">
        <button className="btn border border-blue-500 text-blue-500">
            <FaGoogle /> Login with Google
        </button>
        <button className="btn ">
            <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
