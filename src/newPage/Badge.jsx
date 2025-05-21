import React from "react";

function Badge({ icon, text, position }) {
  const positionClasses = {
    "left-bottom-1": "absolute left-3 z-0 bottom-[172px]",
    "left-bottom-2": "absolute left-3 z-0 bottom-[76px]",
    "right-top-1": "absolute right-3 top-16 z-0",
    "right-top-2": "absolute right-3 top-40 z-0",
  };

  return (
    <div
      className={`flex ${positionClasses[position]} gap-2 items-center py-2 pr-5 pl-2 bg-white shadow-md rounded-[56px]`}
    >
      <div className="flex gap-2 items-center self-stretch p-2 my-auto w-9 h-9 bg-neutral-900 rounded-[32px]">
        <img
          src={icon}
          className="object-contain self-stretch my-auto w-5 aspect-square"
          alt="Badge icon"
        />
      </div>
      <p className="self-stretch my-auto text-base leading-snug text-center font-[350] text-neutral-900">
        {text}
      </p>
    </div>
  );
}

export default Badge;
