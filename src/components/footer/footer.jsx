import "./footer.css";
import footer from "../../img/logofootetr.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <img src={footer} alt="" width={160} height={41} />
        <p className="footer-subtitle">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className="footer-subtitle">
          ©Trafalgar PTY LTD 2020. All rights reserved
        </p>
      </div>
      <div className="footer-rigth">
        <div className="footer-blok">
          <p className="footer-blok-title">Company</p>
          <ul className="footer-list">
            <li className="footer-item">About</li>
            <li className="footer-item">Testimonals</li>
            <li className="footer-item">Find a doctor</li>
            <li className="footer-item">Apps</li>
          </ul>
        </div>
        <div className="footer-blok">
          <p className="footer-blok-title">Region</p>
          <ul className="footer-list">
            <li className="footer-item">Indanesia</li>
            <li className="footer-item">Singapure</li>
            <li className="footer-item">Hangkong</li>
            <li className="footer-item">Canada</li>
          </ul>
        </div>
        <div className="footer-blok">
          <p className="footer-blok-title">Help</p>
          <ul className="footer-list">
            <li className="footer-item">Help center</li>
            <li className="footer-item">Contack support</li>
            <li className="footer-item">Instuction</li>
            <li className="footer-item">How it works</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
