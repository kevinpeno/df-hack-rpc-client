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
