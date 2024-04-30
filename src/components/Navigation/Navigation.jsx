import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaIcons from "@fortawesome/free-solid-svg-icons";
import { NAV_DATA } from "./navigation-utils";

import React from "react";
import NavigationParent from "./NavigationParent";

function Navigation() {
  return (
    <div className="navigation">
      <div>
        <h1>
          <FontAwesomeIcon
            className="icon"
            icon={FaIcons.faHouse}
            style={{ color: "#ffffff", width: "16px" }}
          />
          Home
        </h1>
        <h1>
          <FontAwesomeIcon
            className="icon"
            icon={FaIcons.faArrowUpRightFromSquare}
            style={{ color: "#ffffff", width: "16px" }}
          />
          Popular
        </h1>
      </div>
      <div className="divider"></div>
      {NAV_DATA.map((nav, index) => (
        <NavigationParent key={index} title={nav.title} content={nav.content} />
      ))}
    </div>
  );
}

export default Navigation;
