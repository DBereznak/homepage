let moment = require('moment');
let bm = require('../bookmarks/bookmarks');
let bookmarks = bm.bookmarks();
let updateTime;
(updateTime = function () {
    let clock = document.getElementById('time');
    let currentHour = moment().hour();
    if(currentHour > 0 && currentHour <= 5) {
        document.body.className = 'night';
        document.getElementById('timedMessage').innerHTML = "It is late"
    } else if(currentHour >= 6 && currentHour <= 12){
        document.body.className = 'morning';
        document.getElementById('timedMessage').innerHTML = "Good morning"
    } else if(currentHour >= 12 && currentHour <= 18){
        document.body.className = 'afternoon';
        document.getElementById('timedMessage').innerHTML = "Good afternoon"
    } else if(currentHour >= 18 && currentHour <= 21){
        document.body.className = 'evening';
        document.getElementById('timedMessage').innerHTML = "Good evening"
    } else{
        document.body.className = 'night';
        document.getElementById('timedMessage').innerHTML = "Good evening"
    }
    clock.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
})();
setInterval(updateTime, 1000);

//BOOKMARKS
for(let i = 0; i < bookmarks.length; i++){
    console.log(bookmarks[i].name);
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;
    let image = bookmarks[i].snapshot;
    let bookmark = `<div class="bookmark">
                        <a href="${url}" target="_blank">${name}</a>
                    </div>`;
    document.getElementById('bookshelf').innerHTML += bookmark;
}

