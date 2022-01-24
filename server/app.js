 const express = require ('express');
const config = require ('config');
const mongoose = require ('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth.routes');
const profileRouter = require('./routes/profile.routes');
const friendsRouter = require('./routes/friends.routes');
const postsRouter = require('./routes/posts.routes');


const PORT = config.get("port") || 5000;

const app = express();
app.use(express.json({extended:true}))
app.use(express.json())
//app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/friends", friendsRouter);
app.use("/api/posts", postsRouter);

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
