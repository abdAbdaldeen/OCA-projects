import "./style.css";
import logo from "../../img/footerLogo1.svg";
export default function footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <div className="VL"></div>
      <div>
        <h4>Help Center</h4>
        <p className="number">+962 77 77 7777 7</p>
        <p className="email">help@domain.com</p>
      </div>
    </footer>
  );
}
