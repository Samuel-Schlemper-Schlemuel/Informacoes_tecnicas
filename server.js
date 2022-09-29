const express = require('express')
const os = require('os')
const product = require('./api/product')
const app = express()
const PORT = process.env.PORT || 5050
app.use(express.static(__dirname))

app.use('/api/product', product)

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/HTML.html')
})

app.get('/api/whoami', (req, res)=>{
    const networkInfo = os.networkInterfaces()
    const api = networkInfo['Wi-Fi'][1].address
    const language =  req.headers["accept-language"]
    const software = req.headers["user-agent"]

    res.json({ipaddress: api, language: language, software: software})
})

app.listen(PORT, () => {console.log(`Server is running in the port ${PORT}`)})