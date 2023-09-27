import React from "react";

export class ClassComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            headOne :"This is Class Component Heading One",
            paraOne :"This is Class Component Paragraph One",
            paraTwo:"This is Class Component Paragraph Two"
        }
    }
  render() {
    return (
      <>
        <div className="classContainer" style={{border:"1px solid skyblue", width:"45vw"}}>
          <h1>{this.state.headOne}</h1>
          <p style={{color:"red"}}>{this.state.paraOne}</p>
          <p>{this.state.paraTwo}</p>
        </div>
      </>
    );
  }
}
