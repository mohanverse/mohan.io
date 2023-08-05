import React from 'react'

function Contact() {
  return (
    <>
    <h1 id="contact" className='text-center mt-32 text-4xl font-bold font-vidaloka text-[#d12065]'>CONTACT US</h1>
    <div className=" mt-20">
    <div className="grid p-8  lg:mx-96">
      <form
        action="https://formspree.io/f/mrgweddd"
        method="POST"
        className="grid gap-10">
        <input
        className='border p-4 rounded-lg border-[#d12065]'
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          required
        />

        <input
        className='border rounded-lg p-4 border-[#d12065]'
          type="email"
          name="Email"
          placeholder="Email"
          autoComplete="off"
          required
        />

        <textarea
        className='border rounded-lg border-[#d12065]'
          name="message"
          cols="30"
          rows="6"
          autoComplete="off"
          required></textarea>

        <input className='bg-[#d12065] font-bold font-vidaloka md:mx-80 mx-24 w-40 border-[#d12065]  place-content-center text-white px-10 py-2' type="submit" value="send" />
      </form>
    </div>
  </div>
    </>
  )
}

export default Contact