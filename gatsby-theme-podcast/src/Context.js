import React, { useState } from 'react';

const Context = React.createContext();

export const ContextProvider = props => {
  const {
    children,
    spotifyUrl,
    applePodcastsUrl,
    googlePodcastsUrl,
    disqusShortName,
    twitterID,
    instagramID,
    facebookID,
    defaultEpId,
  } = props;

  const [currEpId, setCurrEpId] = useState(defaultEpId);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Context.Provider
      value={{
        spotifyUrl,
        applePodcastsUrl,
        googlePodcastsUrl,
        disqusShortName,
        twitterID,
        instagramID,
        facebookID,
        currEpId,
        setCurrEpId,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const ContextConsumer = Context.Consumer;
