import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm sticky-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="FitQuest"
              height="50"
              className="logo-img me-2"
            />
            <span className="fw-bold fs-4 text-white">FitQuest</span>
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/workout">Workout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/progress">Progress</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/progress-chart">Progress Chart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/contact">Contact</Link>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Inline CSS Styling */}
      <style>{`
        .logo-img {
          transition: transform 0.3s ease-in-out;
          border-radius: 50%;
        }

        .logo-img:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }

        .nav-hover {
          position: relative;
          transition: color 0.3s ease-in-out;
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
          color: #fff;
        }

        .nav-hover:hover::after {
          width: 100%;
        }
        .navbar {
          background-color: #117a65 !important; 
        }
        .navbar .navbar-nav .nav-link {
           color: white !important;
        }
        .navbar .navbar-nav .nav-link:hover {
          color: #f0f0f0 !important; 
        }
        
.navbar {
  padding: 30px 20px;
}
.navbar .navbar-brand img {
  height: 70px;
}
.navbar-nav .nav-link {
  padding: 5px 10px; 
  font-size: 14px;
}
.navbar-collapse {
  padding-top: 5px;
  padding-bottom: 5px;
}

      `}</style>
    </>
  );
}

export default Navbar;
