import Cards from "../../Components/Cards/servicesCards";
import Coverflow from "./../../Components/Coverflow/Coverflow";
import "./style.css";
export default function services() {
  return (
    <div className="services-page">
      <Coverflow />
      <Cards className="Cards" />
    </div>
  );
}
