import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import BG from "../../assets/bg.jpg";
import Footer from "./footer/Footer";

export default function Landing() {
  return (
    <div>
      <div
        style={{
          background: `url(${BG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "-10",
          opacity: ".2",
          top: "0",
        }}
      ></div>

      <div>
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
