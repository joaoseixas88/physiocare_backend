const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.APP_PORT;


app.listen(port, () => console.log("Running"));


