import "./highlights.css";
import { CAROUSEL_CONTENT } from "../carousel/carousel-utils";
import { Subreddit } from "../subreddits/Subreddit";
import Button from "../button/Button";
import { useState } from "react";

export function Highlights() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  const n = isOpen ? CAROUSEL_CONTENT.length : 5;

  return (
    <>
      <div className="highlights-container">
        <h2 className="highlights-title">POPULAR COMMUNITIES</h2>

        {CAROUSEL_CONTENT.slice(0, n).map((subreddit, index) => (
          <Subreddit
            key={index}
            icon={subreddit.icon}
            subreddit={subreddit.subreddit}
            members={subreddit.members}
          />
        ))}

        {isOpen ? (
          <Button handleClick={close} text="show less" />
        ) : (
          <Button handleClick={open} text="show more" />
        )}
      </div>
    </>
  );
}
