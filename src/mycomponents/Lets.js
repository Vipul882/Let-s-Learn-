import React from 'react'
import Letslearnitems from './Letslearnitems'

const Lets = (props) => {
  return (
    <div className='container'>
      <h3 className="text-center my-3">Let's Learn </h3>
      <Letslearnitems letm={props.lets[0]}/>


    </div>
  )
}

export default Lets
