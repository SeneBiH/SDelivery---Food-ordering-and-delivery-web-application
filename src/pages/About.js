// import React from "react";
// import MultiplePizzas from "../assets/home1.webp";
// import "../styles/About.css";
// function About() {
//   return (
//     <div className="about">
//       <div
//         className="aboutTop"
//         style={{ backgroundImage: `url(${MultiplePizzas})` }}
//       ></div>
//       <div className="aboutBottom">
//         <h1> ABOUT US</h1>
//         <p className="pprvi">
//           Welcome to SDelivery – your friendly neighborhood food delivery
//           solution!
//         </p>
//         <p className="pdrugi">
//           {" "}
//           We're not your typical food delivery service. We're not here to bore
//           you with formalities or corporate jargon. We're here to satisfy your
//           cravings, one delicious dish at a time. So, what's the deal with
//           SDelivery? It's straightforward: we're your dependable choice for all
//           your food delivery needs. Whether you're in the mood for a steaming
//           hot pizza, your favorite comfort food, or a culinary delight from a
//           local restaurant, we've got you covered.{" "}
//         </p>
//         <p className="ptreci">
//           {" "}
//           We don't just deliver food; we deliver a taste of convenience. Our
//           team is a group of food aficionados who take pride in getting your
//           favorite dishes to you as swiftly as possible. We may not wear chef
//           hats, but we do wear smiles, and we're always ready to dash (or drive)
//           to bring your orders straight to your doorstep. We know you're hungry
//           and busy, so we've made it incredibly easy to use our service.{" "}
//         </p>
//         <p>
//           {" "}
//           Just a few taps on our website or a click on our app, and your meal is
//           on its way. No fuss, no hassle – that's the SDelivery guarantee. We
//           recognize the importance of trust in the food delivery business, and
//           that's why we take security seriously. Your orders are handled with
//           care, and your information is protected. You can rely on us to treat
//           your meals like our own. At SDelivery, we're not just a food delivery
//           service; we're your friendly neighbor who's always there when hunger
//           strikes. Join our ever-growing community of satisfied foodies and let
//           us take care of your culinary cravings. Life's too short to worry
//           about cooking – leave the food delivery to us. We've got your taste
//           buds covered! Whether it's a late-night snack, a special dinner, or a
//           quick lunch, think SDelivery. We're here to make your mealtime a
//           little more delightful, one delivery at a time.
//           <p className="pcetvrti">
//             Welcome to the SDelivery family of food lovers!
//           </p>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;

import React, { useEffect } from "react";
import aboutCover from "../assets/grasak.jpeg";
import "../styles/About.css";
import firstImage from "../assets/dd.jpg";
import secondImage from "../assets/osma.jpg";
import thirdImage from "../assets/biftekk.jpg";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="aboutTitle">
        <h1> - ABOUT US - </h1>
      </div>
      <div className="firstPart">
        <h1>Our Story</h1>
        <div className="firstPotPart">
          <div className="firstPartText">
            <p>
              We're not your typical food delivery service. We're not here to
              bore you with formalities or corporate jargon. We're here to
              satisfy your cravings, one delicious dish at a time. So, what's
              the deal with SDelivery? It's straightforward: we're your
              dependable choice for all your food delivery needs. Whether you're
              in the mood for a steaming hot pizza, your favorite comfort food,
              or a culinary delight from a local restaurant, we've got you
              covered.
            </p>
          </div>
          <div className="firstPartImage">
            <img src={firstImage} alt=""></img>
          </div>
        </div>
      </div>
      <div className="secondPart">
        <img src={secondImage} alt=""></img>
        <p>
          We don't just deliver food; we deliver a taste of convenience. Our
          team is a group of food aficionados who take pride in getting your
          favorite dishes to you as swiftly as possible. We may not wear chef
          hats, but we do wear smiles, and we're always ready to dash (or drive)
          to bring your orders straight to your doorstep. We know you're hungry
          and busy, so we've made it incredibly easy to use our service.
        </p>
      </div>
      <div className="thirdPart">
        <p>
          Just a few taps on our website or a click on our app, and your meal is
          on its way. No fuss, no hassle – that's the SDelivery guarantee. We
          recognize the importance of trust in the food delivery business, and
          that's why we take security seriously. Your orders are handled with
          care, and your information is protected. You can rely on us to treat
          your meals like our own. At SDelivery, we're not just a food delivery
          service; we're your friendly neighbor who's always there when hunger
          strikes. Join our ever-growing community of satisfied foodies and let
          us take care of your culinary cravings. Life's too short to worry
          about cooking – leave the food delivery to us. We've got your taste
          buds covered! Whether it's a late-night snack, a special dinner, or a
          quick lunch, think SDelivery. We're here to make your mealtime a
          little more delightful, one delivery at a time.
        </p>
        <img src={thirdImage} alt=""></img>
      </div>
    </div>
  );
}

export default About;
