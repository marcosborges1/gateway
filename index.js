const { ApolloServer } = require("apollo-server");
const { ApolloGateway, IntrospectAndCompose } = require("@apollo/gateway");
const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

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
			],
		}),
	}),
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(4000).then(({ url }) => {
	console.log(`Server ready at url: ${url}`);
});
