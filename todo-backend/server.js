const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const connectDB = async () => {
    try {
            mongoose.connect('mongodb+srv://DevOps:devops@todoapp-db.ugoli93.mongodb.net/?appName=TodoApp-DB');
    } catch (error) {
        console.error('MangoDB connection Failed:', error);
    }
};


app.get('/add-todo', (req, res) => {
  res.status(200).json({ message: 'Hello from Express server and MangoDB ❤️!' });
});

connectDB().then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// app.use()