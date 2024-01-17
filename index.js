import { ApolloServer } from "@apollo/server"; //För att sätta upp servern
import { startStandaloneServer } from "@apollo/server/standalone"; //För att starta upp servern

//db
import db from "./db.js";
//types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    //Can take three arguments parent, arguments, context
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author.id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id);
      return db.games;
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push(game);
      return game;
    },
  },
};

//Server setup
//typeDefs - förklaring över våra datatyper och relationen de har med andra datatyper.
//resolvers - funktioner som säger hur vi svarar på queries för olika typ av data
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Startar servern
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
