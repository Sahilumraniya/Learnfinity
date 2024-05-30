"use client";

import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { course } from "@/data/CourseData";
import Image from "next/image";
import Link from "next/link";

const Course = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      const filteredItems = course.filter(
        (item) =>
          item.course_name.toLowerCase().includes(value.toLowerCase()) ||
          item.description.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredItems);
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user")) {
        setUser(true);
      }
    }
  }, []);

  return (
    <div id="course" className="w-full h-auto bg-gray-900 py-7">
      <div>
        <h4 className="text-center text-white text-4xl my-11">Course</h4>
      </div>
      <div className="flex justify-center items-center relative">
        <input
          className="outline-none rounded-md w-[25%] px-3 py-2 text-xl"
          placeholder="Search Course"
          type="text"
          value={query}
          onChange={handleSearch}
        />
        <BiSearchAlt className="relative text-2xl -left-8 cursor-pointer" />
        <ul className="absolute bg-white rounded-md top-[44px] w-[25%]">
          {results.map((item, i) => (
            (user && item.course_type === "premium") || item.course_type === "free" ? (
              <li key={item.id} className={`${i !== results.length - 1 ? "border-b-2" : ""} px-2 py-3`}>
                <Link href={`/course/${item.id}`}>{item.course_name}</Link>
              </li>
            ) : (
              <li key={item.id} className={`${i !== results.length - 1 ? "border-b-2" : ""} px-2 py-3 line-through`}>
                {item.course_name}
              </li>
            )
          ))}
        </ul>
      </div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {course.map((c) => (
              <div className="p-4 md:w-1/3" key={c.id}>
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Link href={`${(!user && c.course_type === "premium") ? "/login" : `/course/${c.id}`}`} target="_blank">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={c.image_link}
                      alt={c.course_name}
                      width={100}
                      height={100}
                    />
                  </Link>
                  <div className="p-6">
                    <h2 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      {c.course_type}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {c.course_name}
                    </h1>
                    <p className="leading-relaxed mb-3">{c.description}</p>
                    <div className="flex items-center flex-wrap">
                      <span className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        {(user && c.course_type === "premium") || c.course_type === "free" ? (
                          <Link href={`/course/${c.id}`}>Learn More</Link>
                        ) : (
                          <Link href={`/login`}>Login for access</Link>
                        )}
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
