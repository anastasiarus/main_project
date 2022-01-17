 const express = require ('express')
const config = require ('config')
const mongoose = require ('mongoose')
const cors = require('cors')


const PORT = config.get("port") || 5000;

const app = express();
app.use(express.json({extended:true}))
//app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api/auth", require ('./routes/auth.routes'));
/* app.use("/api/profile", require ('./routes/profile.routes'));
app.use("/api/friends", require ('./routes/friends.routes')); */

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
