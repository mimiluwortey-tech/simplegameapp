
let randomNumber=Math.floor(Math.random()*20)+1
const result=document.getElementById('result')
const input=document.getElementById('numberInput')
const attemptsDisplay=document.getElementById('attempts')
let attempts=0
console. log (randomNumber)
function compareNumber () {
attempts = attempts + 1
attemptsDisplay.textContent = attempts
if (randomNumber == input.value) {
result.innerHTML="Yay, you got it! 🎉"
}
if (randomNumber > input.value) {
result.innerHTML="Go Higher ⬆️"
}
if (randomNumber < input.value) {
result.innerHTML="Go Lower ⬇️"
}
}
console. log ("function working")

const newGameButton=document.getElementById('new-game-button')

newGameButton.addEventListener('click', function () {
randomNumber=Math.floor(Math.random()*20)+1
attempts=0
attemptsDisplay.textContent=attempts
result.innerHTML="Make your guess!"
input.value=""
console.log(randomNumber)
})