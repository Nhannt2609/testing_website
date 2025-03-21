import React from "react";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

const DefaultLayout = ({title = "Title", className, children}) => {
  return (
    <div class="container">
      <MenuBar />
      <h2>{title}</h2>
      <div className={className}>{children}</div>
      <hr/>
      <Footer />
    </div>
  );
}

export default DefaultLayout