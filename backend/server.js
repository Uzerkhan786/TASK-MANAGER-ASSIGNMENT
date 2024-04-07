require("dotenv").config()
const { app } = require("./app");
const figlet = require("figlet");
const { ConnectDB } = require("./config/db.config");
const { PORT } = require('./config/config-env')
ConnectDB()



app.listen(PORT, () => {
    figlet(`localhost:${PORT}`, (err, data) => {
        console.log(data);
    })
})
