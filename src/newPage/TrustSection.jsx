import React from "react";

function TrustSection() {
  return (
    <section className="flex z-0 flex-col items-center px-24 pt-16 pb-32 w-full bg-white border-b border-solid border-b-[color:var(--Off-White,#F3F1F1)] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="max-w-full text-center text-neutral-900 w-[800px]">
        <h2 className="text-6xl leading-[67px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          <span style={{ fontStyle: "italic", color: "rgba(233,147,133,1)" }}>
            Built on trust.
          </span>
          Proven over time.
        </h2>
        <p className="mt-6 text-xl leading-8 font-[350] text-neutral-900 max-md:max-w-full">
          GROW isn't just another investment platform. Backed by Singlife and
          Sumitomo, we bring over 20 years of expertise to help you invest with
          confidence. As the first Investment Administrator under CPFIS, we've
          earned trust through time-tested strategies—reflected in our $3
          billion AUA.
        </p>
      </div>

      <div className="flex overflow-hidden relative flex-col justify-center px-16 py-52 mt-16 w-full max-w-[1248px] min-h-[472px] rounded-[30px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/0d7482ed7a7ca7a990f925a1723d7b9235f05f80?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        <div className="flex relative flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/24d86db4cce86618c2e2c74b7188e2a9ab12bc0e?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-[3.6] min-w-60 w-[259px]"
            alt="Partner logo 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/fd4bac713264c46082950ee847a38737b97f3e74?placeholderIfAbsent=true"
            className="object-contain self-stretch my-auto aspect-[6.25] min-w-60 w-[351px]"
            alt="Partner logo 2"
          />
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
