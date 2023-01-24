import "./card.css";
import frame from "../../img/Frame.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={frame} alt="img" />
      <h3 className="card-title">Search doctor</h3>
      <p className="card-subtitle">
        Choose your doctor from thousands of specialist, general, and trusted
        hospitals
      </p>
    </div>
  );
};

export default Card;
