const { gql } = require("apollo-server");

const querySchema = gql`
	scalar JSON
	type GraphQLCode {
		schema: JSON
		queries: JSON
		resolvers: JSON
	}
	input Similarities {
		originAPI: JSON
		targetAPI: JSON
	}
	type Query {
		generateGraphQLCode(similarities: [Similarities]!): GraphQLCode
	}
`;

module.exports = querySchema;
