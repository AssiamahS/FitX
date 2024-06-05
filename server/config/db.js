const mongoose = require('mongoose')


//remember to change this back to it truthy 
if (process.env.PORT) {
    const mongoUri = process.env.MONGODB_URI;
    const unsafeConnectionString ="mongodb+srv://dellman000:RphllD6ilH01hQuc@cluster0.meeg9ic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    mongoose.connect(unsafeConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log('MongoDB connection error:', err));
} else {
    mongoose.connect('mongodb://127.0.0.1:27017/FitX')
}

module.exports = mongoose.connection