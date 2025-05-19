import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Catalogue() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items').then(res => setItems(res.data));
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.image_url} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}