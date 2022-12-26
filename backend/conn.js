const mongoose = require("mongoose");
const connect = async () => {
    try{
        const port = `mongodb+srv://e-commerce_multilingual:andy@cluster0.xducazx.mongodb.net/test`
        await mongoose.connect(port);
        console.log("Database Connected");
    }catch(err){
        console.log(err);
    }
}
connect();
module.exports = connect;