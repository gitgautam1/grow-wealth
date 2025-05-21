import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-10 w-full text-base text-white bg-cyan-900">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-wrap gap-10 justify-between items-center py-4 pr-24 pl-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center self-stretch my-auto whitespace-nowrap min-w-60 max-md:max-w-full">
          <img
            src="/public/OG_logo 1.png"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.83] w-[132px]"
            alt="GROW logo"
          />
          <div className="flex gap-10 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
            <a href="#invest" className="self-stretch my-auto">
              Invest
            </a>
            <a href="#platforms" className="self-stretch my-auto">
              Platforms
            </a>
            <a href="#advisers" className="self-stretch my-auto">
              Advisers
            </a>
            <a href="#faq" className="self-stretch my-auto">
              FAQ
            </a>
            <a href="#about" className="self-stretch my-auto">
              About
            </a>
          </div>
        </div>
        <button className="flex gap-2 items-center self-stretch px-5 py-3 my-auto font-medium rounded-xl border border-solid border-[color:var(--White,#FFF)]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/3b12ba3a64d2056733fd02c93c99b1907342f71f?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Login icon"
          />
          <div className="flex gap-1 items-center self-stretch my-auto">
            <span className="self-stretch my-auto">Log in</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/8731f1fddb3c0c355191707c0d130a56a2ae4b9b?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="Arrow icon"
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center py-4 px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/ef1f73f5b1e668b3d69feca7633a25a46cfffc38?placeholderIfAbsent=true"
          className="object-contain aspect-[1.83] w-[100px]"
          alt="GROW logo"
        />
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyan-900 shadow-lg">
          <div className="flex flex-col py-4 px-5 space-y-4">
            <a href="#invest" className="text-white hover:text-gray-200">
              Invest
            </a>
            <a href="#platforms" className="text-white hover:text-gray-200">
              Platforms
            </a>
            <a href="#advisers" className="text-white hover:text-gray-200">
              Advisers
            </a>
            <a href="#faq" className="text-white hover:text-gray-200">
              FAQ
            </a>
            <a href="#about" className="text-white hover:text-gray-200">
              About
            </a>
            <button className="flex gap-2 items-center justify-center px-5 py-3 font-medium rounded-xl border border-solid border-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/3b12ba3a64d2056733fd02c93c99b1907342f71f?placeholderIfAbsent=true"
                className="w-5 aspect-square"
                alt="Login icon"
              />
              <div className="flex gap-1 items-center">
                <span>Log in</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/8731f1fddb3c0c355191707c0d130a56a2ae4b9b?placeholderIfAbsent=true"
                  className="w-4 aspect-square"
                  alt="Arrow icon"
                />
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
