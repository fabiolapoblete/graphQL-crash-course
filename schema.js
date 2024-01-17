//A query type is always required
//Different types in graphql: int, float, string, boolean, ID

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
        addGame(game: AddGameInput): Game #Return the single game created
        updateGame(id: ID!, edits: EditGameInput!): Game
    }    
    input AddGameInput { #This is a collection of data instead of a data type.
        title: String!
        platform: [String]!
    }
    input EditGameInput {
        title: String
        platform: [String]
    }
`;
