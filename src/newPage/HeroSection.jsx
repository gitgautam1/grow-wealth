import React from "react";

function HeroSection() {
  return (
    <section className="flex relative z-0 flex-col justify-center w-full min-h-[960px] max-md:max-w-full">
      <img
        src="/hero.png"
        className="object-cover absolute inset-0 size-full"
        alt="Hero background"
      />
      <div className="overflow-hidden relative px-24 py-64 w-full min-h-[856px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center w-full text-center text-white max-md:max-w-full">
          <h1 className="text-7xl font-bold leading-[86px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            Simplify wealth, <br />
            achieve what's next.
          </h1>
          <p className="mt-8 text-xl leading-8 font-[350] w-[720px] max-md:max-w-full">
            Personalized guidance from trusted advisers transforms the world of
            investing into an accessible and empowering journey.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/fa06d7bf062cd6e2f0d4cdd4104528f98e62e415?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-36 aspect-[3.6]"
            alt="Partner logo 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/07c9003bce8853a29ebddeb75e3d80ee07eaf06e?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-[6.25] w-[200px]"
            alt="Partner logo 2"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
