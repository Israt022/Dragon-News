import { getNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowLeft, FaEye, FaStar } from "react-icons/fa";

export const generateMetaData = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsById(id);

  return {
    title: news?.title,
    description: news?.details
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log("Params Res : ", id);
  const news = await getNewsById(id);
  // console.log("news : ", news);
  return (
    <div className="max-w-4xl mx-auto mb-15">
      <h1 className="text-xl my-4">Dragon News</h1>
      {/* Card */}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* Author */}
          <div className="flex flex-wrap bg-[#F3F3F3] p-4 justify-between">
            <div className="flex gap-2">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs text-gray-500">
                  {news.author?.published_date}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <CiBookmark className="text-2xl" />
              <CiShare2 className="text-2xl" />
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={300}
              className="w-full m-4"
            />
          </figure>
          <p className="mt-4 text-gray-500 mx-4 mb-4">{news.details}</p>

          <div className="flex flex-wrap justify-between items-center mx-4">
            <div className="flex gap-4 items-center">
              <p className="flex items-center gap-1 text">
                <FaStar className="text-yellow-500" size={25} />{" "}
                {news.rating.number}
              </p>
              <p className="flex items-center gap-1 text">
                <FaEye size={25} /> {news.total_view}
              </p>
            </div>
            <Link href={`/category/${news.category_id}`}>
              <button className="btn px-4 py-2 bg-[#D72050] text-white">
                <FaArrowLeft /> All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
