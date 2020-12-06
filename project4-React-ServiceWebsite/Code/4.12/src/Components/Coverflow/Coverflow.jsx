import React from "react";
import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";
import "./style.css";
export default function Coverflowcom() {
  return (
    <div className="Coverflow">
      <Coverflow
        width="960"
        height="100vh"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={false}
        clickable={true}
        active={0}
        currentFigureScale={2}
        otherFigureScale={1.2}
        enableHeading={false}
        infiniteScroll={true}
        media={{
          "@media (max-width: 1025px)": {
            // width: "600px",
            height: "400px",
          },

          "@media (min-width: 1024px)": {
            // width: "100vw",
            height: "50vh",
          },
        }}
      >
        <div role="menuitem" tabIndex="0">
          <img
            src="https://www.tempus600.com/admin/public/getimage.ashx?image=/Files/Images/timedico/News/2020/AdobeStock_328597069_web_small.jpg&crop=0&fix=br&Width=940&Height=520&"
            alt="title or description"
            style={{
              display: "block",
              width: "100%",
            }}
          />
        </div>
        <img
          src="https://thomsonhospitals.com/wp-content/uploads/2019/11/THKD_Latest_Service_Drive_Thru_Covid_Screening_Header.jpg"
          alt="title or description"
          // data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src="https://www.weavervalesurgery.nhs.uk/wp-content/uploads/sites/21/2020/10/Website-Banner-artwork.jpg"
          alt="title or description"
          // data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src="https://gray-ktuu-prod.cdn.arcpublishing.com/resizer/J7cMSLf2PaFWQTrbVp7sVjEo8Pc=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/NYHMR26Q3BLW5NUYUDBBMNAFNQ.jpg"
          alt="title or description"
          // data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src="https://c.files.bbci.co.uk/CEAB/production/_114370925_corona_what_you_need_to_do_09sep_640_3x-nc-2.png"
          alt="title or description"
          // data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src="https://www.jurist.org/news/wp-content/uploads/sites/4/2020/03/coronavirus_1583937156.jpg"
          alt="title or description"
          // data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src="https://www.news.uct.ac.za/cache/images/userfiles/images/news/2020/800x0/normal/2020-07-20_coronavirus.jpg"
          alt="title or description"
          // data-action="http://andyyou.github.io/react-coverflow/"
        />
      </Coverflow>
    </div>
  );
}

//npm install react-coverflow
