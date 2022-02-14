import React from "react";

export default function Contact() {
  return (
    <div className="flex-col  flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full bg-gradient-to-br from-blue-400 to-blue-500 py-16">
      <h2 className="flex mt-24 text-2xl underline text-white">Contact me</h2>
      <p className="text-white text-3xl ">
        Feel free to to contact me any time, through any method below.
      </p>

      <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-8">
        <div className="space-y-12">
          <div>
            <label className="text-white block mb-6 text-xl font-bold">
              Name:
            </label>
            <input className="w-full border border-input-border bg-white px-4 py-4 text-black"></input>
          </div>
          <div>
            <label className="text-white block mb-6 text-xl font-bold">
              Email:
            </label>
            <input
              type="email"
              className="w-full border border-input-border bg-white px-4 py-4 text-black"
            ></input>
          </div>
          <div>
            <label className="text-white block mb-6 text-xl font-bold">
              Message:
            </label>
            <textarea
              type="email"
              className="w-full border border-input-border bg-white px-4 py-4 h-56 resize-none text-black"
            ></textarea>
          </div>
          <div className="py-4">
            <button className="px-6 py-4 bg-blue-700 hover:bg-blue-500 text-white font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
