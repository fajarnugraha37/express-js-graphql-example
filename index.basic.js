const express = require('express')
const { 
    graphqlHTTP, 
    getGraphQLParams 
} = require('express-graphql')
const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')
const app = express()

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: { 
                type: GraphQLString,
                resolve: () => 'Hello World',
            },
            type: { 
                type: GraphQLString,
                resolve: () => 'String',
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

app.listen(5000, () => console.log('Server Running'))