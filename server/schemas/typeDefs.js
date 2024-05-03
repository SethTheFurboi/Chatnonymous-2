const typeDefs = gql`
  type User {
    _id: ID!
    email: email!
    userName: String!
    password: String!
    friendList: Array<String>
    onlineStatus: Boolean
  }

  type Query {
    tech: [User]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
