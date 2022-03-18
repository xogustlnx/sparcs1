const mongoose = require('mongoose');
const MONGO_URI = "mongodb://sparcs:tnfqkrtm@ssal.sparcs.org:55554?authSource=admin";
mongoose.set('useNewUrlParser', true);
mongoose.connect(MONGO_URI, err => {
    if (err){
	    console.error(`Unexpected error: ${err}`);
	    throw err;
    }
    else console.log(`Successfully connected to MongoDB.`);
});
