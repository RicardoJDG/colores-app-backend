const mongoose = require('mongoose');

const connectionString =
  process.env.DB_CONNECTION ||
  'mongodb+srv://Multiplica:multiplica123@coloresdb.5zfcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//Connecting to db
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log(db.connection.host))
  .catch((err) => console.error(err));
