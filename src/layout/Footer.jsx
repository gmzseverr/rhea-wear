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
      <div className="mx-36 my-7">
        <section className="flex justify-between items-center sm:flex-col sm:items-start flex-row py-5">
          <div className="text-[#252B42] font-extrabold text-lg self-start ">
            rhea.
          </div>
          <div className="flex gap-3 ">
            <a href="/" className="text-[#23A6F0] ">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a href="/" className="text-[#23A6F0] ">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="/" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
          </div>
        </section>

        <div className="grid grid-cols-5 sm:grid-cols-1 gap-x-0">
          <div className="flex flex-col ">
            <h3 className="text-[#252B42] font-bold text-base py-7 ">
              Company Info
            </h3>
            <ul className="text-[#737373] font-bold text-sm space-y-4 ">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/">Carrier</a>
              </li>
              <li>
                <a href="/">We are hiring</a>
              </li>
              <li>
                <a href="/featured_products">Featured Products</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#252B42] font-bold text-base py-7 ">Legal</h3>
            <ul className="text-[#737373] font-bold text-sm space-y-4 ">
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
              <li>
                <a href="/">Cookie Policy</a>
              </li>
              <li>
                <a href="/">GDPR Compliance</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#252B42] font-bold text-base py-7 ">
              Services
            </h3>
            <ul className="text-[#737373] font-bold text-sm space-y-7 ">
              <li>
                <a href="/">Business Marketing</a>
              </li>
              <li>
                <a href="/">User Analytics</a>
              </li>
              <li>
                <a href="/">Live Chat</a>
              </li>
              <li>
                <a href="/">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#252B42] font-bold text-base py-7 ">
              Resources
            </h3>
            <ul className="text-[#737373] font-bold text-sm space-y-4 ">
              <li>
                <a href="/action">iOS & Android App</a>
              </li>
              <li>
                <a href="/">Watch a Demo</a>
              </li>
              <li>
                <a href="/">Customers</a>
              </li>
              <li>
                <a href="/">API</a>
              </li>
            </ul>
          </div>
          <form className="flex flex-col ">
            <h3 className="text-[#252B42] font-bold text-base py-7 ">
              Get In Touch
            </h3>
            <section className="flex">
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#E6E6E6] rounded-l-md py-3.5 px-3"
              />
              <button className="bg-[#23A6F0] py-3.5 rounded-r-md px-3 text-white font-bold">
                Subscribe
              </button>
            </section>
            <p className="text-[#737373] font-bold text-sm pt-4">
              Stay updated with our latest offers!
            </p>
          </form>
        </div>
      </div>

      <div className="text-[#737373] font-bold pl-36 bg-[#FAFAFA] text-sm py-6 flex flex-col w-full pt-8 ">
        <p>Made With Love By Figmaland. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
