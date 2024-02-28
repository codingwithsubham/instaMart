const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
connectDB();
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use('/api/v1/auth', require('./route/auth'));
app.use('/api/v1/uploads', require('./route/uploads'));
app.use('/api/v1/category', require('./route/category'));


app.use(express.static('app/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'app', 'build', 'index.html'));
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
