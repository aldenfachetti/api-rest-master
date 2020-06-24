const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });
mongoose.connect('mongodb://localhost/noderest', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Running...'))
.catch(err =>console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;