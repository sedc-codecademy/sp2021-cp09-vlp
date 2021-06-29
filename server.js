const express = require("express")
const path = require("path")

const app = express();

express.static("./public")

app.use(express.static("public"))

app.use("*",(req,res) => {
    res.sendFile(path.join(__dirname,"public","index.html"))
})

const port = 3000;

app.listen(port, () => {
console.log(`Server is listening at port ${port}`)
})

