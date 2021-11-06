import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Redirect, useHistory } from "react-router";
import { UIContext } from "../Context/UIContext";
import { Loader } from "../Loader/Loader";
import { generateOrder } from "../Firebase/GenerateOrder";
import { CheckoutItemDeail } from "./CheckoutItemDeail.js";
import Swal from "sweetalert2";
import "firebase/firestore";
import "./Checkout.css";

export const Checkout = () => {
  const { loading, setLoading } = useContext(UIContext);
  const { goBack } = useHistory();
  const { cartItems, calculateTotal, emptyCart } = useContext(AppContext);
  const [values, setValues] = useState({
    personName: "",
    lastName: "",
    email: "",
    telephone: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    generateOrder(values, cartItems, calculateTotal())
      .then((res) => {
        Swal.fire({
          title: "Purchase finished!",
          text: `This is the Id of your order: ${res}`,
          icon: "success",
          willClose: () => {
            emptyCart();
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Products out of stock",
          text: `There is no stock of the product: ${err
            .map((el) => el.name)
            .join(", ")}`,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="products">
      {cartItems.length === 0 && <Redirect to="/" />}
      {loading && <Loader />}

      <h1 className="text-center">Fill in your details</h1>
      <hr />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h2>Products in the Cart</h2>
            <hr />
            <div className="d-flex justify-content">
              <div className="row">
                {cartItems.map((item) => (
                  <CheckoutItemDeail {...item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <h2>User Informartion</h2>
              <hr />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Name"
                name="personName"
                value={values.personName}
                onChange={handleInputChange}
                required
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                required
              />
              <input
                className="form-control my-2"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                required
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Telephone"
                name="telephone"
                value={values.telephone}
                onChange={handleInputChange}
                required
              />
              <button
                className="btn btn-success"
                disabled={loading}
                type="submit"
              >
                Finish
              </button>
            </form>
          </div>
        </div>
        <hr />
        <button className="btn btn-primary" onClick={() => goBack()}>
          Back
        </button>
      </div>
    </div>
  );
};
