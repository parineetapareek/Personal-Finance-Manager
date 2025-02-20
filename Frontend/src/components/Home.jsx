import React from "react";
import home1 from "../../public/home1.jpg";
import CardsHome from "./CardsHome";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-1">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-15 md:mt-36">
          <h1 className="text-2xl md:text-4xl font-bold">
            FinAge: Take Your Finances under control -
            <span className="text-fuchsia-400"> Anytime, Anywhere</span>
          </h1>
          <p className="text-sm md:text-xl">
            FinAge Provides you a virtual planner for your finances.
            add get started for free button, explore features
          </p>
        </div>
        <div className="w-full order-1 mt-20 md:order-2 md:w-1/2">
          <img src={home1} className="md:w-[550px] md:h-[460px] md:ml-12" />
        </div>
      </div>
      <div className="flex-col ">
        <h2>Key Features- Why Choose us?</h2>
        <CardsHome/>
      </div>
    </>
  );
}

export default Home;
