require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT ? process.env.PORT : 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit: 10
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})