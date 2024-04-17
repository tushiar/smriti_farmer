const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require('path')


//Connect Database
connectDB();

//Init middleware
app.use(express.json())



app.use('/api/register', require('./routes/api/register'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
