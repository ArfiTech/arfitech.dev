import { Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';

function App() {
  const location = useLocation();

  const navItemClass = (path) =>
    `px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 ${
      location.pathname === path ? 'bg-blue-500 text-white' : 'text-gray-700'
    }`;

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      <header className="shadow-sm bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
          <nav className="flex flex-wrap gap-3">
            <Link to="/" className={navItemClass('/')}>Home</Link>
            <Link to="/about" className={navItemClass('/about')}>About</Link>
            <Link to="/activities" className={navItemClass('/activities')}>Activities</Link>
            <Link to="/gallery" className={navItemClass('/gallery')}>Gallery</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      {/* <footer className="text-center text-sm text-gray-500 py-6 border-t">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer> */}
    </div>
  );
}

function Homepage() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome ArfiTech's space</h2>
      {/* <p className="text-lg text-gray-600 mb-8">This is my personal space on the web, built with React + TailwindCSS.</p>
      <img src="/vite.svg" alt="logo" className="mx-auto w-24 animate-pulse" /> */}
    </section>
  );
}

export default App;