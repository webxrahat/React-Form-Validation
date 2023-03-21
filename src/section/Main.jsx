import React from 'react';

const Main = () => {
  return (
    <div>
      <div className='row m-0 g-5'>
         <div className='col-md-5 col-lg-4 order-md-last'>
          <h4 className='d-flex justify-content-between align-items-center mb-3'>
            <span className='text-primary'>Your cart</span>
            <span className='badge bg-primary rounded-pill'>3</span>
          </h4>
         </div>
         <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Billing address</h4>
         </div>
      </div>
    </div>
  );
};

export default Main;