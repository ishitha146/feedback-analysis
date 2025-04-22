import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register({ users, setUsers, setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: '', password: '', email: '', phone: '', address: '', age: ''
  });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const userExists = users.some(u => u.username === formData.username);
    if (userExists) return alert("Username already exists");

    setUsers([...users, formData]);
    setCurrentUser(formData);
    navigate('/fibonacci');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {['username', 'password', 'email', 'phone', 'address', 'age'].map((field) => (
          <input
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
