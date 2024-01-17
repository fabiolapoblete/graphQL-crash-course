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
    type Mutation {
        deleteGame(id: ID!): [Game] #After a game with this id has been removed. Return the new list of games
        addGame(game: AddGameInput): Game #return the single game created
    }    
    input AddGameInput { #Säger att detta inte är en viss typ av data utan en samling
        title: String!
        platform: [String]!
    }
`;

//Query type måste finnas alltid.

//typer i graphql: int, float, string, boolean, ID
