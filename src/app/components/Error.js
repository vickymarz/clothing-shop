import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
const error = useRouteError()

  return (
    <div>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error occurred</p>
        <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default Error
