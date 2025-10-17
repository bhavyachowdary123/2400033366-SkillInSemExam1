import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './StudentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Student Form App</h1>} />
        <Route path="/studentform" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
