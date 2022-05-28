import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://still-spire-72766.herokuapp.com/user').then((res) => res.json()));

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL#</th>
            <th>Email</th>
            <th>Give Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
