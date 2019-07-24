const { Socket } = require("net")
const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8');

const assert = require("assert")
const proto = require("./generated/service")

const pipe = (...fns) => x => fns.reduce(
	(v, f) => v.then(f),
	Promise.resolve(x)
)

/**
 * Creates a new ArrayBuffer from concatenating two existing ones
 *
 * @param {ArrayBuffer | null} buffer1 The first buffer.
 * @param {ArrayBuffer | null} buffer2 The second buffer.
 * @return {ArrayBuffer | null} The new ArrayBuffer created out of the two.
 */
const concatArrayBuffers = function(buffer1, buffer2) {

  if (!buffer1) {
    return buffer2;
  } else if (!buffer2) {
    return buffer1;
  }

  var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return new Uint8Array(tmp);
};

const connect = (host, port) => (client) => new Promise((resolve, reject) => {
	client.addListener("error", reject)
	client.connect(port, host, () => {
		client.removeListener('error', reject)
		resolve(client)
	})
})

const getHeader = (client, method, size) => {
		// currently only creates the header for GetVersion requests -- need some what to find out binding id
		// all header fields must be LittleEndian and padded by 2 bytes
		const header = Buffer.from(new Uint8ClampedArray(8))
		// method id (int16)
		header.writeInt16LE(0, 0)
		// Padding 2 bytes (don't really need this but set just for reference)
		header.writeInt16LE(0, 2)
		// "Size" (int32) of the call in bytes
		header.writeInt32LE(size, 4)
		return header
		// console.log(header.toString("utf-8"))
		// client.write(header)
}

const readHeader = (header) => ({
	id: header.readInt16LE(0),
	size: header.writeInt32LE(4)
})

const makeRequest = (client, method, message) => new Promise((resolve, reject) => {
	client.addListener("data", (response) => {
		client.removeListener("error", resolve)
		if( method === 'handshake') {
			resolve(response)
		} else {
			console.log(response.toString())

			const header = readHeader(response.slice(0, 8))
			const message = response.slice(8)	
	
			resolve(message)
		}
	})
	client.addListener("error", (error) => {
		client.removeListener("data", resolve)
		reject(error)
	})
	if( method !== "handshake" ) {
		const header = getHeader(client, "GetVersion", message.byteLength)
		const request = concatArrayBuffers(header, message)
		console.log(request.toString())
		console.log(decoder.end(request))
		client.write(request)
	}
	else {
		client.write(message)
	}
})

const resolveHandshake = (response) => {
	assert(
		response.toString() === "DFHack!\n\x01\x00\x00\x00",
		"Server failed to authenticate"
	)

	return "Handshake successful"
}

const sendHandshake = (client) => {
	const test = makeRequest(client, "handshake", "DFHack?\n\x01\x00\x00\x00")
		.then(resolveHandshake)
		.then(res => console.log(res.toString("utf-8")))
		.then(() => client)

	return test
}

const test = pipe(
	connect("127.0.0.1", 5000),
	sendHandshake,
)

const client = new Socket()
const connection = test(client)
// test(client)
	// .catch(console.log)
	// .finally(() => client.destroy())


/*
	for a given RPC request:
	- send bind request ::
		-- https://github.com/BenLubar/dfhackrpc/blob/3e8251960bc5c9ade00c0756da5fcc4056872b48/method.go#L55
		-- https://github.com/BenLubar/dfhackrpc/blob/e8757741553812a55fbc10f64d324ea386204acd/dfproto/core/CoreProtocol.proto#L66
	- use bind response to get request id: 
		-- https://github.com/BenLubar/dfhackrpc/blob/e8757741553812a55fbc10f64d324ea386204acd/dfproto/core/CoreProtocol.proto#L74
		-- https://github.com/BenLubar/dfhackrpc/blob/3e8251960bc5c9ade00c0756da5fcc4056872b48/method.go#L92
	- write a header :: 
		-- https://github.com/BenLubar/dfhackrpc/blob/aa308501f1a554116dbba46bbcd6bb12f869874c/protocol.go#L75
	- write a real request ::
		-- https://github.com/BenLubar/dfhackrpc/blob/aa308501f1a554116dbba46bbcd6bb12f869874c/protocol.go#L86
	- read the response ::
		-- https://github.com/BenLubar/dfhackrpc/blob/aa308501f1a554116dbba46bbcd6bb12f869874c/protocol.go#L104
	- read the message ::
		-- https://github.com/BenLubar/dfhackrpc/blob/aa308501f1a554116dbba46bbcd6bb12f869874c/protocol.go#L136
*/

const rpcImpl = (method, message, callback) => {
	console.log(method, message.toString("utf-8"))
	connection.then((client) => {
		console.log("sending request")
		makeRequest(client, method.name, message)
		.then((response) => {
			console.log(response)
			callback(null, response)
		})
		.catch((err) => {
			console.error(err)
			callback(err)
		})
	})
}

const DFHackRPCService = proto.DFHackRPCService;
const service = DFHackRPCService.create(rpcImpl, false, false);

service.bindMethod({
	method: service.bindMethod.name,
	inputMsg: service.bindMethod.requestFQDN,
	outputMsg: service.bindMethod.responseFQDN,
}, function(error, response) {
	if( error ) {
		console.error(error)
	}
	console.log(response);
	client.destroy();
});

// service.getVersion({}, function(error, response) {
// 	if( error ) {
// 		console.error(error)
// 	}
// 	console.log(response.value);
// });
