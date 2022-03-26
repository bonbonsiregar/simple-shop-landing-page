import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loader() {
  return (
    <div>
        <Spinner 
        animation='border' 
        role='status' 
        style={{width: '100px', margin: 'auto', height: '100px', display: 'block',}}>
        </Spinner>
        <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default Loader