import React from 'react'

function Project() {
  return (
    <>
    <div className='text-center mt-32 text-4xl font-bold font-vidaloka text-[#d12065]'>
         <h1>PROJECTS</h1>
    </div>
    <div className="py-6  mx-6  md:mx-40 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://github.com/mohanverse/RODE-CLONE-WEBSITE/blob/main/screenshots/Screenshot%20(106).png?raw=true" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://github.com/mohanverse/RODE-CLONE-WEBSITE/blob/main/screenshots/Screenshot%20(109).png?raw=true" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://github.com/mohanverse/RODE-CLONE-WEBSITE/blob/main/screenshots/Screenshot%20(110).png?raw=true" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://github.com/mohanverse/RODE-CLONE-WEBSITE/blob/main/screenshots/Screenshot%20(111).png?raw=true" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://github.com/mohanverse/RODE-CLONE-WEBSITE/blob/main/screenshots/Screenshot%20(113).png?raw=true" /> 
	</div>
</div>
  <div className='text-center mt-10'>
     <a href="https://github.com/mohanverse?tab=repositories" className='px-10 py-3 text-3xl text-white bg-black font-bold'>MORE</a>
  </div>

    </>
  )
}

export default Project