import React from "react";

function TeamPageImageSection() {
  return (
    <div className="flex w-full sm:flex sm:flex-col-1 sm:flex-wrap  ">
      <section className="w-1/2 h-[530px]  sm:w-full   ">
        <img
          src="public/assets/team-page1.jpeg"
          alt=""
          className=" object-cover w-full h-[530px] "
        />
      </section>
      <div className="w-1/2 h-[530px] flex sm:w-full sm:flex-col-1 sm:pt-2">
        <section className=" h-[530px] flex flex-col  justify-between pl-2 w-full">
          <img
            src="public/assets/team-page2.jpeg"
            alt=""
            className="object-cover object-center h-1/2 w-full pb-2"
          />
          <img
            src="public/assets/team-page3.jpeg"
            alt=""
            className="object-cover h-1/2 w-full"
          />
        </section>
        <section className="h-[530px] flex flex-col justify-between pl-2 w-full  sm:w-full ">
          <img
            src="public/assets/team-page5.jpeg"
            alt=""
            className="object-cover pb-2 h-1/2 w-full"
          />
          <img
            src="public/assets/team-page4.jpeg"
            alt=""
            className="object-cover   h-1/2 w-full"
          />
        </section>
      </div>
    </div>
  );
}

export default TeamPageImageSection;
