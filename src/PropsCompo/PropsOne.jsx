import React from "react";

const PropsOne = (ayush) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ayush.name}</td>
            <td>{ayush.age}</td>
            <td>{ayush.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PropsOne;
