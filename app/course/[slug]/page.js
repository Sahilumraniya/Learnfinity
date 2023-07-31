import Header from "@/app/components/Header";
import { course } from "@/data/CourseData";
import Image from "next/image";
import React from "react";
import { BiSolidVideos } from "react-icons/bi";

const page = async ({ params }) => {
  // console.log(params);
  const { props } = await getCourse(params);
  // console.log(props);
  const data = props.data;

  return (
    <div>
      <Header />
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="flex flex-col text-center w-full pt-[5%]">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            {data.course_name}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h1>Leature Links</h1>
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              {data.video_links.map((link, i) => {
                return (
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      {i != data.video_links.length - 1 ? (
                        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <a href={link} target="_blank">
                        <BiSolidVideos />
                      </a>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-white my-2 tracking-wider">
                        <a href={link} target="_blank">
                          {" "}
                          Leature {i + 1}{" "}
                        </a>
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              class="lg:w-3/5 md:w-1/2 object-cover object-center md:mt-0 mt-12"
              href={`${data.video_links[0]}`}
              target="_blank"
            >
              <Image
                class="w-full object-cover object-center rounded-lg"
                src={data.image_link}
                width={100}
                height={100}
                alt="step"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

async function getCourse(params) {
  const slug = params.slug;
  // console.log(slug);
  let data = course.filter((c) => {
    if (c.id == slug) {
      return c;
    }
  });
  data = data[0];

  return {
    props: { data },
  };
}

export async function generateStaticParams() {
  return course.map((c) => ({
    slug: c.id.toString(),
  }));
}

export default page;
