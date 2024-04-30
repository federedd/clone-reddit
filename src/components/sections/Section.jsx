import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./section.css";
import { useState } from "react";

export default function Section(props) {
  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section-container">
      <h1 className="section-title">{props.title}</h1>

      {isOpen ? (
        <FontAwesomeIcon
          onClick={close}
          icon={faChevronUp}
          style={{ color: "#fff", cursor: "pointer" }}
        />
      ) : (
        <FontAwesomeIcon
          onClick={open}
          icon={faChevronDown}
          style={{ color: "#fff", cursor: "pointer" }}
        />
      )}
    </div>
  );
}
