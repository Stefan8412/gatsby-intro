module.exports = {
  siteMetadata: {
    title: 'Vagus OZ',
    description: 'bezdomovectvo, pomoc ľudom bez domova',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },

    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'vagus_sk',
      },
    },
  ],
};
