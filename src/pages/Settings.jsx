import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false,
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: true,
      showPhone: false,
    },
    theme: 'light',
    language: 'en',
  });

  const handleNotificationChange = (type) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }));
  };

  const handlePrivacyChange = (setting, value) => {
    setSettings((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: value,
      },
    }));
  };

  const handleThemeChange = (theme) => {
    setSettings((prev) => ({
      ...prev,
      theme,
    }));
  };

  const handleLanguageChange = (language) => {
    setSettings((prev) => ({
      ...prev,
      language,
    }));
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Settings</h5>
            </div>
            <div className="card-body">
              {/* Notifications Section */}
              <div className="mb-4">
                <h6 className="mb-3">Notifications</h6>
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="emailNotifications"
                    checked={settings.notifications.email}
                    onChange={() => handleNotificationChange('email')}
                  />
                  <label className="form-check-label" htmlFor="emailNotifications">
                    Email Notifications
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="pushNotifications"
                    checked={settings.notifications.push}
                    onChange={() => handleNotificationChange('push')}
                  />
                  <label className="form-check-label" htmlFor="pushNotifications">
                    Push Notifications
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="smsNotifications"
                    checked={settings.notifications.sms}
                    onChange={() => handleNotificationChange('sms')}
                  />
                  <label className="form-check-label" htmlFor="smsNotifications">
                    SMS Notifications
                  </label>
                </div>
              </div>

              {/* Privacy Section */}
              <div className="mb-4">
                <h6 className="mb-3">Privacy</h6>
                <div className="mb-3">
                  <label className="form-label">Profile Visibility</label>
                  <select
                    className="form-select"
                    value={settings.privacy.profileVisibility}
                    onChange={(e) =>
                      handlePrivacyChange('profileVisibility', e.target.value)
                    }
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="contacts">Contacts Only</option>
                  </select>
                </div>
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="showEmail"
                    checked={settings.privacy.showEmail}
                    onChange={() =>
                      handlePrivacyChange('showEmail', !settings.privacy.showEmail)
                    }
                  />
                  <label className="form-check-label" htmlFor="showEmail">
                    Show Email Address
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="showPhone"
                    checked={settings.privacy.showPhone}
                    onChange={() =>
                      handlePrivacyChange('showPhone', !settings.privacy.showPhone)
                    }
                  />
                  <label className="form-check-label" htmlFor="showPhone">
                    Show Phone Number
                  </label>
                </div>
              </div>

              {/* Theme Section */}
              <div className="mb-4">
                <h6 className="mb-3">Theme</h6>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="theme"
                    id="lightTheme"
                    checked={settings.theme === 'light'}
                    onChange={() => handleThemeChange('light')}
                  />
                  <label className="btn btn-outline-primary" htmlFor="lightTheme">
                    Light
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="theme"
                    id="darkTheme"
                    checked={settings.theme === 'dark'}
                    onChange={() => handleThemeChange('dark')}
                  />
                  <label className="btn btn-outline-primary" htmlFor="darkTheme">
                    Dark
                  </label>
                </div>
              </div>

              {/* Language Section */}
              <div className="mb-4">
                <h6 className="mb-3">Language</h6>
                <select
                  className="form-select"
                  value={settings.language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>

              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 