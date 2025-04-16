// import React from 'react'

// function MenuOverlay({menuList}) {
//   return (
//     <div className='absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-7'>
//         {menuList.map((item)=>(
//            <h1 className='text-white text-[24px] mb-6 justify-center mt-10
//            hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>{item.title}</h1>
//         ))}
//     </div>
//   )
// }

// export default MenuOverlay

import React from 'react';

function MenuOverlay({ menuList }) {
  return (
    <nav className='absolute top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md flex flex-col items-center justify-center z-50'>
      {menuList.map((item) => (
        <button
          key={item.id}
          className='text-white text-2xl mb-6 px-4 py-2 rounded transition-transform duration-300 ease-in-out hover:scale-110 hover:text-red-400'
        >
          {item.title}
        </button>
      ))}
      <button className='mt-4 text-white text-lg px-5 py-2 border border-red-500 rounded-full hover:bg-red-500 transition-all'>
        HIRE ME
      </button>
    </nav>
  );
}

export default MenuOverlay;
