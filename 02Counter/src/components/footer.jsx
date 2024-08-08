import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white p-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 EventHive. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-indigo-300">Facebook</a>
          <a href="#" className="hover:text-indigo-300">Twitter</a>
          <a href="#" className="hover:text-indigo-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
