import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [gender, setGender] = useState('');

  return (
    <form className="form-grid">
      <label>Full Name:</label>
      <input type="text" />
      <label>Date of Birth:</label>
      <input type="date" />
      <label>Gender:</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {gender === 'Other' && (
        <>
          <label>Please specify:</label>
          <input type="text" />
        </>
      )}
    </form>
  );
};

export default Form;
