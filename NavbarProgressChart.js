import React from 'react';
import { Link } from 'react-router-dom';

function NavbarProgressChart() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link className="navbar-brand fw-bold fs-4 text-white" to="/progress-chart">
            Progress Charts
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/progress-chart">Charts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/workout">Workout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Inline CSS Styling */}
      <style>{`
        .nav-hover {
          position: relative;
          transition: color 0.3s ease-in-out;
          color: white !important;
        }

        .nav-hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease-in-out;
        }

        .nav-hover:hover {
          color: #f0f0f0 !important;
        }

        .nav-hover:hover::after {
          width: 100%;
        }

        .navbar {
          background-color: #117a65 !important;
          padding: 20px 15px;
        }
      `}</style>
    </>
  );
}

export default NavbarProgressChart;
