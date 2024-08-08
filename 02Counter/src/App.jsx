import React from 'react';
import Header from './components/header';
import MainContent from './components/MainContent';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
