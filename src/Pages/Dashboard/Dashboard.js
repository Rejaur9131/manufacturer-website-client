import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl text-purple-500 mb-4">Manage Your Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add A Review</Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My Profile </Link>
          </li>
          <li>
            <Link to="/dashboard/user">All users </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
