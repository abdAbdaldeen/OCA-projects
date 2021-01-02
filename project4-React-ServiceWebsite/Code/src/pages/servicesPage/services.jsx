import Cards from "../../component/Cards/servicesCards";
import Coverflow from "../../component/Coverflow/Coverflow";
// import Test from "../../component/test/test";
import "./style.css";
export default function services() {
  document.title = "PCR | Services Page";
  document.getElementsByTagName("META")[4].content =
    "our services page that contains (At Site, Drive Thru, And At Home) to book a covid-19 test";
  return (
    <section className="services-page">
      <Coverflow />
      <div className="margin"></div>
      <Cards />
      <div className="margin"></div>
      {/* <Test /> */}
    </section>
  );
}
