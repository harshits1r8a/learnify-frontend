// import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className=" bg-gray-800 relative left-0 bottom-0 flex flex-col items-center justify-between  h-[10vh] py-3 px-10 sm:flex-row ">
        <section className="text-[16px] sm:text-[20px] text-white font-light  order-2 sm:order-1 mt-2 sm:mt-0">
          &#169; {year} <span className="text-green-500">Learnify</span> | All
          Right Reserved
        </section>
        <section className="flex gap-5 text-[18px] sm:text-[20px] items-center justify-center  text-white  order-1 sm:order-2">
          <a
            href=""
            className="hover:text-green-500 transition-all ease-in-out duration-300"
          >
            <BsFacebook />
          </a>
          <a
            href=""
            className="hover:text-green-500 transition-all ease-in-out duration-300"
          >
            <BsInstagram />
          </a>
          <a
            href=""
            className="hover:text-green-500 transition-all ease-in-out duration-300"
          >
            <BsTwitterX />
          </a>
          <a
            href=""
            className="hover:text-green-500 transition-all ease-in-out duration-300"
          >
            <BsLinkedin />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
