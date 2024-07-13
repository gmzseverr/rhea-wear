import React from "react";
import TeamPageImageSection from "../sections/TeamPageImageSection";
import TeamMembers from "../sections/TeamMembers";

function TeamPage() {
  return (
    <div>
      <section className="flex flex-col items-center sm:px-10 text-center">
        <h5 className="text-[#737373] font-bold py-3">WHAT WE DO</h5>
        <h2 className="text-5xl font-bold">Innovation tailored for you</h2>
        <nav className="flex py-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm  text-[#737373] font-bold hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="/team"
                  className="ms-1 text-sm  text-[#737373] font-bold hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  Team
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </section>
      <TeamPageImageSection />
      <TeamMembers />
    </div>
  );
}

export default TeamPage;
