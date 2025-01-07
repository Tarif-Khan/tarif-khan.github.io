import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, Briefcase, Mail, Code } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const navItems = [
    { to: '/', text: 'Home', Icon: Home },
    { to: '/experiences', text: 'Experiences', Icon: Briefcase },
    { to: '/resume', text: 'Resume', Icon: FileText },
    { to: '/projects', text: 'Projects', Icon: Code },
    { to: '/contact', text: 'Contact Me', Icon: Mail },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-items">
          {navItems.map(({ to, text, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon className="nav-icon" />
              {text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;