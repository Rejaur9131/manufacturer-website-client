import React from 'react';

const MyPortfolio = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src="https://i.ibb.co/njk19Vd/Rejaur.jpg?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h2 className="text-2xl font-bold">Name: Md. Rejaur Rahman</h2>
          <p className="text-xl py-1">Email: rezaurewubd@gmail.com</p>
          <p className="text-xl py-1">Education: Masters of Bank Management</p>
          <p className="text-xl py-1">Profession: Banker</p>
          <p className="text-xl py-1">Skills: HTML, CSS(Bootstrap, TailwindCSS, DaisyUI), JavaScript, React, React Router, React Firebase Hook, React Query, Jsonwebtoken, Axios, Firebase, Node, Express and MongoDB.</p>
          <ul className="text-xl py-1">
            Projects I have woked with:
            <li>
              <a href="https://rejaur9131.github.io/mission-2022/" target="_blank" rel="noreferrer">
                1. Dev Portfolio Site
              </a>
            </li>
            <li>
              <a href="https://insta-shohor-by-rejaur.netlify.app/" target="_blank" rel="noreferrer">
                2. Insta Shohor
              </a>
            </li>
            <li>
              <a href="https://verdant-sawine-8b2320.netlify.app/" target="_blank" rel="noreferrer">
                1. Product Analysis Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
