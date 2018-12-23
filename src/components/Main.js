import React from 'react'
import Author from './Author'

const Main =({authors})=>{

  
  return(
    <div >
      {authors.map(author=><Author key={author.name} author={author} />)}
    </div>
  )
}

export default Main
