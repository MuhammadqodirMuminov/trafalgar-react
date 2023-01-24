import "./costumer.css";
import mask from "../../img/Mask.png";
import arrow from "../../img/arrow.png";

const Costumer = () => {
  return (
    <section className="costumer">
      <div className="costumer-main">
        <h3 className="costumer-title">What our customer are saying</h3>
        <hr />
        <div className="costumer-left">
          <div className="costumer-user">
            <img src={mask} alt="mask" width={141} height={141} />
            <div>
              <h4 className="user-name">Edward Newgate</h4>
              <p className="user-desc">Founder Circle</p>
            </div>
          </div>
          <p className="costumer-subtitle">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </p>
        </div>
      </div>
      <img src={arrow} alt="pagination" />
    </section>
  );
};

export default Costumer;
