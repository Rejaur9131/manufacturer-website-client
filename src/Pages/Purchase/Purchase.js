import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState({});
  const [orderQuantiy, setOrderQuntity] = useState({});
  let errorElement;

  const orderQuntityRef = useRef('');

  const handleOrder = (event) => {
    event.preventDefault();
    const orderQuntity = orderQuntityRef.current.value;
    setOrderQuntity(orderQuntity);
  };

  useEffect(() => {
    axios
      .get(`https://still-spire-72766.herokuapp.com/tools/${id}`)
      .then((response) => setTool(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (orderQuantiy < tool.minimumOrderQuantity) {
    errorElement = (
      <p className="text-red-500">
        <small>{'Your Order is Lowest'}</small>
      </p>
    );
  }

  if (orderQuantiy > tool.availableQuantity) {
    errorElement = (
      <p className="text-red-500">
        <small>{'Your Order is Highest'}</small>
      </p>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl text-purple-500 font-bold">Tool You Have Selected To Purchase</h2>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10 ">
            <figure className="pl-5">
              <img className="w-48 " src={tool.img} alt="Album" />
            </figure>
            <h1 className="text-5xl font-bold">{tool.name}</h1>
            <p className="py-6">{tool.description}</p>
            <div className="htmlhtmlForm-control">
              <label className="label">
                <span className="label-text">Price per unit</span>
              </label>
              <input type="text" placeholder={tool.unitPrice} className="input input-bordered" disabled />
            </div>
            <div className="htmlhtmlForm-control">
              <label className="label">
                <span className="label-text">Minimum Order Quantity</span>
              </label>
              <input type="text" placeholder={tool.minimumOrderQuantity} className="input input-bordered" disabled />
            </div>
            <div className="htmlhtmlForm-control">
              <label className="label">
                <span className="label-text">Available Order Quantity</span>
              </label>
              <input type="text" placeholder={tool.availableQuantity} className="input input-bordered" disabled />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="htmlhtmlForm-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder={user.displayName} className="input input-bordered" disabled />
              </div>
              <div className="htmlhtmlForm-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder={user.email} className="input input-bordered" disabled />
              </div>
              <div className="htmlhtmlForm-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" placeholder="Address" className="input input-bordered" />
              </div>
              <div className="htmlhtmlForm-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="number" placeholder="Phone Number" className="input input-bordered" />
              </div>
              <div className="htmlhtmlForm-control">
                <label className="label">
                  <span className="label-text">Your Order Quantity</span>
                </label>
                <input type="number" onBlur={handleOrder} ref={orderQuntityRef} value={tool.minimumOrderQuantity} className="input input-bordered" />
              </div>
              {errorElement}
              <div className="htmlhtmlForm-control mt-6">
                {orderQuantiy < tool.minimumOrderQuantity || orderQuantiy > tool.availableQuantity ? (
                  <button disabled className="btn btn-primary">
                    Place Order
                  </button>
                ) : (
                  <button className="btn btn-primary">Place Order</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
