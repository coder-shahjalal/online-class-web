import React from "react";
import "./CourseProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CourseProduct = (props) => {
  const { img, name, seller, price, stock } = props.product;

  return (
    <div className=" row product">
      <div className="col-md-5">
        <img src={img} alt="" />
      </div>
      <div className="col-md-7">
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>
          <small>${price}</small>
        </p>
        <br />
        <p>
          <small>total enroll :{stock}</small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="btn btn-danger buton"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          enroll now
        </button>
      </div>
    </div>
  );
};

export default CourseProduct;
