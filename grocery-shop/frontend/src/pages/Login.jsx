import React, { useState } from 'react';
import api from '../api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/login', form);
    alert(res.data.fullName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({...form, password: e.target.value})} />
      <button type="submit">Login</button>
    </form>
  );
}