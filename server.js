if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const app = express();

  const userRouter = require('./routes/userRoute');
  app.use(express.json());
  
  const mongoose = require('mongoose');
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', error => console.error(error));
  db.once('open', () => console.log('Connected to Mongoose'));
  
  app.use('/api/v1', userRouter);
  
  app.listen(process.env.PORT || 3001, () => console.log('Server started on port 3001'));