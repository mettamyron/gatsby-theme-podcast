/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { jsx } from 'theme-ui';
import { FaExternalLinkAlt as ExternalLinkIcon } from 'react-icons/fa';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ContextConsumer } from '../Context';
import itunesIcon from '../images/apple.svg';
import spotifyImage from '../images/spotify.svg';
import googleImage from '../images/google.svg';
import Link from './link';
import CTA from './cta';


const PodcastProvider = styled(Link)(
  css({
    mt: 10,
    mb: 2,
    display: 'flex',
    alignItems: 'center',
    img: { m: 50, ml: 30, mb: 20, width: 100 },
  }),
);

function Aside() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <ContextConsumer>
      {(context) => (
        <aside className="sidebar">
          <div
            sx={{
              mb: 20,
              pr: [10, 0],
              a: { color: 'text', textDecoration: 'none' },
            }}
          >
            <h5>Elsewhere</h5>
            {context.spotifyUrl && (
              <PodcastProvider to={context.spotifyUrl}>
                <img src={spotifyImage} alt="Spotify logo" width="90" />
              </PodcastProvider>
            )}
            {context.applePodcastsUrl && (
              <PodcastProvider to={context.applePodcastsUrl}>
                <img src={itunesIcon} alt="Apple Podcasts" />
              </PodcastProvider>
            )}
            {context.googlePodcastsUrl && (
              <PodcastProvider to={context.googlePodcastsUrl}>
                <img src={googleImage} alt="Google Podcasts" />
              </PodcastProvider>
            )}
          </div>
          <div>
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5>About</h5>
              <h6 sx={{ mt: 3, mb: 1 }}>{data.site.siteMetadata.description}</h6>
            </div>
          </div>
          <CTA />
        </aside>
      )}
    </ContextConsumer>
  );
};

export default Aside;
