import React, { useState } from "react";
import "./CourseList.css";
import fakeData from "../../fakeData";
import CourseProduct from "../CourseProduct/CourseProduct";
import Cart from "../Cart/Cart";

const CourseList = () => {
  const first15 = fakeData.slice(0, 15);
  const [products, setProducts] = useState(first15);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (Product) => {
    console.log("Product added", Product);
    const newCart = [...cart, Product];
    setCart(newCart);
  };

  return (
    <div className="courselist-container">
      <div className="product-container">
        {products.map((pd) => (
          <CourseProduct handleAddProduct={handleAddProduct} product={pd}>
            {" "}
          </CourseProduct>
        ))}
      </div>

      <div className="cart-container ">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default CourseList;
