
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
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
  if(!req.query.address){
    return res.send({
      error:'You must provide an address!'
    })
  }
  geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    if (error){
      return res.send({ error })
    }
    forecast(latitude, longitude,(error, farecastData) => {
      if (error){
        return res.send({error})
      }
      res.send({
        forecast:farecastData,
        location,
        address: req.query.address
      })
    })

  })
  // res.send({
  //   forecast:'It is snowing',
  //   location: 'Ho Chi Minh',
  //   address: req.query.address
  // })
})

app. get('/products', (req, res) => {
  if(!req.query.search){
    res.send({
      error:'You must provide a search term'
    })
  }
  console.log(req.query.search)
  res.send({
    products: []
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