const mongoose = require('mongoose');
const {connect,set} = require('mongoose')
set("strictQuery", false)

mongoose.connection.on('error', (err)=> {
    console.log(err);
});

mongoose.connection.once('open', () => {
    console.log('Database Connection Established');
});

// connect(process.env.DB_URL,(error,success)=>{
//     if(error){
//         console.log("DB connection failed")
//     }
//     if (success){
//         console.log("DB connection successful")
//     }
// })

mongoose.connect("mongodb://localhost/sustdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
   .then(() => console.log('connection successful'))
   .catch((err) => console.log(err));


