import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    axios
      .get(`https://still-spire-72766.herokuapp.com/tools/${id}`)
      .then((response) => setTool(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="text-center">
      <h2 className="text-2xl text-purple-500 font-bold">Tool You Have Selected To Purchase</h2>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10 ">
            <figure className="pl-5">
              <img className="w-48 " src={tool.img} alt="Album" />
            </figure>
            <h1 class="text-5xl font-bold">{tool.name}</h1>
            <p class="py-6">{tool.description}</p>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Price per unit</span>
              </label>
              <input type="text" placeholder={tool.unitPrice} class="input input-bordered" disabled />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Minimum Order Quantity</span>
              </label>
              <input type="text" placeholder={tool.minimumOrderQuantity} class="input input-bordered" disabled />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Available Order Quantity</span>
              </label>
              <input type="text" placeholder={tool.availableQuantity} class="input input-bordered" disabled />
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" placeholder={user.displayName} class="input input-bordered" disabled />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder={user.email} class="input input-bordered" disabled />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input type="text" placeholder="Address" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone Number</span>
                </label>
                <input type="number" placeholder="Phone Number" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Order Quantity</span>
                </label>
                <input type="number" placeholder="Your Order Quantity" class="input input-bordered" />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
