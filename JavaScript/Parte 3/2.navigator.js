console.log(navigator.userAgent);

navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitud: " + position.coords.latitude + ", Longitud: " + position.coords.longitude);
});


