import React from "react";

function CallToActionSection() {
  return (
    <section className="flex relative z-0 flex-col w-full min-h-[1046px] max-md:max-w-full">
      <img
        src="/public/footer.png"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#254B5F] to-[#254b5fc8] opacity-100"></div>
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
      <footer className="relative">
      <div className="overflow-hidden relative px-24 pt-20 pb-24 w-full text-base text-white border-t border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center pt-6 min-w-60 w-[644px] max-md:max-w-full">
            <nav className="flex flex-col justify-center self-stretch my-auto whitespace-nowrap">
              <a href="#invest">Invest</a>
              <a href="#experience" className="mt-3">
                Experience
              </a>
              <a href="#advisers" className="mt-3">
                Advisers
              </a>
              <a href="#faq" className="mt-3">
                FAQ
              </a>
              <a href="#about" className="mt-3">
                About
              </a>
            </nav>
            <nav className="flex flex-col justify-center self-stretch my-auto">
              <a href="#terms">Terms and conditions</a>
              <a href="#data-protection" className="mt-3">
                Data Protection Notice
              </a>
              <a href="#cookie-policy" className="mt-3">
                Cookie Policy
              </a>
              <a href="#security" className="mt-3">
                Security Practices
              </a>
              <a href="#speak-out" className="mt-3">
                Speak Out Policy
              </a>
            </nav>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/30c02b2d40d07b35cc148e8d905b6d06c1e7c170?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[1.83] w-[132px]"
            alt="GROW logo"
          />
        </div>
      </div>

      <div className="flex flex-wrap overflow-hidden relative gap-10 items-start px-24 pt-12 pb-24 w-full border border-solid border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
        <p className="md:flex-1 md:shrink text-sm leading-6 text-white md:basis-0 max-md:max-w-full">
          GROW is operated by Navigator Investment Services Ltd, a subsidiary of
          Singapore Life Ltd (Singlife). © 2023 Navigator Investment Services
          Limited • Company Reg No: 200103470W • GST Reg. No: 20-0103470-W
        </p>
        <div className="flex gap-4 items-center">
          <a href="#social-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/5793f255b5c8336071708087513bcdf604fae934?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Social media icon"
            />
          </a>
          <a href="#social-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/dcf578808cd27ed7eeb189d661004831790592a3?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Social media icon"
            />
          </a>
          <a href="#social-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/29fc258d55fe173e9b1409d4bdecc46d3cf43c22?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Social media icon"
            />
          </a>
          <a href="#social-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/5ac963eba2300e0014f70ce4e0e00bced711c928?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Social media icon"
            />
          </a>
        </div>
      </div>
    </footer>
    </section>
  );
}

export default CallToActionSection;
