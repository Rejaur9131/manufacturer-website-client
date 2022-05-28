import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://still-spire-72766.herokuapp.com/user/admin/${email}`, {
      method: 'PUT'
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success('Succeessfully made an Admin');
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
