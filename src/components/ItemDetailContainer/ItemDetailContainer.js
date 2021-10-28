import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UIContext } from "../Context/UIContext";
import { ItemDetail } from "./ItemDetail";
import { Loader } from "../Loader/Loader";
import { getFirestore } from "../Firebase/ConfigFirebase";
import { Link } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [itemFound, setItemFound] = useState(true);
  const { loading, setLoading } = useContext(UIContext);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const itemColletion = db.collection("products");
    const product = itemColletion.doc(itemId);

    product
      .get()
      .then((doc) => {
        if (!doc.exists) {
          setItemFound(false);
        } else {
          setItem({
            id: doc.id,
            ...doc.data(),
          });
          setItemFound(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId, setLoading]);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : itemFound ? (
        <ItemDetail {...item} />
      ) : (
        <>
          <div className="HomeView">
            <header className="HomeView-header">
              <h1>Product Not Found</h1>
              <Link to="/products/" className="btn btn-success">
                Go shopping
              </Link>
            </header>
          </div>
        </>
      )}
    </div>
  );
};
