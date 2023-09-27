import React from "react";

class PropsTwo extends React.Component {
  render() {
    return(
      <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.email}</td>
            <td>{this.props.age}</td>
          </tr>
        </tbody>
      </table>
    </>
    )
  }
}

export default PropsTwo;
