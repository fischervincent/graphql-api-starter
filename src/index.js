import { ApolloServer } from "apollo-server";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import dataSources from "./data-sources";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ...dataSources
  }),
  tracing: process.env.NODE_ENV !== "production"
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.info(`🚀 Server ready at ${url}`);
  })
  .catch(err => console.error("connection Error", err));
