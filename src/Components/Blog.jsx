import { button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Blog() {
  const allBlogs = useLoaderData();
  const [blogsToShow, setBlogsToShow] = useState([]);
  const [page, setPage] = useState(10);
  const array = Array.from({ length: 10 }, (_, index) => index + 1);

  function handlePagination(value) {
    setBlogsToShow(allBlogs.slice(value - 10, value));
  }

  useEffect(() => {
    setBlogsToShow(allBlogs.slice(0, 10));
  }, [allBlogs]);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
        {blogsToShow?.map((val) => (
          <div key={val.id} className="mb-4 border-b pb-4">
            <h4 className="text-lg font-semibold">{val.title}</h4>
            <p className="text-gray-700">{val.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {array.map((val, index) => (
          <button
            key={index}
            onClick={() => handlePagination(val * 10)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}
