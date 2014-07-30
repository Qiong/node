var Monitor = require('ping-monitor');


var sitex-monitor = new Monitor({
    website: 'http://google.com,
    timeout: 10
});

sitex-monitor.on('error', function (msg) {
    console.log(msg);
});


sitex-monitor.on('up', function (res) {
    console.log('Yay!! ' + res.website + ' is up.');
});


sitex-monitor.on('down', function (res) {
    console.log('Shit!! ' + res.website + ' is down! ' + res.statusMessage);
});


// this event is required to be handled in all Node-Monitor instances
sitex-monitor.on('error', function (res) {
    console.log('Oh Shit!! An unexpected error occured trying to load ' + res.website + '!');
    sitex-monitor.stop();
});


sitex-monitor.on('stop', function (website) {
    console.log(website + ' monitor has stopped.');
});