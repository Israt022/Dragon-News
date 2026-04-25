import Link from "next/link";
import React from "react";

const LeftSideBar = ({categories,activeId}) => {
  return (
    <div>
      <h1 className="text-[#403F3F] text-xl font-semibold">All Category</h1>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.news_category.map((category) => (
          <li
            key={category.category_id}
            className={`${activeId === category.category_id && "bg-slate-100"} rounded-md text-center text-lg text-[#9F9F9F]`}
          >
            <Link className="block p-2" href={`/category/${category.category_id}`}>{category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
