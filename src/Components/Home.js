import React from "react";
import AllService from "./AllService";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Nab from "./Nab";
import PopulerService from "./PopulerService";
import Services from "./Services";
import ServiceWeProvide from "./ServiceWeProvide";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Nab></Nab>
      <Banner></Banner>
      <Services></Services>
      <PopulerService></PopulerService>
      <AllService></AllService>
      <ServiceWeProvide></ServiceWeProvide>
      <Footer></Footer>
    </div>
  );
};

export default Home;
