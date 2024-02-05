import { gql } from "apollo-server";

const typeDefs = gql`

#.............................QUERY.......................................
  type Query {
    quotes : [Quotes]                                              #ALL QUOTES
    quote(_id:ID!):Quotes                                         #FIND QUOTE BY ID
  }

  #.......................QUERY TYPE...........................................

  type Quotes{
    id: ID!    
    title : String!
    name : String!
  }

  #........................MUTATION...........................................

  type Mutation{
    createQuote(quoteNew:quoteInput!):Quotes                         #CREATE A QUOTE
    findAndDeleteQuote(_id: ID!): Quotes                             #DELETE A QUOTE
    editQuote(_id: ID!, quoteUpdate: quoteInput!): Quotes            #UPDATE A QUOTE
}


#.............................INPUT TYPES............................................

 input quoteInput{
    title : String!
    name : String!
 }
`;

export default typeDefs;
