import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to My Web App</h1>
    <p>This is a basic web application ready for deployment.</p>
    <div class="card">
      <button id="counter" type="button">Count: 0</button>
    </div>
  </div>
`

let counter = 0
const button = document.querySelector('#counter')

button.addEventListener('click', () => {
  counter++
  button.textContent = `Count: ${counter}`
})