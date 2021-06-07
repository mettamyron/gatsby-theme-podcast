import { navigate, useStaticQuery, graphql } from 'gatsby';
import React, { useEffect } from 'react';
import SEO from '../components/seo';
import Aside from '../components/aside';

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
      <SEO description={data.site.siteMetadata.description} />
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
        }}
      >
        <div sx={{ maxWidth: ['100%', 600] }}>
          <p>.</p>
        </div>
      </div>
      <Aside />
    </>
  );
};
