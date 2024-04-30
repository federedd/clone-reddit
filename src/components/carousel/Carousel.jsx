import { Card } from "./Card";
import "./carousel.css";
import { CAROUSEL_CONTENT } from "./carousel-utils";

export function Carousel() {
  return (
    <>
      <div className="carousel-container">
        {CAROUSEL_CONTENT.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            subreddit={card.subreddit}
            img={card.src}
            icon={card.icon}
          />
        ))}
      </div>
    </>
  );
}
