import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

export default ({ files }) => (
  <ul css={{ padding: '0 20px' }}>
    {files
      .sort((a, b) => a.localeCompare(b))
      .map(url => (
        <li key={url}>
          <Styled.a as={Link} to={url}>
            {url}
          </Styled.a>
        </li>
      ))}
  </ul>
)