import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Scene3D from './components/3D/Scene3D';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
          <Scene3D />
          <header className="fixed top-0 left-0 right-0 z-40 pt-4 sm:pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* This div is for spacing and can be used for a logo in the future */}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Navbar />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeToggle />
              </div>
            </div>
          </header>
          <main className="relative z-10 pt-32">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;