import React from "react";

function FeatureCard({ title, description, icon, isNew, isWhite }) {
  return (
    <div
      className={`flex justify-between items-start p-8 rounded-3xl border border-solid ${isWhite ? "bg-white" : "bg-zinc-100"} border-[color:var(--Off-White,#F3F1F1)] max-md:px-5`}
    >
      <div className="flex-1 pr-8">
        <h3
          className={`text-2xl leading-none ${isWhite ? "text-neutral-900" : "text-neutral-900"}`}
        >
          {icon && (
            <span className="flex gap-2 items-center">
              <img
                src={icon}
                className="object-contain w-8 aspect-square"
                alt="Feature icon"
              />
              <span className="text-neutral-900">
                {title}
              </span>
            </span>
          )}
          {!icon && title}
        </h3>
        <p
          className={`mt-3 text-base leading-6 font-[350] ${isWhite ? "text-neutral-900" : "text-stone-500"}`}
        >
          {description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <div className="flex gap-1 justify-center items-center w-12 h-12 bg-rose-400 aspect-[1/1] rounded-[48px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/2cfdbd727b4cc0aaf1028d1a1eb4c7e6ce27bdc6?placeholderIfAbsent=true"
            className="object-contain w-5 aspect-square"
            alt="Arrow icon"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
