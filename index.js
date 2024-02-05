
import {ApolloServer,gql} from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.MONGO_URL);
//..............MONGO CONNECTIONS.........................................

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", ()=>{
    console.log("coneected to mongoDB")
})
mongoose.connection.on("error", (err)=>{
    console.log("coneected to mongoDB", err)
})


//................IMPORT EXTERNAL FILE.................................

import './models/Quotes.js';
import resolvers from "./resolvers.js";
import typeDefs from "./schema.js";



//...........SERVER, PLUGINS............

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    cors: {
        origin: '*',
        credentials: true,
    },
})

//...........SERVER LISTEN..........................
const PORT = 8080;
server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

