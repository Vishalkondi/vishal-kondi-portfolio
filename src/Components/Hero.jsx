// import React from 'react'

// function Hero() {
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
//         <div className='mb-10'>
//             <p className='text-white text-[13px]'>HELLO THERE, WELCOME TO MY SITE</p>
//             <p className='text-white text-[40px] font-bold'>I'm VISHAL KONDI</p>
//             <p className='text-red-500 text-[40px] font-bold'> I'm Full Stack Developer</p>
//             <p className='text-white text-[40px] font-bold'>& Frontend Developer</p>
//             <div className='mt-4 flex gap-4'>
//                 <button className='text-white text-[12px] px-3 pb-2 py-2
//              bg-red-500 rounded-full border-[2px] hover:border-white'>SEE PORTFOLIO</button>
//                 <button className='text-white text-[12px] px-3 pb-2 py-2
//              bg-red-500 rounded-full border-[2px] hover:border-white'>CONTACT ME</button>
//             </div>
//         </div>
//         <div className='flex justify-center '>
//         <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D]  to-[#2A26B8]'>
//             <img src="https://media.licdn.com/dms/image/v2/D4D35AQGjTvC6THGQUw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737245030922?e=1745434800&v=beta&t=Yi5o6S9z2uVc95mxRjv62ImzO21uvQNNc7lTMT3-gyc"
//             className='h-full w-[250px] object-cover rounded-[20px]'
//             />
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Hero

// import React from 'react';

// function Hero() {
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center px-4 md:px-10'>
//       {/* Left Section - Text Content */}
//       <div className='mb-10 text-center md:text-left'>
//         <p className='text-white text-sm uppercase tracking-wider'>
//           Hello there, welcome to my site
//         </p>
//         <h1 className='text-white text-4xl md:text-5xl font-bold mt-2'>
//           I'm VISHAL KONDI
//         </h1>
//         <h2 className='text-red-500 text-4xl md:text-5xl font-bold'>
//           I'm a Full Stack Developer
//         </h2>
//         <h3 className='text-white text-4xl md:text-5xl font-bold'>
//           & Frontend Developer
//         </h3>

//         {/* Buttons */}
//         <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
//           <button className='text-white text-sm px-6 py-2 bg-red-500 rounded-full border-2 border-red-500 hover:bg-transparent hover:border-white transition-all'>
//             See Portfolio
//           </button>
//           <button className='text-white text-sm px-6 py-2 bg-red-500 rounded-full border-2 border-red-500 hover:bg-transparent hover:border-white transition-all'>
//             Contact Me
//           </button>
//         </div>
//       </div>

//       {/* Right Section - Image */}
//       <div className='flex justify-center'>
//         <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D] to-[#2A26B8]'>
//           <img
//             src='https://media.licdn.com/dms/image/v2/D4D35AQGjTvC6THGQUw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737245030922?e=1745434800&v=beta&t=Yi5o6S9z2uVc95mxRjv62ImzO21uvQNNc7lTMT3-gyc'
//             alt='Vishal Kondi'
//             className='h-full w-full object-cover rounded-[20px]'
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from 'react';

function Hero() {
  return (
    <section className='w-full min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] pt-24 px-4 md:px-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
        {/* Left Section - Text Content */}
        <div className='text-center md:text-left'>
          <p className='text-gray-300 text-sm uppercase tracking-[4px] mb-2'>
            Hello there, welcome to my site
          </p>
          <h1 className='text-white text-4xl md:text-5xl font-extrabold leading-tight'>
            I'm <span className='text-red-500'>VISHAL KONDI</span>
          </h1>
          <h2 className='text-white text-3xl md:text-4xl font-semibold mt-2'>
            A Passionate <span className='text-red-500'>Full Stack Developer</span>
          </h2>
          <h3 className='text-gray-200 text-2xl md:text-3xl font-medium mt-1'>
            & Frontend Enthusiast 💻
          </h3>

          {/* Buttons */}
          <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <button className='px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-800 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg'>
              See Portfolio
            </button>
            <button className='px-6 py-2 text-sm font-semibold text-white border-2 border-red-500 rounded-full hover:bg-red-500 hover:border-transparent transition-all duration-300'>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className='flex justify-center'>
          <div className='h-[340px] w-[270px] p-2 rounded-[24px] bg-gradient-to-b from-[#FF004D] to-[#2A26B8] shadow-2xl hover:scale-105 transition-transform duration-500'>
            <img
              src='https://media.licdn.com/dms/image/v2/D4D35AQGjTvC6THGQUw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737245030922?e=1745434800&v=beta&t=Yi5o6S9z2uVc95mxRjv62ImzO21uvQNNc7lTMT3-gyc'
              alt='Vishal Kondi'
              className='h-full w-full object-cover rounded-[20px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

