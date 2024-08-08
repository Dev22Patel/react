import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">EventHive</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-indigo-300">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-300">About</a></li>
            <li><a href="#services" className="hover:text-indigo-300">Services</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
