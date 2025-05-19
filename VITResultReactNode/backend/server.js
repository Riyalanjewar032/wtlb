const express = require('express');
const cors = require('cors');
const app = express();
const resultRoutes = require('./routes/result');

app.use(cors());
app.use('/api/results', resultRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));