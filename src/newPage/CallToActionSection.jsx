import React from "react";

function CallToActionSection() {
  return (
    <section className="flex relative z-0 flex-col w-full min-h-[1046px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/5024aafa776109fa1de7a9094254a68f9f97d3dd?placeholderIfAbsent=true"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <div className="flex overflow-hidden relative flex-col justify-center px-64 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-6xl text-center text-white leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Ready to embrace a personalised wealth experience?
          </h2>
          <button className="flex gap-2 items-center self-center px-8 py-4 mt-12 text-base text-cyan-900 bg-white font-[350] rounded-[56px] max-md:px-5 max-md:mt-10">
            <span className="self-stretch my-auto">Get in touch</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/ce3c491e9aed7398abc72ca5868dc39795ab51e4?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Arrow icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
