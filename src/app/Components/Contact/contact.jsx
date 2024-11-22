import React from 'react';
import { contact } from '../DummyData/DummyData';
import { Heading } from '../heading';

const Contact = () => {
  return (
    <section className="contact py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <Heading
          title="Keep In Touch"
          className="text-5xl font-poppins text-yellow-500 text-center mb-8"
        />
        <br/>
        <br/>
        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2  p-6 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  data-aos="flip-left"
                  className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  data-aos="flip-right"
                  className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                data-aos="flip-up"
                className="p-3 w-full mb-4 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <textarea
                placeholder="Message"
                data-aos="flip-down"
                cols="30"
                rows="5"
                className="p-3 w-full mb-4 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="px-6 w-full text-white py-3 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2">
            {contact.map((item, t) => (
              <div
                key={t}
                className=" text-white p-4 mb-4"
                data-aos="zoom-in"
              >
                <p className="text-lg">{item.text1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
