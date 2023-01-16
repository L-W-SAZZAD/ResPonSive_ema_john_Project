import React, { useState } from "react";

const ProductSummary = ({ carts }) => {
  let total = 0;
  let shipping = 0;
  let tax = 0;
  let grandTotal = 0;
  for (const cart of carts) {
    total = cart.price + total;
    shipping = cart.shipping + shipping;
    tax = (cart.price * 10) / 100;
    grandTotal = parseFloat(total + shipping + tax).toFixed(2);
  }

  return (
    <div className="product_summary">
      <div className="right_products lg:min-w-[20%] md:min-w-[30%] bg-[#fff] rounded-md pl-10 fixed top-1/2 translate-y-[-50%] right-0 lg:block md:block sm:hidden hidden ">
        <div className="cart_wrapper">
          <h1 className="pt-5 pb-5">Order Summary</h1>
          <p className="pb-1">Selected Items:{carts.length}</p>
          <p className="pb-1">Total Price: ${total}</p>
          <p className="pb-1">Total Shipping Charge: ${shipping}</p>
          <p className="pb-1">Tax: ${tax}</p>
          <h3 className="pb-10">Grand Total: ${grandTotal}</h3>

          <div className="clear_btn pb-5">
            <button className="clear_btn px-5 py-2 bg-[#FF3030] w-[90%] text-center rounded-md">
              Clear Cart
            </button>
          </div>

          <div className="review_btn pb-5">
            <button className="clear_btn px-5 py-2 bg-[#FF9900] w-[90%] text-center rounded-md">
              Review Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
