import React from "react";
import FeatureCard from "./FeatureCard";

function FeatureSection() {
  return (
    <section className="flex z-0 flex-col px-24 pt-32 pb-16 w-full bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col items-start self-center text-center max-w-[800px] w-[800px] max-md:max-w-full">
        <h2 className="text-6xl leading-[67px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          <span style={{ fontStyle: "italic", color: "rgba(233,147,133,1)" }}>
            Total wealth command
          </span>{" "}
          for every dollar and goal
        </h2>
        <p className="mt-6 text-xl leading-8 font-[350] text-stone-500 max-md:max-w-full">
          We offer a range of options tailored to your risk appetite, blending
          equities, bonds, and alternatives to diversify and manage risk.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 items-start mt-16 w-full max-md:mt-10 max-md:grid-cols-1">
        <FeatureCard
          title={
            <span style={{ fontWeight: 400 }}>
              Explore{" "}
              <span style={{ fontWeight: 400, color: "rgba(17,17,17,1)" }}>
                expertly managed portfolios
              </span>
            </span>
          }
          description="For investors seeking a straightforward, diversified approach managed by experts."
        />

        <FeatureCard
          title="Start CPF & SRS investing"
          description="For individuals looking to grow their mandatory retirement savings through investments."
        />

        <FeatureCard
          title="Browse exclusive offerings"
          description="For investors seeking differentiated strategies and potentially higher returns beyond core markets."
          icon="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/bdabae4fa9640aa0bfab9b1f252819d301c7cb77?placeholderIfAbsent=true"
        />

        <FeatureCard
          title="View Accredited Investor strategies"
          description="For sophisticated investors meeting accredited investor criteria looking for advanced portfolio construction."
        />
      </div>

      <FeatureCard
        title="Want to select your own funds?"
        description="For experienced investors who prefer hands-on control and selection of individual funds."
        isWhite={true}
        className="mt-6 w-full"
      />
    </section>
  );
}

export default FeatureSection;
