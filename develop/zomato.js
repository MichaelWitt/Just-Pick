$(document).ready(function () {



    // restaurant search zomato api

    var APIkey = '8257b1f1fe7522e48fc3a652d3096b9c';

    // onclick that takes city and state and runs them through api
    $('#search-button').click(async function (e) {
        e.preventDefault()
        let currentCityId
        var cityEntered = $('#searchedCity').val();
        var stateSelected = $('#searchedState').val().toUpperCase();


        var queryURL = 'https://developers.zomato.com/api/v2.1/cities?q=' + cityEntered + '&appid=' + APIkey;
        // async & await used to find and pull info from api in appropriate order
        await $.ajax({
            url: queryURL,
            method: 'GET',
            headers: {
                "user-key": "8257b1f1fe7522e48fc3a652d3096b9c",
                "content-type": "application/json",

            }
        }).then(function (response) {
            var citySuggs = response.location_suggestions


            // finds object where state code equals selected state
            var selectedCity = citySuggs.find(x => x.state_code === stateSelected)

            // users are alerted if city/state is not in the api
            if (selectedCity === undefined) {
                alert('Please try a different city or two-letter state! The one you entered is not yet in our database.')
            }
            // city id has been located and stored in a variable
            currentCityId = selectedCity.id


        })


        var searchUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${currentCityId}&entity_type=city&count=100`

        // ajax call that uses the city id to pull appropriate data for html
        await $.ajax({
            url: searchUrl,
            method: 'GET',
            headers: {
                "user-key": "8257b1f1fe7522e48fc3a652d3096b9c",
                "content-type": "application/json",

            }
        }).then(function (response) {

            // random restaurant is selected using a for lopp and math equation
            for (var i = 0; i < Math.floor(Math.random() * 20); i++) {


                $('#restaurantId').text('Restaurant: ' + response.restaurants[i].restaurant.name)
                $('#addressId').text('Address: ' + response.restaurants[i].restaurant.location.address)
                $('#phoneId').text('Phone #: ' + response.restaurants[i].restaurant.phone_numbers)
                $('#hoursId').text('Hours: ' + response.restaurants[i].restaurant.timings)
                $('#foodtypeId').text('Food Type: ' + response.restaurants[i].restaurant.cuisines)
                $('#urlId').text('Website')
                $('#urlId').attr('href', response.restaurants[i].restaurant.url)
                $('#ratingId').text('Rating: ' + response.restaurants[i].restaurant.user_rating.aggregate_rating + '/5')
                $('#costId').text('Avg. Cost For Two: $' + response.restaurants[i].restaurant.average_cost_for_two)
            }
        })


        // random food picture is generated
        var recipeQueryURL = 'https://foodish-api.herokuapp.com/api'

        await $.ajax({
            url: recipeQueryURL,
            method: 'GET',


        }).then(function (response) {
            console.log('response:', response)

            $('#photosId').attr('src', response.image)
            console.log('response:', response)

        })


    });
});