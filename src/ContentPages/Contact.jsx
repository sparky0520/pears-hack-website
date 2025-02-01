import React from "react";
import Email from "../SVGs/email.svg";
import Web from "../SVGs/website.svg";

import LinkedIn from "../SVGs/linkedin.svg";
import Twitter from "../SVGs/contacttwitter.svg";

const Contact = () => {
  return (
    <div className="bg-[#2A2A2A] shadow-lg p-3 pt-1 md:pt-4 md:p-6 rounded-3xl flex flex-col justify-center gap-1 md:gap-5  md:mx-16  w-3/4 md:w-11/12 md:max-w-md mt-0.1 md:mt-14 mx-auto  h-auto mb:2 ">
      <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl flex gap-2 items-baseline justify-center">
        <span className="text-[#B6DD48] text-3xl md:text-4xl font-['Bebas_Neue']">
          GOT
        </span>{" "}
        A QUERY?
      </h2>
      <p className="font-['VT323'] text-lg md:text-2xl text-left">
        We're here to assist you! Join us on Keet:
      </p>
      <div className="  ">
        <a
          href="https://keetlink.vercel.app/"
          className="flex items-center justify-center"
          style={{ fontFamily: "'VT323', monospace" }}
        >
          <span className="text-lg md:text-xl border-[#B6DD48] bg-[#B6DD48] hover:text-[#B6DD48] hover:bg-transparent p-2  border rounded-md font-['VT323'] flex items-center justify-center text-black">
            JOIN US ON KEET
          </span>
        </a>
      </div>
      <p className="font-['VT323'] text-lg md:text-2xl text-left">
        Also checkout our social handles :
      </p>
      <div className="flex flex-col gap-1 md:gap-3">
        <a
          href="https://www.geekroom.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-[#B6DD48] break-words"
        >
          <img
            className="w-5 md:w-6 aspect-square flex-shrink-0"
            src={Web}
            alt="website icon"
          />
          <span className="font-['VT323'] tracking-[2px] text-lg">
            www.geekroom.in
          </span>
        </a>
        <a
          href="mailto:community@geekroom.in"
          className="flex items-center gap-3 text-white hover:text-[#B6DD48] md:py-1 break-words"
        >
          <img
            className="w-5 md:w-6 aspect-square flex-shrink-0"
            src={Email}
            alt="email icon"
          />
          <span className="font-['VT323'] text-lg md:text-xl tracking-[2px]">
            community@geekroom.in
          </span>
        </a>
        <a
          href="https://www.linkedin.com/company/geek-suite/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-[#B6DD48] break-words"
        >
          <img
            className="w-5 md:w-6 aspect-square flex-shrink-0"
            src={LinkedIn}
            alt="linkedin icon"
          />
          <span className="font-['VT323'] text-lg tracking-[2px]">
            Geek Suite
          </span>
        </a>
        <a
          href="https://x.com/Pears_p2p"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-[#B6DD48] break-words"
        >
          <img
            className="w-5 md:w-6 aspect-square flex-shrink-0"
            src={Twitter}
            alt="twitter icon"
          />
          <span className="font-['VT323'] tracking-[2px] text-lg">
            Pears_p2p
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
