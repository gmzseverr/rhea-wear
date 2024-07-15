import React from "react";
import AboutUsImage from "../sections/AboutUsImage";
import Clients from "../components/Clients";
import TeamMembers from "../sections/TeamMembers";

function AboutUsPage() {
  return (
    <div className="">
      <div className="flex sm:flex-col sm:items-center  ">
        <section className=" flex flex-col items-start justify-center  pt-32 sm:px-10 px-40 sm:items-center ">
          <h5 className="font-bold py-2">ABOUT COMPANY</h5>
          <h1 className="text-6xl font-bold py-2">ABOUT US</h1>
          <p className="text-neutral-500 py-4">
            We know how large objects will act,
            <br /> but things on a small scale
          </p>
          <button className="inline-flex justify-end rounded-md bg-[#23A6F0] px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300">
            Get Quote Now
          </button>
        </section>
        <div className="">
          <AboutUsImage />
        </div>
      </div>

      <section className="py-20 px-52 items-center justify-between sm:px-20  sm:flex  ">
        <div className="sm:flex sm:flex-col sm:items-center flex items-center gap-14">
          <div className="flex-col flex sm:text-center ">
            <p className="text-red-500 ">Problems trying</p>
            <h3 className="text-2xl font-bold text-slate-800 py-3">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <div className="">
            <p className="text-neutral-500 text-sm sm:pt-10 ">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-52 flex justify-between sm:flex-col sm:items-center sm:gap-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-slate-800 text-5xl">15K</h1>
          <p className="text-neutral-500 font-bold text-sm">Happy Customer</p>
        </div>
        <div className="flex flex-col items-center text-center ">
          <h1 className="font-bold text-slate-800 text-5xl">150K</h1>
          <p className="text-neutral-500 font-bold text-sm">Monthly Visitors</p>
        </div>
        <div className="flex flex-col items-center text-center ">
          <h1 className="font-bold text-slate-800 text-5xl">15</h1>
          <p className="text-neutral-500 font-bold text-sm">
            Countries Worldwide
          </p>
        </div>
        <div className="flex flex-col items-center text-center ">
          <h1 className="font-bold text-slate-800 text-5xl">100+</h1>
          <p className="text-neutral-500 font-bold text-sm">Top Partners</p>
        </div>
      </section>
      <section className="pb-32">
        <TeamMembers />
      </section>
      <section className="bg-zinc-50 py-32 sm:px-11 px-40 ">
        <div className="flex flex-col items-center sm:px-20">
          <h2 className="text-4xl text-slate-800 font-bold text-center ">
            Big Companies Are Here
          </h2>
          <p className="text-sm text-center py-3 text-neutral-500">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <Clients />
      </section>
      <section className="bg-[#2A7CC7] ">
        <div className=" flex justify-between items-center ">
          <div className="py-32 sm:px-28 px-48">
            <h5 className="font-bold text-white ">WORK WITH US</h5>
            <h2 className="font-bold text-4xl text-white py-6">
              Now Let’s grow Yours
            </h2>
            <p className="text-white text-sm text-balance pb-6">
              The gradual accumulation of information about atomic and{" "}
              <br className="sm:hidden" />
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="inline-flex justify-end rounded-md bg-[#2A7CC7] border border-white px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-200">
              Get Quote Now
            </button>
          </div>
          <img src="public/assets/hero-1.png" alt="" className="sm:hidden " />
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
