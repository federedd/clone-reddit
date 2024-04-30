// import Icontext from "/src/assets/Icon-text.svg";
import "./header.css";
import MagnifyingGlass from "/src/assets/magnifying-glass.svg";
import Button from "../button/Button";
import Ellipsis from "/src/assets/ellipsis.svg";
import IconText from "/src/assets/Icon+text.svg";

export default function Header() {
  const handleUserLogin = () => {
    console.log("i should handle the user login");
  };
  const handleGetApp = () => {
    console.log("i should handle downloading the app");
  };

  return (
    <>
      <header>
        <img src={IconText} alt="" className="header-img" />
        <div className="search-bar-container">
          <input placeholder="Search Reddit" type="text"></input>
        </div>
        <div className="buttons-container">
          <Button handleClick={handleGetApp} text="Get app" />
          <Button handleClick={handleUserLogin} orange text="Log in" />
          <img src={Ellipsis} className="ellipsis" />
        </div>
      </header>
    </>
  );
}
