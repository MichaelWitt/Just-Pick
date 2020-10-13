$(document).ready(function () {

    //  call readLocalStorage() 


    // restaurants search zomato

    var APIkey = '8257b1f1fe7522e48fc3a652d3096b9c';
    //
    $('#search-button').click(async function (e) {
        e.preventDefault()
        let currentCityId
        var cityEntered = $('#searchedCity').val();
        var stateSelected = $('#searchedState').val().toUpperCase();
        //console.log('stateSelected:', stateSelected)

        var queryURL = 'https://developers.zomato.com/api/v2.1/cities?q=' + cityEntered + '&appid=' + APIkey;

        await $.ajax({
            url: queryURL,
            method: 'GET',
            headers: {
                "user-key": "8257b1f1fe7522e48fc3a652d3096b9c",
                "content-type": "application/json",

            }
        }).then(function (response) {
            var citySuggs = response.location_suggestions



            //find object where state code equals state selected
            var selectedCity = citySuggs.find(x => x.state_code === stateSelected)
            console.log('selectedCity:', selectedCity)

            if (selectedCity === undefined) {
                alert('Please try a different city or two-letter state! The one you entered is not yet in our database.')
            }

            currentCityId = selectedCity.id




            // $('#foodChoices').text(response.location_suggestions[0].id)
            // console.log('response:', response)

        })
        console.log(currentCityId)

        var searchUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${currentCityId}&entity_type=city&count=100`


        await $.ajax({
            url: searchUrl,
            method: 'GET',
            headers: {
                "user-key": "8257b1f1fe7522e48fc3a652d3096b9c",
                "content-type": "application/json",

            }
        }).then(function (response) {
            console.log(response)

            for (var i = 0; i < Math.floor(Math.random() * 20); i++) {


                $('#restaurantId').text('Restaurant: ' + response.restaurants[i].restaurant.name)
                $('#adressId').text('City: ' + response.restaurants[i].restaurant.location.address)
                $('#phoneId').text('Phone #: ' + response.restaurants[i].restaurant.phone_numbers)
                $('#hoursId').text('Hours: ' + response.restaurants[i].restaurant.timings)
                $('#urlId').text('URL: ' + response.restaurants[i].restaurant.url)
                $('#foodtypeId').text('Food Type: ' + response.restaurants[i].restaurant.cuisines)
                $('#ratingId').text('Rating: ' + response.restaurants[i].restaurant.user_rating.aggregate_rating)
                $('#photosId').text(response.restaurants[i].restaurant.photos_url)

            }

            // $('#weatherIcons').attr('src', 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png')








        })
    });




































    // Map API
    // var mapAPIkey = 'pk.eyJ1IjoibWljaGFlbHdpdHQiLCJhIjoiY2tnNTQwd3F2MDc3czJ1bno4bzBsYWVpcSJ9.zeGF_nDndo414jyRGIIwNA';

    // $('#search-button').click(function (e) {
    //     e.preventDefault()

    //     var cityEntered = $('#searchedCity').val();

    //     var queryURLmapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + cityEntered + '.json?access_token=pk.eyJ1IjoibWljaGFlbHdpdHQiLCJhIjoiY2tnNTQwd3F2MDc3czJ1bno4bzBsYWVpcSJ9.zeGF_nDndo414jyRGIIwNA';

    //     $.ajax({
    //         url: queryURLmapbox,
    //         method: 'GET',
    //     }).then(function (response) {
    //         console.log('response:', response)

    //         $('#latitude').text(response.features[0].geometry.coordinates[0])
    //         $('#longitude').text(response.features[0].geometry.coordinates[1])

    //         var latitudeZip = response.features[0].geometry.coordinates[0]
    //         console.log('latitudeZip:', latitudeZip)
    //         var longitudeZip = response.features[0].geometry.coordinates[1]
    //         console.log('longitudeZip:', longitudeZip)

    //     })
    // });


    //restaurants search opentable heroku

    // var APIkey = '8257b1f1fe7522e48fc3a652d3096b9c';

    // $('#search-button').click(function (e) {
    //     e.preventDefault()

    //     var cityEntered = $('#searchedCity').val();

    //     // var queryURL = 'https://developers.zomato.com/api/v2.1/search?q=' + cityEntered + '&appid=' + APIkey;

    //     API_BASE = `http://opentable.herokuapp.com/api/restaurants?zip=${cityEntered}`

    //     $.ajax({
    //         url: API_BASE,
    //         method: 'GET',
    //         crossDomain: true,
    //         dataType: "jsonp",
    //         headers: {
    //             //"user-key": "8257b1f1fe7522e48fc3a652d3096b9c",
    //             "Access-Control-Allow-Origin": "*",
    //             "content-type": "application/json"
    //         }
    //     }).then(function (response) {
    //         console.log(response)
    //         //const data = JSON.parse(response.restaurants)
    //         //console.log('response:', data)

    //         // $('#foodChoices').text(response.location_suggestions[0].id)
    //         // console.log('response:', response)

    //     })
    // });





    // // Yelp API

    // var APIkey = '8lUbj6g5_bgtBy2lB_jxzv9hEiVm--HdDxGUPcvlx3dAg9PA6-6ZTWIrYz9SZYS4bIM1v600TcBsuxLrTtTBqqmITMgKoSPJHSptUl2RGi2qIizluzUuX5abOIGDX3Yx';

    // $('#search-button').click(function (e) {
    //     e.preventDefault()

    //     var cityEntered = $('#searchedCity').val();

    //     var queryURL = 'https://api.yelp.com/v3/businesses/search?q=' + cityEntered + '&appid=' + APIkey;

    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET',
    //         // headers: {
    //         //     "user-key": "8lUbj6g5_bgtBy2lB_jxzv9hEiVm--HdDxGUPcvlx3dAg9PA6-6ZTWIrYz9SZYS4bIM1v600TcBsuxLrTtTBqqmITMgKoSPJHSptUl2RGi2qIizluzUuX5abOIGDX3Yx",
    //         //     "content-type": "application/json"
    //         // }
    //     }).then(function (response) {
    //         console.log('response:', response)

    //         // $('#foodChoices').text(response.location_suggestions[0].id)
    //         // console.log('response:', response)

    //     })
    // });





    // city id search

    // var APIkey = '8257b1f1fe7522e48fc3a652d3096b9c';

    // $('#search-button').click(function (e) {
    //     e.preventDefault()

    //     var cityEntered = $('#searchedCity').val();

    //     var queryURL = 'https://developers.zomato.com/api/v2.1/cities?q=' + cityEntered + '&appid=' + APIkey;

    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET',
    //         headers: {
    //             "user-key": "8257b1f1fe7522e48fc3a652d3096b9c",
    //             "content-type": "application/json"
    //         }
    //     }).then(function (response) {

    //         $('#foodChoices').text(response.location_suggestions[0].id)
    //         console.log('response:', response)

    //     })
    // });



    // var mapAPIkey = 'pk.eyJ1IjoibWljaGFlbHdpdHQiLCJhIjoiY2tnNTQwd3F2MDc3czJ1bno4bzBsYWVpcSJ9.zeGF_nDndo414jyRGIIwNA';

    // $('#search-button').click(function (e) {
    //     e.preventDefault()

    //     var cityEntered = $('#searchedCity').val();

    //     var queryURLmapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + cityEntered + '.json?access_token=pk.eyJ1IjoibWljaGFlbHdpdHQiLCJhIjoiY2tnNTQwd3F2MDc3czJ1bno4bzBsYWVpcSJ9.zeGF_nDndo414jyRGIIwNA';

    //     $.ajax({
    //         url: queryURLmapbox,
    //         method: 'GET',
    //     }).then(function (response) {
    //         console.log('response:', response)

    //         $('#latitude').text(response.features[0].geometry.coordinates[0])
    //         $('#longitude').text(response.features[0].geometry.coordinates[1])

    //     })
    // });





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