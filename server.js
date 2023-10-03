const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();
const path = require('path');
app.use(express.static('public'));
app.use(express.json());
//Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show.js')); //localhost:3000/files
app.use('/files/download', require('./routes/download')); //localhost:3000/files/download/uuid
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
