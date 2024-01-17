export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review #This will return a single review based on ID which is a variable that is required
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
`;

//Query type måste finnas alltid.

//typer i graphql: int, float, string, boolean, ID
