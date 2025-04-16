// import React, { useState } from 'react'
// import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
// import MenuOverlay from './MenuOverlay';
// function Header() {

//     const [toggle,setToggle]=useState(false)
//     const menuList=[
//         {
//             id:1,
//             title:'HOME'
//         },
//         {
//             id:1,
//             title:'ABOUT'
//         },
//         {
//             id:1,
//             title:'SERVICE'
//         },
//         {
//             id:1,
//             title:'PORTFOLIO'
//         },
//         {
//             id:1,
//             title:'CONTACT'
//         },
//     ]
//   return (
//     <div className='flex items-center justify-between'>
//         <div>
//             <h2 className='text-[24px] font-bold text-white'>VISHAL
//             <span className='text-red-500'> SANAP</span></h2>
//         </div>
//         <div className='hidden md:flex gap-4'>
//             {menuList.map((item)=>(
//                 <div>
//                     <h2 className='text-white 
//                     hover:border-[1px] border-red-500 rounded-full
//                     text-[15px] px-3 py-1 cursor-pointer'>{item.title}</h2>
//                     </div>
//             ))}
//             <h2 className='text-white 
//                     hover:border-[1px] border-red-500 rounded-full
//                     text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800 '>HIRE ME</h2>
//         </div>
//         <div className='md:hidden'>
//            {!toggle? <HiBars3BottomRight onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>
//            :<HiOutlineXMark onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>}
//             {toggle?<MenuOverlay menuList={menuList} />:null}   
//         </div>
//     </div>
//   )
// }

// export default Header

// import React, { useState } from 'react';
// import { HiBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2';
// import MenuOverlay from './MenuOverlay';

// function Header() {
//   const [toggle, setToggle] = useState(false);

//   const menuList = [
//     { id: 1, title: 'HOME' },
//     { id: 2, title: 'ABOUT' },
//     { id: 3, title: 'SERVICE' },
//     { id: 4, title: 'PORTFOLIO' },
//     { id: 5, title: 'CONTACT' },
//   ];

//   return (
//     <div className='flex items-center justify-between py-4 px-4 md:px-10'>
//       {/* Logo */}
//       <div>
//         <h2 className='text-[24px] font-bold text-white'>
//           VISHAL <span className='text-red-500'>KONDI</span>
//         </h2>
//       </div>

//       {/* Desktop Menu */}
//       <div className='hidden md:flex gap-4 items-center'>
//         {menuList.map((item) => (
//           <h2
//             key={item.id}
//             className='text-white text-[15px] px-3 py-1 rounded-full cursor-pointer hover:border hover:border-red-500 transition-all'
//           >
//             {item.title}
//           </h2>
//         ))}
//         <h2 className='text-white text-[15px] px-3 py-1 rounded-full cursor-pointer border border-red-500 bg-gradient-to-r from-red-500 to-red-800 hover:opacity-90 transition-all'>
//           HIRE ME
//         </h2>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className='md:hidden'>
//         {!toggle ? (
//           <HiBars3BottomRight
//             onClick={() => setToggle(true)}
//             className='text-white text-[26px] cursor-pointer'
//           />
//         ) : (
//           <HiOutlineXMark
//             onClick={() => setToggle(false)}
//             className='text-white text-[26px] cursor-pointer'
//           />
//         )}
//       </div>

//       {/* Mobile Menu Overlay */}
//       {toggle && <MenuOverlay menuList={menuList} />}
//     </div>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2';
import MenuOverlay from './MenuOverlay';

function Header() {
  const [toggle, setToggle] = useState(false);

  const menuList = [
    { id: 1, title: 'HOME' },
    { id: 2, title: 'ABOUT' },
    { id: 3, title: 'SERVICE' },
    { id: 4, title: 'PORTFOLIO' },
    { id: 5, title: 'CONTACT' },
  ];

  return (
    <header className='w-full fixed top-0 z-50 bg-black bg-opacity-60 backdrop-blur-md shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10'>
        {/* Logo */}
        <div>
          <h2 className='text-[24px] font-extrabold text-white tracking-wide'>
            VISHAL <span className='text-red-500'>KONDI</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-6'>
          {menuList.map((item) => (
            <button
              key={item.id}
              className='text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300'
            >
              {item.title}
            </button>
          ))}
          <button className='text-white text-sm font-semibold px-5 py-2 rounded-full border border-red-500 bg-gradient-to-r from-red-500 to-red-800 hover:opacity-90 transition-all'>
            HIRE ME
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          {!toggle ? (
            <HiBars3BottomRight
              onClick={() => setToggle(true)}
              className='text-white text-3xl cursor-pointer'
            />
          ) : (
            <HiOutlineXMark
              onClick={() => setToggle(false)}
              className='text-white text-3xl cursor-pointer'
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {toggle && <MenuOverlay menuList={menuList} />}
    </header>
  );
}

export default Header;
