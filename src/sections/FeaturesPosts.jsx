import React from "react";
import PostsCards from "./PostsCards";

function FeaturesPosts() {
  const posts = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/a3/c9/d0/a3c9d0710bc82e9101c29ff694ba8d58.jpg",
      title: "Trend Alarm: Denim on Denim",
      description:
        "The timeless denim-on-denim trend is making a strong comeback this season.",
      date: "12.02.2025",
      comments: 12,
      link: "/",
    },

    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/76/e6/d1/76e6d1c36f1b42c60b2e9f19bd2aafad.jpg",
      title: "Runway Highlights: Must-See Looks",
      description:
        "The most unforgettable moments from this season's biggest fashion shows.",
      date: "15.04.2025",
      comments: 25,
      link: "/",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/3b/28/f8/3b28f8dff1d78bf0abe05c88dfa4a7dd.jpg", // Kendi resmini ekleyebilirsin
      title: " Love is in the Air (and on Your Feet!)",
      description:
        "This Valentine’s Day, embrace the power of red and heart-shaped accessories to make a bold fashion statement.",
      date: "14.02.2025",
      comments: 20,
      link: "/",
    },
  ];

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20 ">
      <div className="flex flex-col items-center py-5">
        <h6 className="text-[#23A6F0] text-sm font-bold pb-2">
          Practice Advice
        </h6>
        <h1 className="font-bold text-2xl sm:text-4xl pb-3 text-center">
          Features Posts
        </h1>
        <p className="text-sm text-[#737373] pb-3 text-center">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-6 pt-5">
          {posts.map((post) => (
            <PostsCards key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesPosts;
