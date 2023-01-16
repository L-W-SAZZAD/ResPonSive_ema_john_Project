import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import ProductSummary from "../ProductSummary/ProductSummary";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const addToCart = (product) => {
    const newCart = [...carts, product];
    setCarts(newCart);
  };
  useEffect(() => {
    fetch("fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products lg:max-w-[1320px] lg:mx-auto pt-5">
      <div className="products_wrapper lg:flex lg:mx-5">
        <div className="left_products lg:w-[80%] md:w-[70%] lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 lg:gap-3 md:gap-2">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
        <>
          <ProductSummary carts={carts}></ProductSummary>
        </>
      </div>
    </div>
  );
};

export default Products;
