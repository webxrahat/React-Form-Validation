import React from 'react';
import { useForm } from 'react-hook-form';

const Main = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div>
      <div className='row m-0 g-5'>
        <div className='col-md-5 col-lg-4 order-md-last'>
          <h4 className='d-flex justify-content-between align-items-center mb-3'>
            <span className='text-primary'>Your cart</span>
            <span className='badge bg-primary rounded-pill'>3</span>
          </h4>
          <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className ="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" {...register("First name", {required: true, maxLength: 80})}/>
                
              </div>

              <div className="col-sm-6">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control" {...register("Last name", {required: true, maxLength: 80})}/>
               
              </div>

              <div className="col-12">
                <label className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" placeholder="Username" {...register("Username", {required: true, maxLength: 80})} />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" placeholder="you@example.com" {...register("Email", {required: true, maxLength: 80})}/>
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="1234 Main St" {...register("Address", {required: true, maxLength: 80})} />
              </div>

              <div className="col-12">
                <label className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" placeholder="Apartment or suite" {...register("Address2", {required: true, maxLength: 80})}/>
              </div>

              <div className="col-md-5">
                <label className="form-label">Country</label>
                <select className="form-select">
                  <option >Choose...</option>
                  <option>United States</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">State</label>
                <select className="form-select" >
                  <option>Choose...</option>
                  <option>California</option>
                </select>
                
              </div>

              <div className="col-md-3">
                <label  className="form-label">Zip</label>
                <input type="text" className="form-control"/>
                
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" >Shipping address is the same as my billing address</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input"/>
              <label className="form-check-label">Save this information for next time</label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input name="paymentMethod" type="radio" className="form-check-input"  />
                <label className="form-check-label" >Credit card</label>
              </div>
              <div className="form-check">
                <input  name="paymentMethod" type="radio" className="form-check-input"  />
                <label className="form-check-label" >Debit card</label>
              </div>
              <div className="form-check">
                <input name="paymentMethod" type="radio" className="form-check-input" />
                <label className="form-check-label" >PayPal</label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label  className="form-label">Name on card</label>
                <input type="text" className="form-control"/>
                <small className="text-muted">Full name as displayed on card</small>
               
              </div>

              <div className="col-md-6">
                <label className="form-label">Credit card number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-3">
                <label className="form-label">Expiration</label>
                <input type="text" className="form-control" />
              
              </div>

              <div className="col-md-3">
                <label className="form-label">CVV</label>
                <input type="text" className="form-control"  />
               
              </div>
            </div>

            <hr className="my-4" />

            <button type="submit" className='w-100 btn btn-primary btn-lg'>Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;