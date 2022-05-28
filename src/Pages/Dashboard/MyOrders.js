import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from './../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`https://still-spire-72766.herokuapp.com/orders/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  console.log(orders);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl">My Orders: {orders.length}</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quntity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order.toolName}</td>
              <td>{order.orderQuantiy}</td>
              <td>{order.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
