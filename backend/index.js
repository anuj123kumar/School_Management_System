const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const studentRoutes = require('./routes/student.js')




const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));



app.use(cors());


const PORT = process.env.PORT || 5000
const databaseURL = 'mongodb+srv://Anuj:project@123@cluster0.hdkrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



//connecting to DB
mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB CONNECTED')
    })
    .catch((err) => {
        console.log(err)

    })

app.use('/students', studentRoutes);    

//connection to server
app.listen(PORT, () => {
    console.log(`Connection establish ,app is listening on port ${PORT}`)
})
mongoose.set('useFindAndModify', false);