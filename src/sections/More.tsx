import React from 'react'

const More = () => {
  return (
    <div className="w-full flex justify-center py-24 bg-gradient-to-r from-[#FFFDF5]  to-[#F0EFD5]">
      <div
        className="flex flex-col w-[80%] md:w-[70%] rounded-2xl shadow-lg px-12 md:px-24 py-8 md:py-16 text-center text-white justify-center items-center"
        style={{
          background:
            "linear-gradient(to right, #006d77, #16796F 70%, #16796F)",
        }}
      >
        <h1 className="font-bold mb-4 text-[33px] leading-[40px] w-[100%] md:w-[70%] md:text-[45px] md:leading-[60px]">
          More than just a salon & spa booking software
        </h1>
        <p className="mb-6 w-[100%] text-center font-regular text-[14px] md:text-[14px] md:w-[70%]">
          Splice is the all-in-one software for managing your beauty and
          wellness business. From appointment bookings to revenue growth, Splice
          has you covered.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-64 text-gray-800 rounded-full border border-gray-400 focus:outline-none font-regular bg-transparent text-[13px]"
          />
          <button className="px-8 py-2 text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-200 text-[13px] bg-white">
            Speak to a Sales Rep
          </button>
        </div>
      </div>
    </div>
  )
}

export default More;
