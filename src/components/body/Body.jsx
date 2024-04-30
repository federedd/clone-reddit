import Navigation from "../Navigation/Navigation";
import Feed from "../feed/Feed";
import "./body.css";

export default function Body() {
  return (
    <div className="body">
      <Feed />
      <Navigation />
    </div>
  );
}
