const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    "oolong":{
        "type": "black",
        "origin": "Yo Momma's House",
        "water temp": 180,
    },
    "matcha":{
        "type": "green",
        "origin": "twinnings",
        "water temp": 180,
    },
    "unknown":{
        "type": "unknown",
        "origin": "unknown",
        "water temp": "unknown",
    }
}


app.get('/', (request,response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) =>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Listening on port ${PORT}! Betta go catch it!`)
})