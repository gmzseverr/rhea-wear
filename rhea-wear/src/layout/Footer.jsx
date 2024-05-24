import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="text-[#252B42] font-extrabold text-lg">rhea.</div>
      <div className="flex space-x-4">
        <a href="#" className="text-[#23A6F0] ">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-[#23A6F0] ">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="text-[#23A6F0]">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="flex flex-col">
          <h3 className="text-[#252B42] font-bold text-base ">Company Info</h3>
          <div>
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="">We are hiring</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#252B42] font-bold text-base ">Legal</h3>
          <div className="text-[#737373 flex flex-col] ">
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="">We are hiring</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#252B42] font-bold text-base ">Legal</h3>
          <div className="text-[#737373 flex flex-col] ">
            <a href="">Bussiness Marketings</a>
            <a href="">User Analytic</a>
            <a href="">Live Chat</a>
            <a href="">Unlimited Support</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#252B42] font-bold text-base ">Resources</h3>
          <div className="text-[#737373 flex flex-col] ">
            <a href="">IOS & Android</a>
            <a href="">Watch a Demo</a>
            <a href="">Customers</a>
            <a href="">API</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#252B42] font-bold text-base ">Get In Touch</h3>
          <input type="text" />
        </div>
      </div>
      <div className="text-[#737373 flex flex-col] ">
        <p>Made With Love By Figmaland All Right Reserved </p>
      </div>
    </footer>
  );
}

export default Footer;
