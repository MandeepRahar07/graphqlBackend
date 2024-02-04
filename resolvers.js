import mongoose from 'mongoose'
const Quote = mongoose.model("Quote")

const resolvers = {
    Query: {
        
      // ..................Resolver for fetching all quotes............................

      quotes: async () => {
        try {
          const quotes = await Quote.find({});
          return quotes;
        } catch (error) {
          throw new Error("Error fetching quotes");
        }
      },
    },
    Mutation: {

      // ...................Resolver for creating a new quote........................................


      createQuote: async (_, { quoteNew }) => {
        const { title, name } = quoteNew;
        try {
          const newQuote = new Quote({
            title,
            name,
          });
          await newQuote.save();
          return newQuote; 
        } catch (error) {
          throw new Error("Error creating a new quote");
        }
      },

      //..........................Resolver for delete the quote.................................


      findAndDeleteQuote: async (_, { _id }) => {
        try {
          const deletedQuote = await Quote.findByIdAndDelete(_id);
          if (!deletedQuote) {
            throw new Error("Quote not found");
          }
          return deletedQuote;
        } catch (error) {
          throw new Error("Error finding and deleting quote");
        }
      },


            //..........................Resolver for EDIT the quote.................................

      editQuote: async (_, { _id, quoteUpdate }) => {
        try {
          const updatedQuote = await Quote.findByIdAndUpdate(_id, quoteUpdate, { new: true });
          if (!updatedQuote) {
            throw new Error("Quote not found");
          }
          return updatedQuote;
        } catch (error) {
          throw new Error("Error editing quote");
        }
      },

//...................................................................................

    },
  };
  
  

  






export default resolvers;