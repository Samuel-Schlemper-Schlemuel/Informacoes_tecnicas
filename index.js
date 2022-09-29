const express = require('express')
const app = express()
const PORT = process.env.PORT || 5050
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/HTML.html')
})

app.get('/api/whoami', (req, res)=>{
    const api = req.ip
    const language =  req.headers["accept-language"]
    const software = req.headers["user-agent"]

    res.json({ipaddress: api, language: language, software: software})
})

app.listen(PORT, () => {console.log(`Server is running in the port ${PORT}`)})