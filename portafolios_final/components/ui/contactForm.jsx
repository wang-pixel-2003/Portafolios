// components/ui/contactForm.jsx

"use client"; // Esto asegura que el componente sea un Client Component

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
      
    e.target.reset();  // Clear the form after submission
  };

  return (
    <section id="contact" className="bg-muted py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}