import React, { useEffect, useState } from 'react'
const uniqueString = require('unique-string');

const Swagger = (props) => {
  const [ uid ] = useState(uniqueString())
  useEffect(() => {    
    window.SwaggerUI({
      ...props,
      dom_id: `#swagger${uid}`,
    })
  }, [props, uid])

  return <div id={'swagger' + uid} />
}

export default Swagger
