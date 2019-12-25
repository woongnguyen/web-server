
const path = require('path')
const express = require('express')

const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
  res.render('index', {
    title: 'Weather app',
    name:'Woong'
  })
})

app.get('/about', (req, res) =>{
  res.render('about', {
    title: 'About',
    name:'Woong'
  })
})

app.get('/help', (req, res) =>{
  res.render('Help',{
    title:'Help',
    contact:'woongnguyen.15@gmail.com'
  })
})

app.get('/weather', (req, res) =>{
  res.send({
    forecast:'',
    location: 'Ho Chi Minh'
  })
})

app.listen(3000, () =>{
  console.log('Server is up on port 3000.')
})