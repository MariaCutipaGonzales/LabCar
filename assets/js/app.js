function initMap() {
        var uluru = {lat:-12.1288637, lng: -77.0032674};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
         /* mapTypeId: 'satellite',*/
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        var partida = new google.maps.places.Autocomplete(document.getElementById("partida"));
        var llegada = new google.maps.places.Autocomplete(document.getElementById("llegada"));
        /*Preguntar por la ubicacion  Actual*/
        var infoWindow = new google.maps.InfoWindow({map: map});
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            var marker = new google.maps.Marker(pos);

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          alert("Ubicacion no soportada");
        }

        /*function rutaActual(partida,llegada){

        }*/

/*        document.getElementById("traza").addEventListener("click",rutaActual);
*/}