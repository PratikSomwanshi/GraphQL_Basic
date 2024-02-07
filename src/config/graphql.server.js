const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");

const typeDefs = `#graphql
    
    type Query{
        send: String
    }
`;

const resolvers = {
    Query: {
        send: () => {
            return "Hello";
        },
    },
};

async function init(app) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();

    app.use("/graphql", express.json(), expressMiddleware(server));
}

module.exports = init;
