import { useState } from "react";
import "../App.css";

function CarCarousel({ country, cars }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const car = cars[index];

  const handleChange = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(false);
    }, 200);
  };

  const prev = () => handleChange((index - 1 + cars.length) % cars.length);
  const next = () => handleChange((index + 1) % cars.length);

  return (
    <div className="carousel-content">
      <img
        src={car.img}
        alt={car.name}
        className={`car-image ${fade ? "fade" : ""}`}
      />
      <h3>{car.name}</h3>
      <p>{car.history}</p>
      <div className="carousel-buttons">
        <button onClick={prev}>&lt;</button>
        <button onClick={next}>&gt;</button>
      </div>
    </div>
  );
}

export default CarCarousel;


