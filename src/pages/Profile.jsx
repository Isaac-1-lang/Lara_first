import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    department: 'Computer Science',
    phone: '+1 234 567 8900',
    bio: 'Experienced administrator with a passion for education technology.',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the profile
    setIsEditing(false);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: '150px', height: '150px' }}
              />
              <h4>{profile.name}</h4>
              <p className="text-muted">{profile.role}</p>
              <button
                className="btn btn-primary"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Profile Information</h5>
            </div>
            <div className="card-body">
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input
                      type="text"
                      className="form-control"
                      name="department"
                      value={profile.department}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <textarea
                      className="form-control"
                      name="bio"
                      rows="4"
                      value={profile.bio}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              ) : (
                <div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <strong>Name:</strong>
                    </div>
                    <div className="col-md-8">{profile.name}</div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <strong>Email:</strong>
                    </div>
                    <div className="col-md-8">{profile.email}</div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <strong>Department:</strong>
                    </div>
                    <div className="col-md-8">{profile.department}</div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <strong>Phone:</strong>
                    </div>
                    <div className="col-md-8">{profile.phone}</div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <strong>Bio:</strong>
                    </div>
                    <div className="col-md-8">{profile.bio}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 