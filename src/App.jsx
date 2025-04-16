// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Components/Header'
// import Hero from './Components/Hero'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className='min-h-screen bg-gradient-to-tr from-[#60072C]
//     via-[#120B2E] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
//         <Header/>
//         <Hero/>
//     </div>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0d0d0d] via-[#1c1c1c] to-[#2e2e2e] text-white overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
        <Header />
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-32 pt-10 pb-16">
        <Hero />
        {/* Add more sections here (About, Projects, etc.) */}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Vishal Kondi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

