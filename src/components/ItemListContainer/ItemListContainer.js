import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UIContext } from "../Context/UIContext";
import { getFirestore } from "../Firebase/ConfigFirebase";
import { Loader } from "../Loader/Loader";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState(false);
  const { loading, setLoading } = useContext(UIContext);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const itemColletion = categoryId
      ? db.collection("products").where("category", "==", categoryId)
      : db.collection("products");

    !categoryId ? setAllItems(true) : setAllItems(false);

    itemColletion
      .get()
      .then((response) => {
        const newItems = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(newItems);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, setLoading]);

  return (
    <div className="MainContainer">
      {loading ? <Loader /> : <ItemList items={items} allItems={allItems} />}
    </div>
  );
};
