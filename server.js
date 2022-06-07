const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const badmovie = {
    'morbius':{
        'type': 'superhero',
        'yearMade': '2022',
        'lengthp': 169,
        'thumbsDown': 'just a few'
    },
    'theroom':{
        'type': 'no one knows',
        'yearMade': '2009',
        'length': 169,
        'thumbsDown': 'absolutely none'
    },
    'ultraviolet':{
        'type': 'scifi',
        'yearMade': '2022',
        'lengthp': 169,
        'thumbsDown': 'all of them'
    },
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const badmovieName = request.params.name.toLowerCase()
    if( badmovie[badmovieName] ){
       response.json(badmovie[badmovieName]) 
    }else{
        response.json(badmovie['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})