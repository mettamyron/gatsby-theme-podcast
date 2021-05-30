import { navigate, useStaticQuery, graphql } from 'gatsby';
import React, { useEffect } from 'react';

export default () => {
  const data = useStaticQuery(graphql`
    {
      episode {
        id
      }
    }
  `);

  useEffect(() => {
    navigate(`/episodes/${data.episode.id}`);
  });

  return null;
};
