document.querySelector('button').addEventListener('click', getMovie)

function getMovie() {
    const input = document.querySelector('input').value.replaceAll(' ', '+')
    const url = `/api/${input}`
    
    console.log(`Input is ${input}.`)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.thumbsDown
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
