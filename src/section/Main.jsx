import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  address: "",
  address2: "",
  country: "",
  state: "",
  zip: "",
  paymentMethod: "",
  nameOnCard: "",
  cardNumber: "",
  expiration: "",
  cvv: ""

}


const validationSchema = Yup.object({
  firstName: Yup.string().min(6, 'Minimum 6 characters').max(10, 'Maximum 10 characters').required('required'),
  lastName: Yup.string().min(2, 'Minimum 2 characters').required('required'),
  userName: Yup.string().required('required')
    .matches(
      /^(?=.*[a-z])/,
      "Must Contain One Lowercase Character"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Must Contain One Uppercase Character"
    )
    .matches(
      /^(?=.*[0-9])/,
      "Must Contain One Number Character"
    )
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "Must Contain One Special Case Character"
    )
    .min(6, 'Must Contain 6 Characters')
    .max(8, 'Maximum 8 Characters')
  ,
  email: Yup.string().email('Invalid email address').required('required'),
  address: Yup.string().required('required'),
  address2: Yup.string(),
  country: Yup.string().required('required'),
  state: Yup.string().required('required'),
  zip: Yup.number().required('required'),
  paymentMethod: Yup.string().required('required'),
  nameOnCard: Yup.string().required('required'),
  cardNumber: Yup.number().required('required'),
  expiration: Yup.string().required('required'),
  cvv: Yup.number().required('required')

})



const Main = () => {
  // const [userData, setUserData] = useState({
  //   required: false,
  //   lowercase: false,
  //   uppercase: false,
  //   number: false,
  //   special: false
  // })


  const formik = useFormik({
    initialValues,
    validationSchema,
    // validate: (values, props) => {
    //   const newData = { ...userData }
    //   const userError = {};
    //   if (!values.userName) {
    //     userError.userName = 'Required';
    //     newData.required = true
    //   }
    //   else if (/^(?=.*[a-z])/.test(values.userName)) {
    //     userError.userName = 'Must Contain One Lowercase Character';
    //     newData.lowercase = true
    //   }
    //   else if (/^(?=.*[A-Z])/.test(values.userName)) {
    //     userError.userName = 'Must Contain One uppercase Character';
    //     newData.uppercase = true
    //   }
    //   console.log("newData", newData);
    //   // setUserData(newData)
    //   return userError;
    // },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      formik.resetForm()
    }
  })
  // const data = formik.values.userName;
  // const valueOfData = data.filter((n) => n.data.toLowerCase().includes(n.toLowerCase()))
  // console.log(valueOfData)
  // console.log("touched", formik.values.firstName);

  // const colorChange = (values) =>{

  // }

  // function fieldData() {
  //   const data = formik.values.userName;
  //   const valueOfData = data.filter((n) => n.data.toLowerCase().includes(n.toLowerCase()))
  //   console.log(valueOfData)
  // }
  // fieldData()



  if (formik.values.userName === '') {
    console.log("true");

  } else {
    console.log("false");
  }
















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
                <h6 className="my-0">Promo code</h6>
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
              <input type="text" className="form-control" placeholder="Promo code" />
              <button type="submit" className="btn btn-secondary">Redeem</button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor='firstName' className="form-label">First name</label>
                <input
                  id='firstName'
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // {...formik.getFieldProps('firstName')} 
                  className="form-control"
                />
                {formik.errors.firstName ? (
                  <small className='text-danger'>{formik.errors.firstName}</small>
                ) : null}
              </div>

              <div className="col-sm-6">
                <label htmlFor='lastName' className="form-label">Last name</label>
                <input id='lastName' {...formik.getFieldProps('lastName')} type="text" className="form-control" />
                {(formik.values.lastName || formik.errors.lastName) && (
                  <small className='text-danger'>{formik.errors.lastName}</small>
                )}
              </div>

              <div className="col-12">
                <label className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input {...formik.getFieldProps('userName')} id='userName' type="text" className="form-control" placeholder="Username" />
                </div>
                <ul className='list-unstyled'>
                  <li><small className={`text-${formik.values.userName === '' ? 'dark' : 'success'}`}>Must Contain One Lowercase Character</small></li>
                  <li><small className={`${''}`}>Must Contain One Uppercase Character</small></li>
                  <li><small>Must Contain One Special Case Character</small></li>
                  <li><small>Must Contain One Number Character</small></li>
                  <li><small>Must Contain 6 Characters</small></li>
                  <li><small>Maximum 8 Characters</small></li>

                  {/* {console.log(formik.getFieldProps('userName'))}
                  {console.log(formik.values.userName)} */}
                  {/*                   
                  {formik.errors.userName ? (<small><li>{formik.errors.userName
                    && "Must Contain One Uppercase Character"
                    ? "Must Contain One Uppercase Character"
                    : ''}</li></small>) : null}
                  {formik.errors.userName ? (<small><li>{formik.errors.userName && "Must Contain One Lowercase Character"}</li></small>) : null}
                  {formik.errors.userName ? (<small><li>{formik.errors.userName && "Must Contain One Number Character"}</li></small>) : null}
                  {formik.errors.userName ? (<small><li>{formik.errors.userName && "Must Contain  One Special Case Character"}</li></small>) : null}
                  {formik.errors.userName ? (<small><li>{formik.errors.userName && "Must Contain 8 Characters"}</li></small>) : null}
                  {formik.errors.userName ? (<small><li>{formik.errors.userName && "Maximum 8 Characters"}</li></small>) : null} */}
                </ul>
                {/* {formik.errors.userName ? (<small>{formik.errors.userName}</small>) : null} */}
              </div>

              <div className="col-12">
                <label className="form-label">Email <span className="text-muted">(Optional)</span></label>
                <input id='email' {...formik.getFieldProps('email')} type="email" className="form-control" placeholder="you@example.com" />
                {formik.touched.email && formik.errors.email ? (
                  <small className='text-danger'>{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <input {...formik.getFieldProps('address')} id='address' type="text" className="form-control" placeholder="1234 Main St" />
                {formik.touched.address && formik.errors.address ? (
                  <small className='text-danger'>{formik.errors.address}</small>
                ) : null}
              </div>

              <div className="col-12">
                <label className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                <input {...formik.getFieldProps('address2')} id='address2' type="text" className="form-control" placeholder="Apartment or suite" />
                {formik.touched.address2 && formik.errors.address2 ? (
                  <small className='text-danger'>{formik.errors.address2}</small>
                ) : null}
              </div>

              <div className="col-md-5">
                <label className="form-label">Country</label>
                <select {...formik.getFieldProps('country')} className="form-select">
                  <option>Choose...</option>
                  <option>United States</option>
                </select>
                {formik.errors.country ? (
                  <small className='text-danger'>{formik.errors.country}</small>
                ) : null}
              </div>

              <div className="col-md-4">
                <label className="form-label">State</label>
                <select {...formik.getFieldProps('state')} className="form-select" >
                  <option>Choose...</option>
                  <option>California</option>
                </select>
                {formik.errors.state ? (
                  <small className='text-danger'>{formik.errors.state}</small>
                ) : null}
              </div>

              <div className="col-md-3">
                <label className="form-label">Zip</label>
                <input {...formik.getFieldProps('zip')} id='zip' className="form-control" />
                {formik.errors.zip ? (
                  <small className='text-danger'>{formik.errors.zip && "only receive Number"} </small>
                ) : null}
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" >Shipping address is the same as my billing address</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Save this information for next time</label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input {...formik.getFieldProps('paymentMethod')} name="paymentMethod" type="radio" className="form-check-input" value="Credit card" />
                <label className="form-check-label" >Credit card</label>
              </div>
              <div className="form-check">
                <input {...formik.getFieldProps('paymentMethod')} name="paymentMethod" type="radio" className="form-check-input" value="Debit card" />
                <label className="form-check-label" >Debit card</label>
              </div>
              <div className="form-check">
                <input {...formik.getFieldProps('paymentMethod')} name="paymentMethod" type="radio" className="form-check-input" value="Paypal" />
                <label className="form-check-label" >PayPal</label>
              </div>
              {formik.errors.paymentMethod ? <small className='text-danger'>{formik.errors.nameOnCard}</small> : null}
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label className="form-label">Name on card</label>
                <input {...formik.getFieldProps('nameOnCard')} id='nameOnCard' type="text" className="form-control" />
                <small className="text-muted">Full name as displayed on card</small>
                {formik.touched.nameOnCard && formik.errors.nameOnCard ? (
                  <small className='text-danger d-block'>{formik.errors.nameOnCard}</small>
                ) : null}
              </div>

              <div className="col-md-6">
                <label className="form-label">Credit card number</label>
                <input {...formik.getFieldProps('cardNumber')} id='cardNumber' className="form-control" />
                {formik.errors.cardNumber ? (
                  <small className='text-danger'>{formik.errors.cardNumber && "only receive Number"} </small>
                ) : null}
              </div>

              <div className="col-md-3">
                <label className="form-label">Expiration</label>
                <input {...formik.getFieldProps('expiration')} id='expiration' type="text" className="form-control" />
                {formik.touched.expiration && formik.errors.expiration ? (
                  <small className='text-danger'>{formik.errors.expiration}</small>
                ) : null}
              </div>

              <div className="col-md-3">
                <label className="form-label">CVV</label>
                <input {...formik.getFieldProps('cvv')} id='cvv' className="form-control" />
                {formik.errors.cvv ? (
                  <small className='text-danger '>{formik.errors.cvv && "only receive Number"} </small>
                ) : null}
              </div>
            </div>

            <hr className="my-4" />

            <button type='submit' className='w-100 btn btn-primary btn-lg'>Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;