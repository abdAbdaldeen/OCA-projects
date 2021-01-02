import React from "react";
import "./about.scss";
const About = () => {
  return (
    <section className="about-container">
      <h2 className="about-h">About us</h2>
      <div className="articleDiv">
        <article className="text-about">
          {" "}
          Since 1973, The Spot Restaurant has been the go-to diner for residents
          of Binghamton, NY. Our diner serves breakfast all day, in addition to
          wholesome and flavorful dining options for lunch and dinner. From
          burgers to salads, seafood to pastas, you’ll find all kinds of hearty
          meals prepared fresh at The Spot Restaurant. Our diner also has a full
          bakery with delicious baked goods and other treats, including our
          famous cheesecake. Sounds delicious, right. Our diner serves breakfast
          all day, in addition to wholesome and flavorful dining options for
          lunch and dinner. From burgers to salads, seafood to pastas, you’ll
          find all kinds of hearty meals prepared fresh at The Spot Restaurant.
        </article>
        <div className=" img-fluid"></div>
      </div>
    </section>
  );
};
export default About;
