import React from 'react'
import Aside from '../components/aside'
import SEO from '../components/seo'

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <div sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
      }}
      >
        <div sx={{ maxWidth: ['100%', 710] }}>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage