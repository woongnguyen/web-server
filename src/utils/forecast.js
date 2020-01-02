const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url ="https://api.darksky.net/forecast/a2f723f3fc7cae831156acfd6f97472d/" + latitude +"," + longitude

  request({url, json: true},(error, { body }) => {

    if(error){
      callback('Unable to connect to weather services', undefined)
    } else if (body.error){
      callback('Unable to find location', undefined)
    }else{
      callback(undefined, body.daily.data[0].summary + ' It is currently ' +  Math.round((body.currently.temperature - 32) * 5 / 9 ) + ' dergree(°C) out. There is a ' + body.currently.precipProbability + '% change of rain.')
    }

  })
}

module.exports = forecast

// darksky is get weather via coords of geocode 