const roundUp = (num, precision) => {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

const calculate = () => {
    let sensorWidth = (<HTMLInputElement>document.getElementById("sensorWidth")).valueAsNumber;
    let focalLength = (<HTMLInputElement>document.getElementById("focalLength")).valueAsNumber;
    let flightHeight = (<HTMLInputElement>document.getElementById("flightHeight")).valueAsNumber;
    let imageWidth = (<HTMLInputElement>document.getElementById("imageWidth")).valueAsNumber;
    let imageHeight = (<HTMLInputElement>document.getElementById("imageHeight")).valueAsNumber;
    let gsd = (<HTMLInputElement>document.getElementById("gsd")).valueAsNumber;
    let siteWidth = (<HTMLInputElement>document.getElementById("siteWidth")).valueAsNumber;
    let siteHeight = (<HTMLInputElement>document.getElementById("siteHeight")).valueAsNumber;
    let speed = (<HTMLInputElement>document.getElementById("speed")).valueAsNumber;

    let gsdCalcd = (sensorWidth*flightHeight*100)/(focalLength*imageWidth);
    (<HTMLInputElement>document.getElementById("gsd")).value = (gsdCalcd).toFixed(2); //tofixed rounds it to specified no & returns STRING 
    
    let dwCalcd = imageWidth*gsd/100;
    (<HTMLInputElement>document.getElementById("dw")).value = (dwCalcd).toFixed(2);
    
    let dhCalcd = imageHeight*gsd/100;
    (<HTMLInputElement>document.getElementById("dh")).value = (dhCalcd).toFixed(2);
    
    let NoOfPhotosTBTakenAlongWidthCalcd = siteWidth/(dhCalcd*80/100);
    (<HTMLInputElement>document.getElementById("noOfPhotosAlongWidth")).valueAsNumber = roundUp((NoOfPhotosTBTakenAlongWidthCalcd),0);
    
    let NoOfPhotosTBTakenAlongHeightCalcd = siteHeight/(dwCalcd*80/100);
    (<HTMLInputElement>document.getElementById("noOfPhotosAlongHeight")).valueAsNumber = roundUp((NoOfPhotosTBTakenAlongHeightCalcd),0);
    
    let TotalPhotosTBTakenAlongWidthCalcd = (roundUp((NoOfPhotosTBTakenAlongWidthCalcd),0)*siteHeight)+siteWidth;
    (<HTMLInputElement>document.getElementById("totalPhotosAlongWidth")).valueAsNumber = (TotalPhotosTBTakenAlongWidthCalcd);
    
    let TotalPhotosTBTakenAlongHeightCalcd = (roundUp((NoOfPhotosTBTakenAlongHeightCalcd),0)*siteWidth)+siteHeight;
    (<HTMLInputElement>document.getElementById("totalPhotosAlongHeight")).valueAsNumber = (TotalPhotosTBTakenAlongHeightCalcd);
    
    let autoClickIntervalAlongWidthCalcd = siteWidth/(speed*1000/3600)/roundUp((NoOfPhotosTBTakenAlongWidthCalcd),0);
    (<HTMLInputElement>document.getElementById("autoClickIntervalAlongWidth")).value = (autoClickIntervalAlongWidthCalcd).toFixed(2);
    
    let autoClickIntervalAlongHeightCalcd = siteHeight/(speed*1000/3600)/roundUp((NoOfPhotosTBTakenAlongHeightCalcd),0);
    (<HTMLInputElement>document.getElementById("autoClickIntervalAlongHeight")).value = (autoClickIntervalAlongHeightCalcd).toFixed(2);
    
    let totalDistanceCalcd = (siteWidth*roundUp((NoOfPhotosTBTakenAlongHeightCalcd),0))+siteHeight;
    (<HTMLInputElement>document.getElementById("totalDistance")).value = (totalDistanceCalcd).toFixed(2);
    
    let totalTimeCalcd = (totalDistanceCalcd/(speed*1000/3600)/60)+flightHeight/(speed*1000/3600)/60;
    (<HTMLInputElement>document.getElementById("totalTime")).value = (totalTimeCalcd).toFixed(2);
    
    let rthDistanceCalcd = siteWidth+siteHeight+dhCalcd+((roundUp((NoOfPhotosTBTakenAlongHeightCalcd),0)-1)*(siteWidth-dhCalcd));
    (<HTMLInputElement>document.getElementById("rthDistance")).value = (rthDistanceCalcd).toFixed(2);
    
    let rthTimeCalcd = rthDistanceCalcd/(speed*1000/3600)/60;
    (<HTMLInputElement>document.getElementById("rthTime")).value = (rthTimeCalcd).toFixed(2);
}