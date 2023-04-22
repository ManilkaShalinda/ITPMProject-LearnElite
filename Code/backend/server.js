const express = require("express");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const donationRoutes=require('./routes/donationRoutes');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get('/',(req,res) =>{
    res.send("API is running..");
});

app.use('/api/users', userRoutes);

app.use('/api/donation', donationRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000,console.log(`Server started on PORT ${PORT}`));