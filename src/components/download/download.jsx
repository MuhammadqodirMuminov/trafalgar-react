import "./download.css";
import trafalgarImg2 from "../../img/trafalgar-illustration2.jpg";

const Download = () => {
  return (
    <section className="download">
      <div className="download-main">
        <h3 className="download-title">Download our mobile apps</h3>
        <hr />
        <p className="download-subtitle">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button className="download-btn">Download ⬇️</button>
      </div>
      <img src={trafalgarImg2} alt="img" />
    </section>
  );
};

export default Download;
