function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('httpsL//icanhazdadjoke.com', config).then((res) => {
document.getElementById('joke').innerHTML = res.data.joke
    })
}

export default generateJoke