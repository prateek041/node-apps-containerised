const express = require("express")

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("hello there nodemon check ?")
})

app.listen(port, () => {
    console.log('listening to port 3000');
})