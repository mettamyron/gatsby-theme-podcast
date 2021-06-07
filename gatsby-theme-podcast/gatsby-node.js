const axios = require('axios');
const xml2js = require('xml2js');

module.exports = {
  sourceNodes: async (
    { actions, createNodeId, createContentDigest },
    options,
  ) => {
    const { createNode } = actions;

    const rssRes = await axios.get(options.rssUrl);
    const xmlParser = new xml2js.Parser();
    const rssJson = await xmlParser.parseStringPromise(rssRes.data);
    const creator = rssJson.rss.channel[0].item.hasOwnProperty('dc:creator') ? 'dc:creator' : 'itunes:author'

    rssJson.rss.channel[0].item.forEach(item => {
      const nodeData = {
        creator: item[creator][0],
        pubDate: item.pubDate[0],
        num: item['itunes:episode'] ? parseInt(item['itunes:episode'][0]) : 0,
        title: item.title[0],
        slug: item.title[0].replace(/\s+/g, '-').toLowerCase(),
        descriptionHtml: item.description[0],
        enclosureUrl: item.enclosure[0].$.url,
        coverImgUrl: item['itunes:image'][0].$.href,
      };
      const nodeMeta = {
        id: createNodeId(`episode-${item.guid[0]._}`),
        parent: null,
        children: [],
        internal: {
          type: 'Episode',
          content: JSON.stringify(item),
          contentDigest: createContentDigest(item),
        },
      };
      createNode({
        ...nodeData,
        ...nodeMeta,
      });
    });
  },
  createPages: async ({ actions, graphql }, options) => {
    const { data } = await graphql(`
      {
        allEpisode {
          nodes {
            id
            num
            slug
          }
        }
      }
    `);
    data.allEpisode.nodes.forEach(node => {
      const episodeSlug = options.episodeSlug
        ? options.episodeSlug
        : 'episodes';
      actions.createPage({
        path: `${episodeSlug}/${node.slug}`,
        component: require.resolve(`./src/templates/episode.js`),
        context: {
          id: node.id,
          num: node.num,
        },
      });
    });
  },
};
