import React from 'react';
import './PersonalInformation.css';

function PersonalInformation() {
  return (
    <div className="personal-information">
      <h3>Personal Information</h3>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email Address</label>
        <input type="email" placeholder="Example: xyz@mail_provider.com" />

        <label>Phone Number (Preferably WhatsApp)</label>
        <input type="tel" placeholder="Enter your phone number" />

        <label>LinkedIn Profile Link</label>
        <input type="url" placeholder="Enter your LinkedIn profile link" />

        <label>Current Location</label>
        <input type="text" placeholder="Enter your current location" />

        <label>Preferred Work Location</label>
        <input type="text" placeholder="Enter your preferred work location" />

        <label>What's your status as a freelancer or studio?</label>
        <select>
          <option>Part-time freelancer</option>
          <option>Full-time freelancer</option>
          <option>Small studio</option>
          <option>Other (Mention)</option>
        </select>

        <label>Availability</label>
        <select>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
        </select>
      </form>
    </div>
  );
}

export default PersonalInformation;