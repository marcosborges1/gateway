# MicroGraphQL Gateway

The MicroGraphQL Gateway is a proof of concept for a MicroGraphQL approach that aims to enable the integrated communication of Systems of Systems using microservices and GraphQL.

## Note - Project Status

As it is a proof of concept, it is in a phase of improvement and evolution.

## Author

Marcos Borges

## Installation

Use the package manager [npm](https://www.npmjs.com) to install micrographlgateway.

```bash
npm install
```

## Usage

Before you start registering the microservices below, be sure to start them.

```javascript
//Ommited Details
const server = new ApolloServer({
	cors: true,
	gateway: new ApolloGateway({
		supergraphSdl: new IntrospectAndCompose({
			subgraphs: [
				{
					name: "api-similarity-analyzer-service",
					url: "http://localhost:4001/graphql",
				},
				{
					name: "graphql-code-generator-service",
					url: "http://localhost:4002/graphql",
				},
				//Other microservices here with subgraphs.
				//They must be based on Apollo Federation, and can be in java, python, among others.
			],
		}),
	}),
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
//Ommited Details
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
