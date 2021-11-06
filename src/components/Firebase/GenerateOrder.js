import { getFirestore } from "../Firebase/ConfigFirebase";
import firebase from "firebase";

export const generateOrder = (data, cartItems, total) => {
  return new Promise(async (resolve, reject) => {
    const newOrder = {
      buyer: data,
      items: cartItems.map((item) => ({
        id: item.id,
        price: item.price,
        name: item.name,
        quantity: item.quantity,
      })),
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    //send order to firestore
    //batch update
    const db = getFirestore();
    const orders = db.collection("orders");

    const itemsToUpdate = db.collection("products").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartItems.map((item) => item.id)
    );

    const query = await itemsToUpdate.get();
    const batch = db.batch();

    const outOfStock = [];

    query.docs.forEach((doc) => {
      const itemInCart = cartItems.find((prod) => prod.id === doc.id);

      if (doc.data().stock >= itemInCart.quantity) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.quantity,
        });
      } else {
        outOfStock.push({ ...doc.data(), id: doc.id });
      }
    });

    if (outOfStock.length === 0) {
      orders
        .add(newOrder)
        .then((res) => {
          batch.commit();
          resolve(res.id);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      reject(outOfStock);
    }
  });
};
