import trafalgarImg from "../../img/trafalgar-header.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-right">
        <h1 className="hero-title">Virtual healthcare for you</h1>
        <p className="hero-subtitle">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="hero-btn">Consult today</button>
      </div>
      <img src={trafalgarImg} alt="img" width={693} height={598} />
    </div>
  );
};

export default Hero;
