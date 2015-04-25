/// <reference path="js/jquery-1.11.1.min.js" />
$(document).ready(function () {
    var amsterdam = new google.maps.LatLng(50.0000, -98.0000);
    function initialize() {
        var mapProp = {
            center: amsterdam,
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var myCity = new google.maps.Circle({
            center: amsterdam,
            radius: 2000000,
            strokeColor: "red",
            strokeOpacity: 0.4,
            strokeWeight: 1,
            fillColor: "#0000FF",
            fillOpacity: 0.2
        });

        myCity.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    $("#form1").validate({});
    $(".contactNo").rules('add', { 
        required: false,
        number: true
    });
    $(".email").rules('add', { 
        required: true,
        email: true
    });

});