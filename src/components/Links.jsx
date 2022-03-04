import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All" },
  { url: "/news", text: "News" },
  { url: "/images", text: "Images" },
  { url: "/videos", text: "Videos" },
];

const Links = () => {
    const [tab, setTab] = useState("/search")
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          exact
          className={tab === url ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0" : "m-2 mb-0"}
          to={url}
          onClick={() => setTab(url)}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
