const express = require("express")
const app = express()
let PORT = 3000
let sendmail= require("../control/sendmail")

app.get("/", (req, res) => {
    res.send('i am server home')
})
app.get("/mail",sendmail)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('app is live')
        })
    }
    catch (error) {
        console.log(error)
    }
}
start();