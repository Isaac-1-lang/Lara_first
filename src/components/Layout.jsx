import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Layout.css';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-dark text-white sidebar ${
          isSidebarOpen ? 'open' : 'closed'
        }`}
        style={{
          width: isSidebarOpen ? '250px' : '60px',
          minHeight: '100vh',
          transition: 'width 0.3s ease',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-4">
            {isSidebarOpen && <h4 className="mb-0">Student Portal</h4>}
            <button
              className="btn btn-link text-white"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <i className={`fas fa-${isSidebarOpen ? 'chevron-left' : 'chevron-right'}`}></i>
            </button>
          </div>

          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <i className="fas fa-home me-2"></i>
                {isSidebarOpen && 'Dashboard'}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link text-white">
                <i className="fas fa-users me-2"></i>
                {isSidebarOpen && 'Students'}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link text-white">
                <i className="fas fa-user me-2"></i>
                {isSidebarOpen && 'Profile'}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link text-white">
                <i className="fas fa-cog me-2"></i>
                {isSidebarOpen && 'Settings'}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="flex-grow-1"
        style={{
          marginLeft: isSidebarOpen ? '250px' : '60px',
          transition: 'margin-left 0.3s ease',
          minHeight: '100vh',
          backgroundColor: '#f8f9fa'
        }}
      >
        {/* Top Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <button
                className="btn btn-link"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
              <span className="ms-3 text-dark">StudyNow</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-circle me-2"></i>
                  <span>NIYOBYOSE Isaac</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      <i className="fas fa-user me-2"></i>Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="dropdown-item">
                      <i className="fas fa-cog me-2"></i>Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt me-2"></i>Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 