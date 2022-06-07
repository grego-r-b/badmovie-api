document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const badMovieName = document.querySelector('input').value
    try{
        const response = await fetch(`https://https://badmovie-api.herokuapp.com/api/${badMovieName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.movieName
    }catch(error){
        console.log(error)
    }
}