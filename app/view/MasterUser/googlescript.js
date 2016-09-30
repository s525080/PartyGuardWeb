function getMap(){
    var comp = encodeURIComponent(document.getElementById("autocomplete").value);
    if(comp !== ""){
      document.getElementById("myFrame").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCBqWF9WfR9pF23nK8Sd_MteauJraBCRpU&q="+comp;
    }else {
//    document.getElementById("myFrame").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCBqWF9WfR9pF23nK8Sd_MteauJraBCRpU&q=Space+Needle,Seattle+WA";
   }
 }


      // This example displays an address form, using the autocomplete feature
      // of the Google Places API to help users fill in the information.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;


function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});
      }



      // Bias the autocomplete object to the user's geographical location,
      // as supplied by the browser's 'navigator.geolocation' object.
      function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }
