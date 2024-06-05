const mongoose = require('mongoose')


//remember to change this back to it truthy 
if (process.env.PORT) {
    const mongoUri = process.env.MONGODB_URI;
    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log('MongoDB connection error:', err));
} else {
    mongoose.connect('mongodb://127.0.0.1:27017/FitX')
}

module.exports = mongoose.connection