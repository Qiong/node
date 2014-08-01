#tcp client

util.inherits(LDJClient, events.EventEmitter);
// expose module methods
exports.LDJClient = LDJClient;
exports.connect = function(stream){
return new LDJClient(stream);
};
netClient = net.connect({ port: 5432 }),
ldjClient = ldj.connect(netClient);
ldjClient.on('message', function(message) {
if (message.type === 'watching') {
console.log("Now watching: " + message.file);
} else if (message.type === 'changed') {
console.log(
"File '" + message.file + "' changed at " + new Date(message.timestamp)
);
} else {
throw Error("Unrecognized message type: " + message.type);
}
});