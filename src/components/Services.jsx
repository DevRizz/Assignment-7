import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <nav>
        <ul>
          <li><Link to="/services/design">Web Design</Link></li>
          <li><Link to="/services/development">Web Development</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Services;