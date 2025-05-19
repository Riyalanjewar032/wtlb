import React, { useState } from 'react';
import api from '../api';

export default function Register() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/register', form);
    alert("Registered!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Full Name" onChange={(e) => setForm({...form, fullName: e.target.value})} />
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
}