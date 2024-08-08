import React from 'react';

const MainContent = () => {
  return (
    <main className="flex-grow bg-gray-100">
      <section id="home" className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
        <h2 className="text-5xl font-bold mb-4 text-black">Welcome to EventHive</h2>
        <p className="text-xl mb-8">Your one-stop solution for all event management needs.</p>
        <a href="#about" className="bg-indigo-700 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition duration-300">Learn More</a>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-lg text-gray-700 text-center mx-auto max-w-2xl">
            EventHive is a comprehensive platform designed to streamline event planning and execution. We provide everything you need to make your event a success.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-200 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Event Planning</h3>
              <p className="text-gray-700">Complete event planning services tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Vendor Management</h3>
              <p className="text-gray-700">Coordinating with top vendors to ensure quality service.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Attendee Management</h3>
              <p className="text-gray-700">Efficiently managing attendee registrations and communications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">On-Site Coordination</h3>
              <p className="text-gray-700">Ensuring smooth operations and handling logistics on the day of the event.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
