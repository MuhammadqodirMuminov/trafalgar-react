import "./service.css";
import Card from "../card/card";

const Service = () => {
  return (
    <section className="service">
      <h2 className="service-title">Our services</h2>
      <hr />
      <p className="service-subtitle">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="service-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="service-btn">Learn more</button>
    </section>
  );
};

export default Service;
