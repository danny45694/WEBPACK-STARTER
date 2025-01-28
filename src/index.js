import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughing = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

console.log(generateJoke());
console.log(1)