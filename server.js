const express = require('express')
const os = require('os')
const app = express()
app.use(express.static('.'));

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