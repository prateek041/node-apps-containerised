const express = require("express")

const app = express()

console.log("hello this is test")

app.listen(3000, () => {
    console.log('listening to port 3000');
})