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

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quntity</th>
            <th>Total Price</th>
            {/* <th>Payment Status</th> */}
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            <th>1</th>
            <td>{orders[0]?.toolName}</td>
            <td>{orders[0]?.orderQuantiy}</td>
            <td>{orders[0]?.totalPrice}</td>
          </tr>
          {/* <!-- row 2 --> */}
          <tr>
            <th>2</th>
            <td>{orders[1]?.toolName}</td>
            <td>{orders[1]?.orderQuantiy}</td>
            <td>{orders[1]?.totalPrice}</td>
          </tr>
          {/* <!-- row 3 --> */}
          <tr>
            <th>3</th>
            <td>{orders[2]?.toolName}</td>
            <td>{orders[2]?.orderQuantiy}</td>
            <td>{orders[2]?.totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
