const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/libraryRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://nikhilraghuwanshi04:fq6VMiCFQ4we4RFF@cluster0.igire1w.mongodb.net/studentlibrary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
});
app.use('/api/books', bookRoutes);
