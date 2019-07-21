const assert = require("assert")
const net = require("net")

const PORT = 5000
const clientKey = "DFHack?\n\x01\x00\x00\x00"
const serverKey = "DFHack!\n\x01\x00\x00\x00"

const client = new net.Socket()

client.connect(PORT, '127.0.0.1', () => {
  console.log('client connected')
  client.write(clientKey)
})

client.on('data', function(data) {
  console.log('Received: ' + data);
  assert(data.toString() === serverKey, 'server did not response successfully')
	client.destroy()
});

client.on('close', function() {
	console.log('Connection closed');
});