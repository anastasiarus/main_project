const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const authRouter = require('./routes/auth.routes');
const profileRouter = require('./routes/profile.routes');
const friendsRouter = require('./routes/friends.routes');
const postsRouter = require('./routes/posts.routes');
const uploadRouter = require('./routes/upload.routes');

const PORT = config.get("port") || 5000;

const app = express();
app.use(cors())
app.use(express.json({ extended: true }))
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/friends", friendsRouter);
app.use("/api/posts", postsRouter);
app.use("/api/upload", uploadRouter);

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));

    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log("Error", (e).message);
    process.exit(1);
  }
}

start();  
