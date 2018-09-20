import React from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister'

const Wrapper = () => {
  return (
    <div className="wrapper">
      <FormLogin />
      <FormRegister />
    </div>
  )
}

export default Wrapper;