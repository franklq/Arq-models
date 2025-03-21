
import React from 'react'

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-secondary mb-8">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold mb-2">Residential Design</h4>
            <p className="text-gray-600">Tailored solutions for modern living spaces, blending functionality and style.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold mb-2">Commercial Spaces</h4>
            <p className="text-gray-600">Innovative designs that enhance productivity and brand presence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold mb-2">Urban Planning</h4>
            <p className="text-gray-600">Sustainable and visionary planning for urban development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
