function initMap() {
    var address = "Silver Oak Enclave, Malad West, Mumbai, Maharashtra, Indias"; // Replace with the address you want to display on the map

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: results[0].geometry.location
        });
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }