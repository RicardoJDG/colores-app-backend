const mongoose = require('mongoose');

//Connecting to db
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log(db.connection.host))
  .catch((err) => console.error(err));
