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
import AsideCTA from './asideCTA';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import 'tachyons';


const PodcastProvider = styled(Link)(
  css({
    mt: 10,
    mb: 2,
    display: 'box',
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
          <AsideCTA />
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
            <br />
            {context.applePodcastsUrl && (
              <PodcastProvider to={context.applePodcastsUrl}>
                <img src={itunesIcon} alt="Apple Podcasts" />
              </PodcastProvider>
            )}
            <br />
            {context.googlePodcastsUrl && (
              <PodcastProvider to={context.googlePodcastsUrl}>
                <img src={googleImage} alt="Google Podcasts" />
              </PodcastProvider>
            )}
            <div className="flex flex-wrap justify-around w-100 mw3 mb5">
              <div className="w-100 mw5 mb4">
                <div className="flex flex-wrap justify-around w-100 mw3 center mb5">
                  <div className="w-100 flex justify-around items-center pv0">
                    {context.twitterID && (
                      <a className="near-white" href={context.twitterID}>
                        <FaTwitter />
                      </a>
                    )}
                    {context.instagramID && (
                      <a className="near-white" href={context.instagramID}>
                        <FaInstagram />
                      </a>
                    )}
                    {context.facebookID && (
                      <a className="near-white" href={context.facebookID}>
                        <FaFacebookF />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}
    </ContextConsumer>
  );
};

export default Aside;
