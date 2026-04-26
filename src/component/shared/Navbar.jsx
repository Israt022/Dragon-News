'use client'

import Link from "next/link";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
const Navbar = () => {
  const { data: session,isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user,isPending,"user");
  return (
    <div className="flex justify-between container mx-auto mt-6">
      <div></div>
      <ul className="flex gap-3">
        <li className="text-gray-400">
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li className="text-gray-400">
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li className="text-gray-400">
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      {isPending ? <span className="loading loading-dots loading-md"></span> 
      : user ? <div className="flex items-center gap-3">
        <h2>Hello, {user.name}</h2>
        <Image src={ user?.image || userAvatar} width={40} height={40} alt="User Image" className="rounded-full"/>
        <button onClick={async()=>await authClient.signOut()} className="btn bg-gray-900 text-white">Logout</button>
      </div> :
      <Link href={"/login"}>
        <button className="btn bg-gray-900 text-white">Login</button>
      </Link>}
    </div>
  );
};

export default Navbar;
