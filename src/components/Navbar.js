import React from "react";

const Navbar = () => {
  const Links = [
    { name: "About", link: "/" },
    { name: "SIP", link: "/" },
    { name: "Studio", link: "/" },
    { name: "SEEQ", link: "/" },
    { name: "Platforms", link: "/" },
    { name: "Initiatives", link: "/" },
    { name: "More", link: "/" },
  ];

  return (
    <div className="w-full h-[72px] bg-custom-closewhite">
      <div className="w-100 flex justify-between mx-16">
        <div className="font-bold text-2xl cursor-pointer font-[urbanist]">
          <div className="pr-20 my-4">
            <h4 className="box-border border-2 border-semi-transparent rounded-none text-black mr-1 p-1 text-xl px-4">
              S | N C
            </h4>
            <span>
              <h6 className="text-black text-xs tracking-wide">
                P A R T N E R S
              </h6>
            </span>
          </div>
        </div>
        <div className="flex mr-auto py-4">
          <ul className="flex">
            {Links.map((link, index) => (
              <li key={index} className="ml-8 text-xl font-semibold">
                <a
                  href={link.link}
                  className="text-black hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-4 my-2 pl-12">
          <span className="w-[147px] h-[49px] p-[15px] px-8 gap-[10px] rounded-full bg-custom-teal">
            <h5 className="text-xs text-white py-0 font-bold">SINC With Us</h5>
          </span>
          <span className="w-[162px] h-[49px] p-[15px] px-8 gap-[10px] rounded-full bg-black">
            <h5 className="text-xs text-white py-0 font-bold">
              Apply to SIP 1.0
            </h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
