// https://gist.github.com/tedmiston/5935757

const notifier = require('node-notifier');
const net = require('net');
const client = new net.Socket();

client.connect(20004, 'kkeun.net', function(){
    console.log('Connected');
});

client.on('data', function(data){
    var msg = String(data).trim();
    console.log('Received: ' + msg);
    notifier.notify({
	title: 'kknotify-client',
	message: msg
    });
});

client.on('close', function() {
    console.log('Connection closed');
});
