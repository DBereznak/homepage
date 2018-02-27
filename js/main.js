var moment = require('moment');

var updateTime;
(updateTime = function () {
    var clock = document.getElementById('time');
    var currentHour = moment().hour();
    if(currentHour > 0 && currentHour <= 5) {
        document.body.className = 'night';
    } else if(currentHour >= 6 && currentHour <= 12){
        document.body.className = 'morning';
    } else if(currentHour >= 12 && currentHour <= 18){
        document.body.className = 'afternoon';
    } else if(currentHour >= 18 && currentHour <= 21){
        document.body.className = 'evening';
    } else{
        document.body.className = 'night';
    }
    clock.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
})();
setInterval(updateTime, 1000);

