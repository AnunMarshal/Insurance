const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');
const path = require('path');
const app = express();

app.use(bodyparser.json());
app.use(cors());

mongoose.connect('mongodb+srv://Meena:t7MNAY5qmuxqrFtT@cluster0-byhow.mongodb.net/venkata?retryWrites=true&w=majority', { useNewUrlParser:true, useUnifiedTopology: true }).then(
  () => { console.log("DB connected successfully.") }
).catch(
  (err) => { console.log(err) }
);

app.use("/api/user", userRoutes);
app.use("/api/course", courseRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
})

module.exports = app;
