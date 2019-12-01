var count = new Date("dec 13, 2019 12:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    //   day = new Date ().getDay(),
    //   hour = new Date ().getHours(),
    //   min= new Date ().getMinutes(),
    //   sec= new Date ().getSecond();
    var diff = count - now;
    var day = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(day);


    var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hour);


    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    console.log(min);

    var sec = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(sec);

    document.getElementById("demo").innerHTML = day + "d:"+ hour + "h:"+ min + "m:"+ sec + "s:";

}, 1000);

