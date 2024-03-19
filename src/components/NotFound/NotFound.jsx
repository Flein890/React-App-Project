import React from 'react'
import {NotFoundStyled} from './NotFoundStyles'
import {NotFoundTitle,Oops,NotFoundText,Resource} from './NotFoundStyles'

function NotFound() {
  return (
    <NotFoundStyled> 
        <Oops>Oops...</Oops>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>Page not found</NotFoundText>
        <Resource>The resource requested could not be found on this server</Resource>
      </NotFoundStyled>
  )
}

export default NotFound