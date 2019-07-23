const { Socket } = require("net")
const assert = require("assert")
const root = require("./generated/service")

const pipe = (...fns) => x => fns.reduce(
	(v, f) => v.then(f),
	Promise.resolve(x)
)

const connect = (host, port) => (client) => new Promise((resolve, reject) => {
	client.addListener("error", reject)
	client.connect(port, host, () => {
		client.removeListener('error', reject)
		resolve(client)
	})
})

const writeHeader = (client, method, size) => {
		// currently only creates the header for GetVersion requests -- need some what to find out binding id
		// all header fields must be LittleEndian and padded by 2 bytes
		const header = Buffer.from(new Uint8ClampedArray(8))
		// method id (int16)
		header.writeInt16LE(5, 0)
		// Padding 2 bytes (don't really need this but set just for reference)
		header.writeInt16LE(0, 2)
		// "Size" (int32) of the call in bytes
		header.writeInt32LE(size, 4)
		console.log(header.toString())
		client.write(header)
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
		writeHeader(client, "GetVersion", message.byteLength)
	}

	client.write(message)
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
		.then(res => console.log(res.toString()))
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
	console.log(method, message.toString())
	connection.then((client) => {
		console.log("sending request")
		makeRequest(client, method.name, message)
		.then((response) => {
			console.log(response.toString())
			callback(null, response)
		})
		.catch((err) => {
			console.error(err)
			callback(err)
		})
	})
}

const DFHackRPCService = root.DFHackRPCService;
const service = DFHackRPCService.create(rpcImpl, false, false);

// service.bindMethod({
// 	method: service.bindMethod.name,
// 	inputMsg: root.CoreBindRequest.name,
// 	outputMsg: root.CoreBindReply.name,
// }, function(error, response) {
// 	if( error ) {
// 		console.error(error)
// 	}
// 	console.log(response);
// });

service.getVersion({}, function(error, response) {
	if( error ) {
		console.error(error)
	}
	console.log(response.value);
});
