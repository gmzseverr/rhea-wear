import {
  faChevronRight,
  faClock,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PostsCards({ post }) {
  return (
    <div>
      <section className="w-[328px] h-[606px] shadow-md rounded-sm flex flex-col items-start">
        <img
          src={post.image}
          className="w-full h-[300px] object-cover object-top"
          alt={post.title}
        />
        <div className="py-3 px-4 flex flex-col h-full justify-between">
          <div>
            <div className="flex cursor-pointer text-inherit gap-2 text-xs pb-3">
              <a className="hover:text-[#23A6F0] text-gray-500" href="/">
                Google
              </a>
              <a className="hover:text-[#23A6F0] text-gray-500" href="/">
                Trending
              </a>
              <a className="hover:text-[#23A6F0] text-gray-500" href="/">
                New
              </a>
            </div>
            <h3 className="text-lg font-normal">{post.title}</h3>
            <p className="text-sm text-gray-500 pt-2">{post.description}</p>
          </div>

          <div>
            <div className="text-xs flex items-center gap-5 mb-2 pb-4">
              <div className="flex text-gray-500 items-center gap-2">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-xs text-[#23A6F0]"
                />{" "}
                {post.date}
              </div>
              <div className="flex text-gray-500 items-center gap-2">
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-xs text-green-700"
                />{" "}
                {post.comments} Comments
              </div>
            </div>
            <div className="font-bold text-sm flex items-center text-gray-600 gap-2 mb-2">
              <a href={post.link}> Learn More</a>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-xl text-[#23A6F0]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostsCards;
