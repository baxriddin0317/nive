import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute -translate-y-full left-1/2 -translate-x-1/2 -z-10 max-w-96 w-full h-48 md:max-w-[942px] md:h-[613px] rounded-full bg-brand-orange blur-[136px]"></div>
      <div className="max-w-6xl mx-auto px-4 lg:px-10 pt-32 pb-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-normal mt-2">
          NYC Resy Restaurant Reservation <br /> Guide
        </h1>
        <p className="text-lg md:text-xl mt-3">
        A reference guide for when reservations are released at popular New York City restaurants.
        </p>
      </div>
    </section>
  );
};

export default Hero;
