import { navigate, useStaticQuery, graphql } from 'gatsby';
import React, { useEffect } from 'react';
import SEO from '../components/seo';

export default () => {
  const data = useStaticQuery(graphql`
    {
      episode {
        id
        slug
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  useEffect(() => {
    navigate(`/episodes/${data.episode.slug}`);
  });

  return (
    <>
      <SEO title="Home" />
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
        }}
      >
        <div sx={{ maxWidth: ['100%', 710] }}>
          <div>
            <article>
              <p>.</p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
