/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { jsx } from 'theme-ui';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import ItunesImage from '../../static/images/svg/apple.svg';
import SpotifyImage from '../../static/images/svg/spotify.svg';
import GoogleImage from '../../static/images/svg/google.svg';
import LogoImage from '../../static/images/svg/logo.svg';
import { ContextConsumer } from '../Context';
import Link from './link';
import AsideCTA from './asideCTA';
import 'tachyons';

const PodcastProvider = styled(Link)(
  css({
    mt: 10,
    mb: 20,
    display: 'box',
    alignItems: 'center',
    svg: { height: 'auto', width: 100, marginBottom: 5 },
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
                <ItunesImage />
              </PodcastProvider>
            )}
            <br />
            {context.applePodcastsUrl && (
              <PodcastProvider to={context.applePodcastsUrl}>
                <SpotifyImage />
              </PodcastProvider>
            )}
            <br />
            {context.googlePodcastsUrl && (
              <PodcastProvider to={context.googlePodcastsUrl}>
                <GoogleImage />
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
                    {context.logoUrl && (
                      <a className="near-white" href={context.logoUrl}>
                        <LogoImage />
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
