/** @jsx jsx */
import Img from 'gatsby-image';
import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { jsx, useThemeUI, Box, Flex } from 'theme-ui';
import Image from 'react-bootstrap/Image';
import { GatsbyImage } from 'gatsby-plugin-image';
import config from '../lib/config';
import { ContextConsumer } from '../Context';

const Header = (props) => {
  const { episode, image } = props;

  const themeContext = useThemeUI();
  const { theme } = themeContext;

  return (
    <ContextConsumer>
      {(context) => (
        <Box
          sx={{
            variant: 'header',
            backgroundImage: image
              ? 'none'
              : `linear-gradient(224deg, ${theme.colors.primaryLighten50} 0%, ${theme.colors.primaryDarken} 100%)`,
          }}
          css={{
            backgroundImage:
              'linear-gradient(180deg, rgb(var(--primaryLighten10-color)) 0%, rgb(var(--primaryDarken-color)) 100%)',
          }}
        >
          <Image
            src={image}
            fluid
            bsPrefix='header-image'
            sx={{ height: config.headerImageHeight }}
            css={{ objectFit: 'contain' }}
          />

          {/*
          {image && (
            <Img
              alt={episode.title}
              fluid={image.childImageSharp.fluid}
              sx={{ height: config.headerImageHeight }}
            />
          )}
          <img src={image} alt={episode.title} />
          */}
          <Box className="header_content">
            <Flex
              sx={{
                height: '100%',
                width: '100%',
                alignItems: 'flex-end',
                flexDirection: 'row',
                pb: 8,
              }}
            >
              <Flex sx={{ width: '100%' }}>
                <button
                  type="button"
                  onClick={() => {
                    context.setCurrEpId(episode.id);
                    context.setIsPlaying(!context.isPlaying);
                  }}
                >
                  {context.isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <div>
                  <h1>{episode.title}</h1>
                  {/*<h5>EP{episode.num}</h5>*/}
                </div>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
    </ContextConsumer>
  );
};

export default Header;
