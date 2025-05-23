import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import './Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeCourses: 0,
    newAdmissions: 0,
    pendingApplications: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/dashboard/stats', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Enhanced chart configurations
  const studentData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Students',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 5,
        tension: 0.4,
      },
    ],
  };

  const courseData = {
    labels: ['Computer Science', 'Engineering', 'Business', 'Arts', 'Science'],
    datasets: [
      {
        data: [45, 30, 15, 5, 10],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const performanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Average Performance',
        data: [65, 59, 80, 81],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            family: "'Poppins', sans-serif"
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          family: "'Poppins', sans-serif"
        },
        bodyFont: {
          size: 13,
          family: "'Poppins', sans-serif"
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Dashboard Overview</h2>
        <div className="date-filter">
          <select className="form-select">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card h-100 border-0 shadow-sm hover-shadow">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="bg-primary bg-opacity-10 p-3 rounded">
                    <i className="fas fa-users fa-2x text-primary"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="text-muted mb-1">Total Students</h6>
                  <h3 className="mb-0">{stats.totalStudents}</h3>
                  <small className="text-success">
                    <i className="fas fa-arrow-up me-1"></i>
                    12% increase
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card h-100 border-0 shadow-sm hover-shadow">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="bg-success bg-opacity-10 p-3 rounded">
                    <i className="fas fa-book fa-2x text-success"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="text-muted mb-1">Active Courses</h6>
                  <h3 className="mb-0">{stats.activeCourses}</h3>
                  <small className="text-success">
                    <i className="fas fa-arrow-up me-1"></i>
                    8% increase
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card h-100 border-0 shadow-sm hover-shadow">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="bg-info bg-opacity-10 p-3 rounded">
                    <i className="fas fa-user-plus fa-2x text-info"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="text-muted mb-1">New Admissions</h6>
                  <h3 className="mb-0">{stats.newAdmissions}</h3>
                  <small className="text-success">
                    <i className="fas fa-arrow-up me-1"></i>
                    15% increase
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card h-100 border-0 shadow-sm hover-shadow">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="bg-warning bg-opacity-10 p-3 rounded">
                    <i className="fas fa-clock fa-2x text-warning"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="text-muted mb-1">Pending Applications</h6>
                  <h3 className="mb-0">{stats.pendingApplications}</h3>
                  <small className="text-danger">
                    <i className="fas fa-arrow-down me-1"></i>
                    3% decrease
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Student Enrollment Trends</h5>
              <div className="dropdown">
                <button className="btn btn-link text-muted" type="button" data-bs-toggle="dropdown">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">View Details</a></li>
                  <li><a className="dropdown-item" href="#">Export Data</a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div style={{ height: '350px' }}>
                <Bar data={studentData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Course Distribution</h5>
              <div className="dropdown">
                <button className="btn btn-link text-muted" type="button" data-bs-toggle="dropdown">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">View Details</a></li>
                  <li><a className="dropdown-item" href="#">Export Data</a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div style={{ height: '350px' }}>
                <Pie data={courseData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Performance Overview</h5>
              <div className="dropdown">
                <button className="btn btn-link text-muted" type="button" data-bs-toggle="dropdown">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">View Details</a></li>
                  <li><a className="dropdown-item" href="#">Export Data</a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div style={{ height: '350px' }}>
                <Line data={performanceData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent border-0">
              <h5 className="card-title mb-0">Recent Activity</h5>
            </div>
            <div className="card-body">
              <div className="activity-feed">
                <div className="activity-item d-flex align-items-center mb-3">
                  <div className="activity-icon bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                    <i className="fas fa-user-plus text-primary"></i>
                  </div>
                  <div className="activity-content">
                    <p className="mb-0">New student registered: John Doe</p>
                    <small className="text-muted">2 minutes ago</small>
                  </div>
                </div>
                <div className="activity-item d-flex align-items-center mb-3">
                  <div className="activity-icon bg-success bg-opacity-10 p-2 rounded-circle me-3">
                    <i className="fas fa-graduation-cap text-success"></i>
                  </div>
                  <div className="activity-content">
                    <p className="mb-0">Course completed: Computer Science 101</p>
                    <small className="text-muted">1 hour ago</small>
                  </div>
                </div>
                <div className="activity-item d-flex align-items-center">
                  <div className="activity-icon bg-info bg-opacity-10 p-2 rounded-circle me-3">
                    <i className="fas fa-book text-info"></i>
                  </div>
                  <div className="activity-content">
                    <p className="mb-0">New course added: Advanced Mathematics</p>
                    <small className="text-muted">3 hours ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 