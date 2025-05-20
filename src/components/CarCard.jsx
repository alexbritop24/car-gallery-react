import '../App.css';

const CarCard = ({ name, img, history }) => {
  return (
    <div className="car-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{history}</p>
    </div>
  );
};

export default CarCard;

