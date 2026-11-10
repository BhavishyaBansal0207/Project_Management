// import { app } from "./app.js";
import dotenv from "dotenv"

// we have to import the dotevn where ever we have our main file which is used to run the server
// const port = 8080
dotenv.config({
    path: "./.env"
})

const myname = process.env.NAME
const db = process.env.DB_NAME
console.log("Hi, I am Bhavishya Bansal, %%%%%%$$$$$$$$$$$$$$");
console.log(myname);
console.log(db);


// app.listen(port, () => {
//     console.log(`Server running on the port ${port}`);
// })

