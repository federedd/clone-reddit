import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menu.css";
export function Menu() {
  return (
    <>
      <div className="feed-menu">
        <ul className="feed-list">
          <div className="feed-list-item">
            <li>Hot</li>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "#82959b" }}
            />
          </div>
          <div className="feed-list-item">
            <li>Everywhere</li>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "#82959b" }}
            />
          </div>
          <div className="feed-list-item">
            <li>View</li>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "#82959b" }}
            />
          </div>
        </ul>
      </div>
    </>
  );
}
