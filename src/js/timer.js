

const auctionTimer = document.getElementById("auctionTimer");

let totalSeconds = 20430;

const timer = setInterval( () => {

    totalSeconds--;

    let hours = Math.floor(totalSeconds / 3600);

    let minutes = Math.floor((totalSeconds % 3600) / 60);

    let seconds = Math.floor(totalSeconds % 60);


    if (hours < 10) {

        hours = "0" + hours;

    }

    if (minutes < 10) {

        minutes = "0" + minutes;

    }
    
    if (seconds < 10) {

        seconds = "0" + seconds;

    }

    auctionTimer.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`;
    
    if (totalSeconds <= 0) {
        
        clearInterval(timer);
        
        auctionTimer.innerHTML = "Auction is ended!!!"
    }
    

}, 1000);