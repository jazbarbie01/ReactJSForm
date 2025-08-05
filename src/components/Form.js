import React, { useState } from 'react';

const Form = () => {
  const [gender, setGender] = useState('');

  return (
    <form>
      <div>
        <label>Full Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" />
      </div>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {gender === 'Other' && (
        <div>
          <label>Please specify:</label>
          <input type="text" />
        </div>
      )}
    </form>
  );
};

export default Form;
