import React from 'react'
import NotFoundStyled from './NotFound'
import {NotFoundTitle,Oops,NotFoundText,Resource} from './NotFound'

function NotFound() {
  return (
    <NotFoundStyled>
      <Oops>Oops...</Oops>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Page not found</NotFoundText>
      {/* <video src="/src/assets/video/products.mp4" autoPlay loop muted playsInline preload='auto'> </video> */}
     <Resource>The resource requested could not be found on this server</Resource>
      </NotFoundStyled>
  )
}

export default NotFound