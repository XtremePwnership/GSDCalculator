const calculate = () => {
    let sensorWidth = (<HTMLInputElement>document.getElementById("sensorWidth")).valueAsNumber;
    let focalLength = (<HTMLInputElement>document.getElementById("focalLength")).valueAsNumber;
    let flightHeight = (<HTMLInputElement>document.getElementById("flightHeight")).valueAsNumber;
    let imageWidth = (<HTMLInputElement>document.getElementById("imageWidth")).valueAsNumber;
    let imageHeight = (<HTMLInputElement>document.getElementById("imageHeight")).valueAsNumber;
    let gsd = (<HTMLInputElement>document.getElementById("gsd")).valueAsNumber;

    let gsdCalculated = (sensorWidth*flightHeight*100)/(focalLength*imageWidth);
    (<HTMLInputElement>document.getElementById("gsd")).value = (gsdCalculated).toFixed(2); //tofixed rounds it to specified no & returns STRING 
    let dwCalculated = imageWidth*gsd/100;
    (<HTMLInputElement>document.getElementById("dw")).value = (dwCalculated).toFixed(2);
    let dhCalculated = imageHeight*gsd/100;
    (<HTMLInputElement>document.getElementById("dh")).value = (dhCalculated).toFixed(2);
}