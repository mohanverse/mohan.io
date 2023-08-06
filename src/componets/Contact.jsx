import React from 'react'

function Contact() {
  return (
    <>
    <div className='bg-[#cacac8] p-8 mt-8'>
    <h1 id="contact" className='text-center mt-16 text-4xl font-bold font-vidaloka text-[#d12065]'>CONTACT US</h1>
    <div className=" mt-10">
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

        <div className='flex place-content-center'>
            <input className='bg-[#d12065] font-bold font-vidaloka w-40 border-[#d12065] text-white px-10 py-3 rounded-md text-xl' type="submit" value="send" />
        </div>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}

export default Contact