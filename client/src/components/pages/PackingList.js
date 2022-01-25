import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

const PackingList = (props) => {
  const listId = props["*"];
  const [list, setLists] = useState([]);

  useEffect(() => {
    get("/api/list", { _id: props.id }).then((list) => {
      setList(list);
    });
  }, []);

  let listList = null;
  const hasList = list.length !== 0;

  listList = list.map((listObj) => (
    <p>
      Title: {listObj.title}
      Description: {listObj.bio}
      Destination: {listObj.bio}
    </p>
  ));

  return (
    <>
      <p>Packing List {listList}</p>
      <h3> - Suitcases, backpack</h3>
      <h3> - Travel locks</h3>
      <h3> - Luggage tags</h3>
      <h3> - Pens and paper</h3>
      <h3> - Snacks, drinks</h3>
      <h3> - Small pocket knife (not in carry-on!)</h3>
      <h3> - Rope, expandable clothesline</h3>
      <h3> - Financial</h3>
      <h3> - Foreign currency</h3>
      <h3> - Emergency money</h3>
      <h3> - Credit card, debit card</h3>
      <h3> - Extra wallet</h3>
      <h3> - Phone, charger</h3>
      <h3> - Travel pillow, sleeping mask, earplugs</h3>
      <h3> - *will add more later*</h3>
    </>
  );
};

export default PackingList;
