
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
  res.render('index', {
    title: 'Weather app',
    name:'quannm'
  })
})

app.get('/about', (req, res) =>{
  res.render('about', {
    title: 'About',
    name:'quannm'
  })
})

app.get('/help', (req, res) =>{
  res.render('Help',{
    title:'Help',
    name: 'quannm',
    contact:'woongnguyen.15@gmail.com'
  })
})

app.get('/weather', (req, res) =>{
  res.send({
    forecast:'',
    location: 'Ho Chi Minh'
  })
})

app.get('/help/*', (req, res) =>{
  res.render('404',{
    title:'404',
    name:'quannm',
    errorMessage:'Help article not found'
  })
})

app.get('*', (req, res) =>{
  res.render('404',{
    title:'404',
    name:'quannm',
    errorMessage:'404 not found'
  })
})
app.listen(3000, () =>{
  console.log('Server is up on port 3000.')
})