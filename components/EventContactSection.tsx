import React from "react";

const bgColor = "#B0965F"; // Marrón tierra/dorado oscuro

const EventContactSection = () => (
  <section
    className="w-full py-20"
    style={{ backgroundColor: bgColor }}
  >
    <div id="contact" className="max-w-5xl mx-auto px-4">
      {/* Título */}
      <h2 className="text-center text-[64px] font-league-gothic uppercase mb-4 text-[#2D2D2D]">
        TELL US ABOUT YOUR EVENT!
      </h2>
      {/* Texto Introductorio */}
      <p className="text-center text-[28px] font-roboto mb-12 text-[#2D2D2D]">
        To request our catering service and make your party or celebration a memorable one, please complete the form below. We will do our best to accommodate your desired date and any special requests you may have.
      </p>
      {/* Formulario */}
      <form className="bg-white/80 rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Full Name */}
          <div>
            <label className="block text-lg font-roboto mb-2 text-[#2D2D2D]">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="ex. John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B0965F] text-lg"
            />
          </div>
          {/* Number of People */}
          <div>
            <label className="block text-lg font-roboto mb-2 text-[#2D2D2D]">
              Number of People <span className="text-red-600">*</span>
            </label>
            <select
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B0965F] text-lg appearance-none"
              defaultValue="250"
            >
              <option value="" disabled>
                Select...
              </option>
              <option value="50">50 people</option>
              <option value="100">100 people</option>
              <option value="150">150 people</option>
              <option value="200">200 people</option>
              <option value="250">250 people</option>
              <option value="300">300 people</option>
              <option value="350">350 people</option>
              <option value="400">400 people</option>
              <option value="500">500 people</option>
              <option value="more">More people</option>
            </select>
          </div>
          {/* Select Date */}
          <div>
            <label className="block text-lg font-roboto mb-2 text-[#2D2D2D]">
              Select Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B0965F] text-lg"
              placeholder="August 26th, 2025"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Phone */}
          <div>
            <label className="block text-lg font-roboto mb-2 text-[#2D2D2D]">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="(801) - 490 - 7890"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B0965F] text-lg"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-lg font-roboto mb-2 text-[#2D2D2D]">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B0965F] text-lg"
            />
          </div>
          {/* Select Time */}
          <div>
            <label className="block text-lg font-roboto mb-2 text-[#2D2D2D]">
              Select Time <span className="text-red-600">*</span>
            </label>
            <select
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B0965F] text-lg appearance-none"
              defaultValue="17:00"
            >
              <option value="" disabled>
                Select...
              </option>
              <option value="8:00">8:00 AM</option>
              <option value="8:30">08:30 AM</option>
              <option value="9:00">09:00 AM</option>
              <option value="9:30">09:30 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="16:00">04:00 PM</option>
              <option value="16:30">04:30 PM</option>
              <option value="19:30">07:30 PM</option>
              <option value="20:00">08:00 PM</option>
              <option value="20:30">08:30 PM</option>
              <option value="21:00">09:00 PM</option>
            </select>
          </div>
          {/* Select Occasion */}
          <div>
            <label className="block text-lg font-roboto mb-2 text-[#2D2D2D]">
              Select Occasion <span className="text-red-600">*</span>
            </label>
            <select
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B0965F] text-lg appearance-none"
            >
              <option value="" disabled selected>
                Select...
              </option>
              <option value="quinceañera">Quinceañera Parties</option>
              <option value="weddings">Weddings</option>
              <option value="socialevent">Social Events</option>
              <option value="corporate">Corporate Events</option>
            </select>
          </div>
        </div>
        {/* Description / Request */}
        <div className="mb-8">
          <label className="block text-lg font-roboto mb-2 text-[#2D2D2D]">
            Description / Request (optional)
          </label>
          <textarea
            rows={4}
            placeholder="Any Special Request?..."
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B0965F] text-lg resize-none"
          />
        </div>
        {/* Botón de Envío */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white text-[34px] font-roboto uppercase px-16 py-4 rounded-lg hover:bg-[#2D2D2D] transition"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default EventContactSection;