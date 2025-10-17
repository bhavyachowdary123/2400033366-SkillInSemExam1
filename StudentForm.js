import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({ name: '', age: '', class: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${formData.name}\nAge: ${formData.age}\nClass: ${formData.class}`);
  };

  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label><br />
        <label>Age: <input type="number" name="age" value={formData.age} onChange={handleChange} /></label><br />
        <label>Class: <input type="text" name="class" value={formData.class} onChange={handleChange} /></label><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
