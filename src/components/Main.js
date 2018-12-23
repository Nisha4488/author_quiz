import React from 'react'
import Author from './Author'

const Main =({authors})=>{
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const author = authors[getRandomInt(authors.length-1)];
  return(
    <div  >
      <Author key={author.name} author={author} />
    </div>
  )
}

export default Main
