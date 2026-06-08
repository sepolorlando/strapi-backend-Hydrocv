module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      landingPage: env.bool('GRAPHQL_INTROSPECTION', env('NODE_ENV') !== 'production'),
      apolloServer: {
        introspection: env.bool('GRAPHQL_INTROSPECTION', env('NODE_ENV') !== 'production'),
      },
    },
  },
});
