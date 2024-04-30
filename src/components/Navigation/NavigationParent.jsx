import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaIcons from "@fortawesome/free-solid-svg-icons";
import { NAV_DATA } from "./navigation-utils";
import "./navigationParent.css";

function NavigationParent({ title, content, category, subCategory }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <div
        className="title-chevron-wrapper"
        onClick={() => setIsActive(!isActive)}
      >
        <h3>{title}</h3>
        <div>
          {isActive ? (
            <FontAwesomeIcon
              className="icon"
              icon={FaIcons.faChevronUp}
              style={{ color: "#ffffff", width: "16px" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={FaIcons.faChevronDown}
              style={{ color: "#ffffff", width: "16px" }}
            />
          )}
        </div>
      </div>

      {isActive && (
        <div className="content-container">
          <div className="content">
            {content.map((cat, index) => {
              return (
                <div key={index} className="wrapper">
                  <FontAwesomeIcon icon={cat.icon} />
                  <p>{cat.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="divider"></div>
    </div>
  );
}

export default NavigationParent;
