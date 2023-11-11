const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = require('./app.js')



dotenv.config({path:'./Dependencies/EnvironmentVariable.env'})


const db = process.env.DBKey.replace('<PASSWORD>',process.env.DBPASSWORD)
mongoose.connect(db).then(console.log("Database connected successfully"));




const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


