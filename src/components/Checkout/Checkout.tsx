import React from "react";
import Banner from "../Banner/Banner";


const Checkout = () => {
  return (
    <div className="min-h-full w-full flex flex-col  bg-white items-center  ">
     {/* banner */}
      <Banner  title="Checkout" breadcrumb="home > checkout" />
      {/* checkout */}

    </div>
  );
};

export default Checkout;
