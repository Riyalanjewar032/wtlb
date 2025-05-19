import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Catalogue() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/items').then(res => setItems(res.data));
  }, []);

  return (
    <div className="grid">
      {items.map(item => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.name} width="150" />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}