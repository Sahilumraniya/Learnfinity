"use client";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { course } from "@/data/CourseData";
import Image from "next/image";
import Link from "next/link";

const Course = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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
  return (
    <div id="course" className="w-full h-[25%] bg-gray-900 py-7">
      <div>
        <h4 className="text-center text-white text-4xl my-11">Course</h4>
      </div>
      <div className="flex justify-center items-center relative">
        <input
          className="outline-none rounded-md w-[25%] px-3 py-2 text-xl"
          placeholder="Serach Course"
          type="text"
          value={query}
          onChange={handleSearch}
        />
        <BiSearchAlt className="relative text-2xl -left-8 cursor-pointer" />
        <ul className="absolute bg-white rounded-md top-[44px] ">
          {results.map((item, i) =>
            (!typeof window &&
              localStorage.getItem("user") &&
              item.course_type == "premium") ||
            item.course_type == "free" ? (
              <Link href={`/course/${item.id}`}>
                <li
                  className={`${
                    i != results.length - 1 ? "border-b-2" : ""
                  }  px-2 py-3`}
                  key={item.id}
                >
                  {item.course_name}
                </li>
              </Link>
            ) : (
              <li
                className={`${
                  i != results.length - 1 ? "border-b-2" : ""
                }  px-2 py-3 line-through`}
                key={item.id}
              >
                {item.course_name}
              </li>
            )
          )}
        </ul>
      </div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {course.map((c, index) => {
              return (
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                    <Image
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={c.image_link}
                      alt="blog"
                      width={100}
                      height={100}
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-indigo-400 text-xs font-medium title-font">
                        {c.course_type}
                      </h2>
                      <h1 class="title-font text-lg font-medium text-white mb-3">
                        {c.course_name}
                      </h1>
                      <p class="leading-relaxed mb-3">{c.description}</p>
                      <div class="flex items-center flex-wrap ">
                        <samp class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                          {(!typeof window &&
                            localStorage.getItem("user") &&
                            c.course_type == "premium") ||
                          c.course_type == "free" ? (
                            <Link href={`/course/${c.id}`}>Learn More</Link>
                          ) : (
                            "Login for accessing premium course"
                          )}
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </samp>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
