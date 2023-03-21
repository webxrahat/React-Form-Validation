import React from 'react';
import logo from "../assets/bootstrap-logo.svg"

const Header = () => {
  return (
    <div className='py-5 text-center'>
      <img style={{width:"72px", height:"57"}} className='d-block mx-auto mb-4' src={logo} alt="logo" />
      <h2>Checkout form</h2>
      <p className='lead'>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
    </div>
  );
};

export default Header;