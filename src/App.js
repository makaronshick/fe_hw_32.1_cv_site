import React from "react";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import RenderContainer from "./components/container/RenderContainer.js";

export default () => {
  return (
    <>
      <Header />
      <RenderContainer />
      <Footer />
    </>
  );
};
