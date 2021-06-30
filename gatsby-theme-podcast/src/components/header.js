/** @jsx jsx */
import Img from 'gatsby-image';
import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import { jsx, useThemeUI, Box, Flex } from 'theme-ui';
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
        className="header_image"
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
          {image && (
            <Img
              alt={episode.title}
              fluid={image.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              sx={{ height: config.headerImageHeight }}
            />
          )}
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
                  {context.isPlaying ? <PauseCircleFilledRoundedIcon /> : <PlayCircleFilledRoundedIcon />}
                </button>
                <div>
                  <h1 className="header">{episode.title}</h1>
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
