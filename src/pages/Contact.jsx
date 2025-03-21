
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-secondary mb-8">Contact Us</h3>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="mb-4">
            <label className="block mb-2 font-bold">Name</label>
            <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Email</label>
            <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Message</label>
            <textarea className="w-full border border-gray-300 px-4 py-2 rounded"></textarea>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-green-600">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
