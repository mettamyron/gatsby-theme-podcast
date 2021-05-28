import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allEpisode(sort: { order: ASC, fields: pubDate }) {
        nodes {
          id
          pubDate
        }
      }
    }
  `);

  useEffect(() => {
    navigate("/episodes/",
      data.allEpisode.nodes.id
    );
  });

  return null;
};
