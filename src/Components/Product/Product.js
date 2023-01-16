import React from "react";

const Product = ({ product, addToCart }) => {
  const { img, name, price, ratings, seller } = product;
  return (
    <div className=" bg-[#fff] lg:w-full md:w-full lg:h-[500px] lg:p-3 md:p-3 rounded-md relative md:h-[600px] sm:h-[900px] h-[600px]">
      <picture className="w-full">
        <img className="w-full   rounded-md" src={img} alt="" />
      </picture>
      <h2 className=" text-sm  pt-2 pb-1 capitalize">{name}</h2>
      <p className="pb-5 text-base">Price: ${price}</p>
      <p className=" text-[12px] text-[#2A414F]">Manufacturer: {seller}</p>
      <h5 className="text-[#2A414F] text-[12px]">Rating: {ratings} start</h5>
      <div className="btn flex justify-center">
        <button
          onClick={() => addToCart(product)}
          className=" absolute bottom-[0px] w-full py-2  bg-[#FFE0B3] rounded-md text-[#0E161A] "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
