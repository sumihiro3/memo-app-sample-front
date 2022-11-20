const secrets = require('./secrets.json')

module.exports = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': secrets.HASURA_ADMIN_SECRET,
          // 'x-hasura-role': 'user',
        },
      },
    },
  ],
  documents: ['./src/graphql/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/graphql/schema.ts': {
      plugins: ['typescript'],
    },
    './src/graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'schema.ts',
        extension: '.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },
}
