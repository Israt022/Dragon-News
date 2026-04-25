import LeftSideBar from "@/component/homepage/news/LeftSideBar";
import RightSidebar from "@/component/homepage/news/RightSidebar";
import { getCategories, getCategoriesById } from "@/lib/data";
import React from "react";



const CategoryId = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getCategoriesById(id);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="col-span-6">
        <h1 className="text-[#403F3F] text-xl font-semibold">
          Dragon News Home
        </h1>
        <div className="space-y-4">
          {news.length > 0 ? news.map((n) => (
            <div key={n._id} className="p-3 border rounded-md">
              {n.title}
            </div>
          )) : <h2 className="flex justify-center items-center my-[30%] text-3xl font-bold text-blue-500">No News Found</h2>}
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default CategoryId;
