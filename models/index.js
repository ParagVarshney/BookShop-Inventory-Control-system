const mongoose = require("mongoose");
const uri ="mongodb+srv://admin1:admin1@cluster0.ddbbd70.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull connect to mongo db")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };