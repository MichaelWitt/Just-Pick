$(document).ready(function () {

    //  call readLocalStorage() 

    // 

    var APIkey = '8257b1f1fe7522e48fc3a652d3096b9c';

    $('#search-button').click(function (e) {
        e.preventDefault()

        var cityEntered = $('#searchedCity').val();

        var queryURL = 'https://developers.zomato.com/api/v2.1/cities?q=' + cityEntered + '&appid=' + APIkey;

        $.ajax({
            url: queryURL,
            method: 'GET',
            headers: {
                "user-key": "8257b1f1fe7522e48fc3a652d3096b9c",
                "content-type": "application/json"
            }
        }).then(function (response) {
            console.log('response:', response[0].id)

            // $('#foodChoices').text(response.name)

        })
    });










    // // Today's Forecast
    // $('#search-button').click(function (e) {
    //     e.preventDefault()

    //     var cityName = $('#searchedCity').val();
    //     console.log(cityName)

    //     var queryURL =
    //         'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' +
    //         APIKey + '&units=imperial';

    // $.ajax({
    //     url: queryURL,
    //     method: 'GET',
    // }).then(function (response) {
    //     console.log('response:', response)

    //     $('#cityTemp').text(response.main.temp + '°')
    //     $('#cityName').text(response.name)
    //     $('#cityHumidity').text(response.main.humidity + '%')
    //     $('#cityWindspeed').text(response.wind.speed + ' mph')
    //     $('#weatherIcons').attr('src', 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png')
    //     var date = new Date().toLocaleDateString()
    //     console.log(date)
    //     $('#currentDate').text(date)

    //     var latitude = response.coord.lat
    //     var longitude = response.coord.lon


    //         // Gets UV Index
    //         var queryURLUv = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey;

    //         $.ajax({
    //             url: queryURLUv,
    //             method: 'GET',
    //         }).then(function (response) {
    //             console.log('response:', response)
    //             $('#cityUvindex').text(response.value)


    //             //5 Day Forecast
    //             var queryURL5Day = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

    //             $.ajax({
    //                 url: queryURL5Day,
    //                 method: 'GET',
    //             }).then(function (response) {
    //                 console.log('response:', response)

    //                 var today = new Date()
    //                 var day2 = new Date(today)
    //                 day2.setDate(day2.getDate() + 1)
    //                 var day3 = new Date(day2)
    //                 day3.setDate(day3.getDate() + 1)
    //                 var day4 = new Date(day3)
    //                 day4.setDate(day4.getDate() + 1)
    //                 var day5 = new Date(day4)
    //                 day5.setDate(day5.getDate() + 1)
    //                 var day6 = new Date(day5)
    //                 day6.setDate(day6.getDate() + 1)


    //                 $('#Day2Date').text(day2.toLocaleDateString())
    //                 $('#Day2Temp').text('Temp: ' + response.list[7].main.temp + '°')
    //                 $('#Day2Humidity').text('Humidity: ' + response.list[7].main.humidity + '%')
    //                 $('#Day2Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[7].weather[0].icon + '.png')

    //                 $('#Day3Date').text(day3.toLocaleDateString())
    //                 $('#Day3Temp').text('Temp: ' + response.list[15].main.temp + '°')
    //                 $('#Day3Humidity').text('Humidity: ' + response.list[15].main.humidity + '%')
    //                 $('#Day3Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[15].weather[0].icon + '.png')

    //                 $('#Day4Date').text(day4.toLocaleDateString())
    //                 $('#Day4Temp').text('Temp: ' + response.list[23].main.temp + '°')
    //                 $('#Day4Humidity').text('Humidity: ' + response.list[23].main.humidity + '%')
    //                 $('#Day4Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[23].weather[0].icon + '.png')

    //                 $('#Day5Date').text(day5.toLocaleDateString())
    //                 $('#Day5Temp').text('Temp: ' + response.list[31].main.temp + '°')
    //                 $('#Day5Humidity').text('Humidity: ' + response.list[31].main.humidity + '%')
    //                 $('#Day5Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[31].weather[0].icon + '.png')

    //                 $('#Day6Date').text(day6.toLocaleDateString())
    //                 $('#Day6Temp').text('Temp: ' + response.list[39].main.temp + '°')
    //                 $('#Day6Humidity').text('Humidity: ' + response.list[39].main.humidity + '%')
    //                 $('#Day6Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[39].weather[0].icon + '.png')


    //             })
    //         })
    //     })
    // })



});