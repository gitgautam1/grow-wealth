import React from "react";

function FeatureCard({ title, description, icon, isNew, isWhite }) {
  return (
    <article
      className={`flex flex-wrap flex-1 shrink gap-8 items-start p-8 rounded-3xl border border-solid basis-0 ${isWhite ? "bg-white" : "bg-zinc-100"} border-[color:var(--Off-White,#F3F1F1)] min-w-[420px] max-md:px-5 max-md:max-w-full`}
    >
      <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
        <h3
          className={`text-2xl leading-none ${isWhite ? "text-neutral-900" : "text-neutral-900"} max-md:max-w-full`}
        >
          {icon && (
            <span className="flex gap-2 justify-center items-center w-full">
              <img
                src={icon}
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                alt="Feature icon"
              />
              <span className="flex-1 shrink self-stretch my-auto basis-0 text-neutral-900 max-md:max-w-full">
                {title}
              </span>
            </span>
          )}
          {!icon && title}
        </h3>
        <p
          className={`mt-3 text-base leading-6 font-[350] ${isWhite ? "text-neutral-900" : "text-stone-500"} max-md:max-w-full`}
        >
          {description}
        </p>
      </div>
      <div className="flex gap-1 justify-center items-center w-12 h-12 bg-rose-400 aspect-[1/1] min-h-12 rounded-[48px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/2cfdbd727b4cc0aaf1028d1a1eb4c7e6ce27bdc6?placeholderIfAbsent=true"
          className="object-contain self-stretch my-auto w-5 aspect-square"
          alt="Arrow icon"
        />
      </div>
    </article>
  );
}

export default FeatureCard;
