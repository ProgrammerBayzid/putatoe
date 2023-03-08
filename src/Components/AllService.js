import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

const AllService = () => {
  const product = productData.map((item) => (
    <div className="mr-10">
      <Product
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ));

  return (
    <div className="mt-20 mb-20">
      <div className="mt-20 mb-24">
        <h1 className="bg-cyan-200 font-bold text-4xl p-5 mx-56 rounded-xl	">
          All Service Providers
        </h1>
        <p className="text-3xl mt-5">Construction</p>
        <div className="mx-96  mt-2">
          <hr></hr>
        </div>
      </div>

      <div className="">
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>
    </div>
  );
};

export default AllService;
