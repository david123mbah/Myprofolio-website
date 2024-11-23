// pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline">
        Go back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
