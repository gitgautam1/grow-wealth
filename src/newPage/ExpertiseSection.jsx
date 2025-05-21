import React from "react";
import Badge from "./Badge";

function ExpertiseSection() {
  return (
    <section className="flex z-0 flex-col justify-center px-24 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <h2 className="text-6xl leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Designed for you.{" "}
          <span style={{ color: "rgba(17,17,17,1)" }}>
            Powered by expertise.
          </span>
        </h2>
        <p className="mt-6 text-xl leading-8 font-[350] text-stone-500 max-md:max-w-full">
          With intuitive digital tools and real human support, we make investing
          simple, accessible, and stress-free. Open an account in minutes,
          access your portfolio anytime, and get expert help when you need it.
          Every touchpoint is designed to respect your time and put your
          financial goals first.
        </p>
      </div>

      <div className="flex relative flex-col gap-2 justify-center items-start mt-12 rounded-2xl min-h-[608px] overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ed3d8125057341538940e494f4f5ee2b/940dde211970cd8efdbbe556917aa61464c788a8?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
          alt="Platform interface"
        />

        <Badge
          icon="https://cdn.builder.io/api/v1/image/assets/ed3d8125057341538940e494f4f5ee2b/a3e045786b2a48abd5aa24d86f780feb4285fcda?placeholderIfAbsent=true"
          text="Minutes to start investing"
          position="left-bottom-1"
        />

        <Badge
          icon="https://cdn.builder.io/api/v1/image/assets/ed3d8125057341538940e494f4f5ee2b/14e1eb19875b238cc837961d1d38b3920baf8d22?placeholderIfAbsent=true"
          text="Completely personalised"
          position="left-bottom-2"
        />

        <Badge
          icon="https://cdn.builder.io/api/v1/image/assets/ed3d8125057341538940e494f4f5ee2b/e03fd1b4029c9e06ce0c3547943191486ebdb69f?placeholderIfAbsent=true"
          text="Intuitive digital tools"
          position="right-top-1"
        />

        <Badge
          icon="https://cdn.builder.io/api/v1/image/assets/ed3d8125057341538940e494f4f5ee2b/847fd725dafb0ff976b5e5267cb2f85c8e015a28?placeholderIfAbsent=true"
          text="Real human support"
          position="right-top-2"
        />
      </div>
    </section>
  );
}

export default ExpertiseSection;
