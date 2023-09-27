import React, { useState } from "react";
import StateOne from "./StateOne";
import StateTwo from "./StateTwo";

const StateMain = () => {
  const [name, setName] = useState("Ayush");
  const [email, setEmail] = useState("ayushmanware19@gmail.com");
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  return (
    <>
      <div className="stateContainer">
        <StateOne name={name} email={email} />
        <StateTwo arr={array}/>
      </div>
    </>
  );
};

export default StateMain;
