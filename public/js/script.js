console.log('javascript is completely loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) =>{
      console.log(data)
    })
})


const weatherFrom = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('p.mess-01')
const messageTwo = document.querySelector('p.mess-02')

// messageOne.textContent = 'Form Javascript'

weatherFrom.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = '...'

  fetch('http://localhost:3000/weather?address=' + location ).then((response) => {
    response.json().then((data) =>{
      if(data.error){
        console.log(data.error)
      }else{
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })

})