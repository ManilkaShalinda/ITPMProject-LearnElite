const express = require('express');
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/db');//connect the db
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const categoryRoutes = require('./routes/categoryRouter');
const { notFound, errorHandler } = require('./middlewares/errorMiddelware');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());


// create routes here
app.use('/api/users',userRouter);
app.use('/api/admin',adminRouter);
app.use('/api/category', categoryRoutes);

//error handling
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 8080

app.listen(PORT,console.log(`server started on PORT ${PORT} `));
