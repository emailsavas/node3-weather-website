const request = require('request')

const forecast = ( latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1813b6d8bc976408a5f46b4e8ba7e560/'+
                latitude + ',' + longitude + '?exclude=[hourly]&units=si&lang=el'

    request( { url, json: true }, (error, {body} ) => {
        if (error){
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Cannot find weather location.', undefined)
        } else {
            // callback(undefined, {
            //     summary: body.daily.data[0].summary,
            //     temperature: body.currently.temperature,
            //     rainProbab: body.currently.precipProbability
            callback(undefined, body.daily.data[0].summary +
                                ' Η θερμοκρασία στην πόλη είναι '+body.currently.temperature+'C βαθμούς.'+
                                ' με πιθανότητα βροχής '+body.currently.precipProbability*100+'%.' )
        }

    })
}

module.exports = forecast