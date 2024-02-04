import { gql } from "apollo-server";

const typeDefs = gql`

#.............................QUERY.......................................
  type Query {
    quotes : [Quotes]
  }

  #....................... TYPE...........................................

  type Quotes{
    id: ID!    
    title : String!
    name : String!
  }

  #........................MUTATION...........................................

  type Mutation{
    createQuote(quoteNew:quoteInput!):Quotes
    findAndDeleteQuote(_id: ID!): Quotes
    editQuote(_id: ID!, quoteUpdate: quoteInput!): Quotes
}


#.............................INPUT TYPES............................................

 input quoteInput{
    title : String!
    name : String!
 }
`;

export default typeDefs;
