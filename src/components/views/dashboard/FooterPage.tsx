import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="xl:mt-[4rem] xl:max-w-[1150px] w-full flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col w-full gap-4 items-center xl:flex-row-reverse xl:justify-between xl:items-start">
        <div className="flex items-center gap-8 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
        <ul className="grid grid-cols-3 gap-x-[5rem] font-semibold">
          <li>About</li>
          <li>Terms</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Privacy</li>
          <li>Contact</li>
          <li>Testimonials</li>
          <li>Refunds</li>
        </ul>
      </div>
      <p className="font-bold">Copyright &copy; 2023 ALUA</p>
    </footer>
  );
};

export default FooterPage;
