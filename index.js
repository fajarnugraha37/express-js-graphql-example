const express = require('express')
const { 
    graphqlHTTP, 
} = require('express-graphql')
const { 
    GraphQLSchema,
} = require('graphql')
const app = express()
const { 
    RootQueryType,
    RootMutationType,
} = require('./data.schema')
 
const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Pong',
        time: (new Date()).toUTCString(),
    })
})

app.listen(5000, () => console.log('Server Running'))