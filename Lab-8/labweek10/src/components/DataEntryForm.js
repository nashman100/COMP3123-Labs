import React, { useState } from 'react';
import './Form.css'; // Assume you create this file for styling

function DataEntryForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="data-entry-form">
        <h2>Data Entry Form</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="1234 Main St" required />
        </div>
        <div className="form-group">
          <label>Address 2</label>
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Apartment, studio, or floor" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Province</label>
            <select name="province" value={formData.province} onChange={handleChange} required>
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data</h3>
          <p><strong style={{ color: 'green' }}>Email:</strong> {submittedData.email}</p>
          <p><strong style={{ color: 'green' }}>Full Name:</strong> {submittedData.name}</p>
          <p><strong style={{ color: 'green' }}>Address:</strong> {submittedData.address}</p>
          {submittedData.address2 && (
            <p><strong style={{ color: 'green' }}>Address 2:</strong> {submittedData.address2}</p>
          )}
          <p><strong style={{ color: 'green' }}>City:</strong> {submittedData.city}</p>
          <p><strong style={{ color: 'green' }}>Province:</strong> {submittedData.province}</p>
          <p><strong style={{ color: 'green' }}>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default DataEntryForm;

