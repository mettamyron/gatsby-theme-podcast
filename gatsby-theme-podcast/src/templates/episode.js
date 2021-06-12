/** @jsx jsx */
import { graphql } from 'gatsby';
import React from 'react';
import { jsx } from 'theme-ui';
import { DiscussionEmbed } from 'disqus-react';

import { ContextConsumer } from '../Context';
import SEO from '../components/seo';
import Header from '../components/header';
import Aside from '../components/aside';

export const episodeQuery = graphql`
  query($id: String!) {
    episode(id: { eq: $id }) {
      id
      title
      descriptionHtml
      num
      enclosureUrl
      coverImgUrl
      localImage {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
          fixed {
            src
          }
        }
      }
    }
  }
`;

const EpisodeTemplate = ({ data }) => {
  const { episode } = data;

  return (
    <>
      <SEO
        title={episode.title}
        image={episode.localImage.childImageSharp.fixed.src}
        description={episode.descriptionHtml}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
        }}
      >
        <div sx={{ maxWidth: ['100%', 710] }}>
          <Header episode={episode} image={episode.localImage} />
          <article>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: episode.descriptionHtml,
              }}
            />
          </article>
          <ContextConsumer>
            {(context) => (
              <DiscussionEmbed
                shortname={context.disqusShortName}
                config={{
                  identifier: `episode-${episode.id}`,
                  title: episode.title,
                }}
              />
            )}
          </ContextConsumer>
        </div>
        <Aside />
      </div>
    </>
  );
};

export default EpisodeTemplate;
