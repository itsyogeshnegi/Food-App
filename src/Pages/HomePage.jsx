import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import menu from "../Utils/MenuList";
import Cuisines from "../Components/Cuisines";
const HomePage = () => {
  return (
    <>
      <div className="p-3 ">
        <Carousel />
      </div>
      <div className="text-center my-2">
        <h1 className="text-5xl font-Teko">Popular Cuisines</h1>
        <div className="flex w-full items-center justify-around flex-wrap">
          {menu.map(e => (
            <div className="flex ">
              <Cuisines image={"/menu/" + e.image} dishName={e.name}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
