import "./button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ text, orange, handleClick, icon, iconAfter }) {
  let className = "header-button";
  if (orange) {
    className += " header-button-orange";
  }
  return (
    <button onClick={handleClick} className={className}>
      {(icon = <FontAwesomeIcon icon={icon} />)}
      {text}
      {(iconAfter = <FontAwesomeIcon icon={iconAfter} />)}
    </button>
  );
}
