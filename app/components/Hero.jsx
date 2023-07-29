import React from "react";

const Hero = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 pt-14 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542831371-29b0f74f9713%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8fHwxNjkwNTUyMDMzfDA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dprogramming%26blend%3D000000"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Where Knowledge Knows
              <br class="hidden lg:inline-block" />
              No Boundaries
            </h1>
            <p class="mb-8 leading-relaxed">
              Welcome to Knowledge Avenue, where limitless learning
              possibilities await you. Embark on a journey of self-discovery and
              academic excellence with our diverse range of high-quality
              e-learning courses. Whether you're a student, a professional, or a
              lifelong learner, our platform is designed to empower you with the
              knowledge and skills to thrive in today's fast-paced world.
              Explore our comprehensive curriculum, engage with expert
              instructors, and embrace the joy of learning. Join us on this
              transformative educational adventure, and let's navigate the road
              to success together!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
