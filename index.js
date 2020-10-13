var calculate = function () {
    var sensorWidth = document.getElementById("sensorWidth").valueAsNumber;
    var focalLength = document.getElementById("focalLength").valueAsNumber;
    var flightHeight = document.getElementById("flightHeight").valueAsNumber;
    var imageWidth = document.getElementById("imageWidth").valueAsNumber;
    var imageHeight = document.getElementById("imageHeight").valueAsNumber;
    var gsd = document.getElementById("gsd").valueAsNumber;
    var gsdCalculated = (sensorWidth * flightHeight * 100) / (focalLength * imageWidth);
    document.getElementById("gsd").value = (gsdCalculated).toFixed(2); //tofixed rounds it to specified no & returns STRING 
    var dwCalculated = imageWidth * gsd / 100;
    document.getElementById("dw").value = (dwCalculated).toFixed(2);
    var dhCalculated = imageHeight * gsd / 100;
    document.getElementById("dh").value = (dhCalculated).toFixed(2);
};
