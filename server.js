const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const badmovie = {
    'morbius':{
        'type': 'superhero',
        'yearMade': '2022',
        'length': 169,
        'thumbsDown': 'just a few'
    },
    'theroom':{
        'type': 'no one knows',
        'yearMade': '2009',
        'length': 215,
        'thumbsDown': 'absolutely none'
    },
    'ultraviolet':{
        'type': 'scifi',
        'yearMade': '2022',
        'length': 69,
        'thumbsDown': 'all of them'
    },
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const badMovieName = request.params.name.toLowerCase()
    if( badmovie[badMovieName] ){
       response.json(badmovie[badMovieName]) 
    }else{
        response.json(badmovie['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})
