import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "./Card";
import JumboTron from "./JumboTron";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <NavBar />
      <JumboTron />
      <div className="container text-center ">
        <div className="row">
          <Card
            cardTitle="tarjeta 1"
            carText="tururu"
            cardImg="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
          />
          <Card
            cardTitle="tarjeta 2"
            carText="tururu"
            cardImg="https://1.bp.blogspot.com/-6f8S4VlIu9U/VN4IGofPgrI/AAAAAAAAAa8/aX-WWjyG3DA/s1600/charming-maine-coon-face-photo.jpg"
          />
          <Card
            cardTitle="tarjeta 3"
            carText="tururu"
            cardImg="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"
          />
          <Card
            cardTitle="tarjeta 4"
            carText="tururu"
            cardImg="https://cdn.pixabay.com/photo/2023/07/22/09/04/european-shorthair-8142967_1280.jpg"
          />
        </div>
      </div>
      <Footer />
     
    </div>
  );
};

export default Home;
