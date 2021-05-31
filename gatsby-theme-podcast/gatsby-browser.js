import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import { ThemeProvider, Themed } from 'theme-ui';

import { ContextProvider } from './src/Context';
import theme from './src/gatsby-plugin-theme-ui';
import Layout from './src/components/layout';
import './src/variables.css';

export const wrapPageElement = ({ element }) => (
  <Themed.root>
    <Layout>{element}</Layout>
  </Themed.root>
);

export const wrapRootElement = ({ element }, options) => (
  <StaticQuery
    query={graphql`
      {
        allEpisode {
          nodes {
            id
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <ContextProvider
          spotifyUrl={options.spotifyUrl}
          applePodcastsUrl={options.applePodcastsUrl}
          googlePodcastsUrl={options.googlePodcastsUrl}
          disqusShortName={options.disqusShortName}
          twitterID={options.twitterID}
          instagramID={options.instagramID}
          facebookID={options.facebookID}
          defaultEpId={data.allEpisode.nodes[0].id}
        >
          {element}
        </ContextProvider>
      </ThemeProvider>
    )}
  />
);
