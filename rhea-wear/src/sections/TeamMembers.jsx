import React from "react";

function TeamMembers() {
  return (
    <div className="pt-32 sm:px-10 px-40">
      <section className="flex items-center flex-col ">
        <h1 className="font-bold text-4xl pb-2 text-center ">Meet Our Team</h1>
        <p className="text-sm text-[#737373] text-center sm:text-wrap">
          Problems trying to resolve the conflict between{" "}
          <br className="sm:hidden" /> the two major realms of Classical
          physics: Newtonian mechanics{" "}
        </p>
      </section>
      <section className="pt-32">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center py-10">
            <img
              className="h-32 w-32  mb-3 rounded-full  object-cover shadow-lg"
              src="public/assets/hero-2.png"
              alt="Bonnie image"
            />
            <span class="text-sm text-[#23A6F0] font-bold dark:text-gray-400">
              Visual Designer
            </span>
            <h5 class="pt-3 text-m font-bold text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <p className="text-[#737373] w-2/4 text-sm">
              the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </section>
      <section className=" flex flex-col items-center pt-52">
        <h2 className="text-4xl font-bold py-4  ">
          Start your 14 days free trial
        </h2>
        <p className="text-sm text-[#737373] pb-4 w-1/3 text-center">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="inline-flex justify-center gap-x-1.5 rounded-md bg-[#23A6F0] px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300">
          Try it free now
        </button>
      </section>
    </div>
  );
}

export default TeamMembers;
