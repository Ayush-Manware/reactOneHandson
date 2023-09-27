import React, { useState } from "react";
import { ClassComponent } from "./ClassComponent";
import { FunctionComponent } from "./FunctionComponent";

export class MainComponentOne extends React.Component {

    constructor(){
        super();
        this.state = {
            topHeading : " Styling using Functional and Class Component",
            classBtn : "Class Component",
            functionBtn : "Function Component",
            isHide : false,
            isHideTwo : false
        }
    }

  render() {
    return (
      <>
        <div className="mainContainer">
          <h1 style={{ boxShadow: "2px 2px solid skyblue", textAlign: "center", color: "skyblue", }}> {this.state.topHeading} </h1>
          <div className="buttonContainer">
            <button className="classButton btn" onClick={()=> this.setState({isHide : !this.state.isHide })}>Class Component</button>
            <button className="functionButton btn" onClick = {()=>this.setState({isHideTwo : !this.state.isHideTwo})}>Function Component</button>
          </div>
          <div className="components" style={{ display: "flex", justifyContent: "space-around", margin: "10vw auto", }}>
            {this.state.isHide ? <ClassComponent /> : null}
            {this.state.isHideTwo && <FunctionComponent />}
          </div>
        </div>
      </>
    );
  }
}
