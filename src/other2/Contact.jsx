import React from 'react'

const Contact = () => {
  return (
    <div>
      <section class="bg-green-50 py-16">
  <div class="max-w-7xl mx-auto px-6">

    
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-green-800">Contact Pakri Mushroom</h2>
      <p class="text-gray-600 mt-3">We would love to hear from you. Reach out for orders or inquiries.</p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">

      
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold text-green-700">📍 Our Location</h3>
          <p class="text-gray-600 mt-2"> DHENGA BARKAGAON HAZARIBAGH JHARKHAND</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-green-700">📞 Phone</h3>
          <p class="text-gray-600 mt-2">+977-98XXXXXXXX</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-green-700">📧 Email</h3>
          <p class="text-gray-600 mt-2">info@pakrimushroom.com</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-green-700">🕒 Working Hours</h3>
          <p class="text-gray-600 mt-2">Sunday – Friday: 8:00 AM – 6:00 PM</p>
        </div>
      </div>

    
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Full Name</label>
            <input type="text" placeholder="Enter your name"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600  text-black"/>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" placeholder="Enter your email"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-black"/>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Message</label>
            <textarea rows="4" placeholder="Write your message"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600  text-black"></textarea>
          </div>

          <button type="submit"
            class="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300">
            Send Message
          </button>
        </form>
      </div>

    </div>
  </div>
</section>


    </div>
  )
}

export default Contact