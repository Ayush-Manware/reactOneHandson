import React from "react";
import PropsOne from "./PropsOne";
import PropsTwo from "./PropsTwo";

const PropsMain = () => {
  return (
    <>
      <div className="propsMain" style={{display:"flex", justifyContent:"space-between"}}>
        <PropsOne name="Ayush" age={22} email="ayushmanware19@gmail.com" />
        <PropsTwo name="Piyush" age={22} email="piyush555@gmail.com" />
      </div>
    </>
  );
};

export default PropsMain;
