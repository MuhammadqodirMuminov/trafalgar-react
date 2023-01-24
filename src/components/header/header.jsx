import "./header.css";
import logo from "../../img/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} width={"160"} height={"41"} alt="logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item active">Home</li>
          <li className="nav-item">Find a doctor</li>
          <li className="nav-item">Apps</li>
          <li className="nav-item">Testimonals</li>
          <li className="nav-item">Abour Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
