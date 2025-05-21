import React from "react";

function AdviserSection() {
  return (
    <section className="flex relative z-0 flex-col px-24 pb-24 w-full text-white min-h-[829px] pt-[464px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img
        src="/mantab.png"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <div className="relative w-full max-md:max-w-full">
        <h2 className="text-6xl leading-tight max-md:max-w-full max-md:text-4xl">
          Stronger advisers. Smarter investments.
        </h2>
        <p className="mt-6 text-xl leading-8 font-[350] max-md:max-w-full">
          The right advice makes all the difference. With ELEVATE, your adviser
          gains the insights, skills, and strategies needed to help you invest
          with confidence. A GROW-coded adviser isn't just an adviser—they're a
          lifelong financial partner, constantly learning, evolving, and focused
          on growing your wealth.
        </p>
      </div>
      <button className="flex overflow-hidden relative flex-col gap-2 items-center px-8 py-4 mt-8 max-w-full text-base aspect-[4.982] font-[350] rounded-[56px] w-[279px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/349e5bbcd43805578a138142cb11f14539c993d3?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
          alt="Button background"
        />
        <span className="relative self-stretch my-auto">
          How we enable advisers
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/113da3c20f07c595b3022329dce38d133685dece?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Arrow icon"
        />
      </button>
    </section>
  );
}

export default AdviserSection;
