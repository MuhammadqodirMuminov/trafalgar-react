import "./leading.css";
import trafalgarIll from "../../img/trafalgar-illustration.jpg";

const Leading = () => {
  return (
    <section className="leading">
      <img src={trafalgarIll} alt="img" width={650} height={477} />
      <div className="leading-main">
        <h3 className="leading-title">Leading healthcare providers</h3>
        <hr />
        <p className="leading-subtitle">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button className="leading-btn">Learn more</button>
      </div>
    </section>
  );
};

export default Leading;
