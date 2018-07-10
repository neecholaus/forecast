var data = [];

let address_input = document.getElementById('address-input');
let address_find = document.getElementById('address-find');

address_find.addEventListener('click', function() {
  let address = address_input.value;
  let coords = getCoords(address);
});

let app = new Vue({
  el: '#response',
  data: function() {
    return {
      response: data
    }
  }
});

function getCoords(address) {
  let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address.replace(' ', '+') + '&key=' + GOOGLEAPI;

  var coords = {};

  axios.get(url)
  .then(function(response) {
    response = response.data.results[0].geometry.location;
    coords.lat = response.lat;
    coords.lng = response.lng;

    let forecast = getForecast(coords);
  })
  .catch(function(error) {
    console.log(error);
  });
}

function getForecast(coords) {
  axios.post('/weather', {
    lat: coords.lat,
    lng: coords.lng
  })
  .then(function(response) {
    data.splice(0, data.length);
    data.push(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}
