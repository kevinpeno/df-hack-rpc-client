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

const makeRequest = (client, message) => new Promise((resolve, reject) => {
	client.addListener("data", (response) => {
		client.removeListener("error", resolve)
		resolve(response)
	})
	client.addListener("error", (error) => {
		client.removeListener("data", resolve)
		reject(error)
	})
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
	const test = makeRequest(client, "DFHack?\n\x01\x00\x00\x00")
		.then(resolveHandshake)
		.then(console.log)
		.then(() => client)

	return test
}

const test = pipe(
	connect("127.0.0.1", 5000),
	sendHandshake
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
		makeRequest(client, message)
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

const DFHackRPCService = root.DFHackRPCService;
const service = DFHackRPCService.create(rpcImpl, false, false);

service.getEmbarkInfo({ saveFolder: 'region1-00005-10-01' }, function(error, response) {
	if( error ) {
		console.error(error)
	}
	console.log(response);
});
