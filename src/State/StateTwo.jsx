import React from 'react'

const StateTwo = ({arr}) => {
  return (
    <>
     <h3>{arr.map((e,i,a)=> e+", ")}</h3>
    </>
  )
}

export default StateTwo