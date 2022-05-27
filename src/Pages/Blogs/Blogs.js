import React from 'react';

const Blogs = () => {
  return (
    <div className="flex flex-wrap">
      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <div class="card-body text-justify">
          <h2 class="card-title font-bold mb-3">How will you improve the performance of a React Application?</h2>
          <p>
            React Application performance can improved by using folowing techniques :
            <ul>
              <li>Immutable Data Structures helps improving performance of React Application</li>
              <li>Using useMemo() React hook that is used to cache functions in React, CPU-expensive functions.</li>
              <li>Keeping component state local where necessary.</li>
              <li>Windowing or list virtualization in React</li>
              <li>Lazy loading images in React</li>
              <li>Code-splitting in React using dynamic import()</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <div class="card-body text-justify">
          <h2 class="card-title font-bold mb-3">What are the different ways to manage a state in a React application?</h2>
          <p>
            There are four main types of state to properly manage in your React apps:
            <ul>
              <li className="mb-3">1. Local state: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</li>
              <li className="mb-3">2. Global state: Global state is data we manage across multiple components.To manage global state, reach for third-party libraries like Zustand, Jotai, and Recoil</li>
              <li className="mb-3">3. Server state: Data that comes from an external server that must be integrated with our UI state.SWR and React Query can be a great solution to manage server state</li>
              <li className="mb-3">4. URL state: Data that exists on our URLs, including the pathname and query parameters.To manage URL state React Router is the option to look for, you can get all the information you need using useHistory or useLocation.</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <div class="card-body text-justify">
          <h2 class="card-title">How does prototypical inheritance work?</h2>
          <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <div class="card-body text-justify">
          <h2 class="card-title"> Why you do not set the state directly in React?</h2>
          <p> If we set the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React will not be able to see that there is a change of the state and so it will not be reflected in the original DOM until we reload. The problem is more obvious when we extend a component with React.PureComponent instead of React.component , where React tries to optimize some time by not rendering components if no changes are found. Also, mutating the state directly can lead to odd bugs and components that are hard to optimize.</p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <div class="card-body">
          <h2 class="card-title">Finding products from an Array:</h2>
          <p>
            {`const products = [
                    { name: 'phone', price: 15000, description: 'MI A2-Lite.' },
                    { name: 'watch', price: 3000, description: 'Black smart watch.' },
                    { name: 'tablet', price: 10000, description: 'Samsung 5G supported Tablet.' }
        ];`}
            <br />
            {`const productsByName = products.map((product) => product.name);          
            console.log(productsByName);`}
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <div class="card-body">
          <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
          <p>
            <strong>Unit Test:</strong> In software development Unit testing is a process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. The main objective of unit testing is to isolate written code to test and determine if it works as intended.
          </p>
          <p>
            <strong>Why should write unit tests:</strong> <br />
            1. The earlier a problem is identified, the fewer compound errors occur. <br />
            2. Costs of fixing a problem early can quickly outweigh the cost of fixing it later. <br />
            3. Debugging processes are made easier. Developers can quickly make changes to the code base. <br />
            4. Developers can also re-use code, migrating it to new projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
