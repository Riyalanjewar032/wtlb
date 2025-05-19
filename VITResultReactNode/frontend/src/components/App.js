import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [result, setResult] = useState(null);

  const fetchResult = async () => {
    try {
      const res = await axios.get(\`http://localhost:5000/api/results/\${rollNumber}\`);
      setResult(res.data);
    } catch (err) {
      alert('Student not found');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>VIT Semester Result</h2>
      <input
        type="text"
        placeholder="Enter Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <button onClick={fetchResult}>Get Result</button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h4>Name: {result.student.name}</h4>
          <h4>Roll Number: {result.student.rollNumber}</h4>
          <h5>Result:</h5>
          <ul>
            {Object.entries(result.result).map(([sub, mark]) => (
              <li key={sub}>{sub}: {mark.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;