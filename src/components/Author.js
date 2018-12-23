import React from 'react'

const Author =({author})=>{
  return (
    <div className ="row turn" style={{backgroundColor:"white"}}>
    <div className="col-4 offset-1">
    <img src = {author.imageUrl} className="authorimage" alt="Author"/>
    </div>
     <div className="col-5 offset-1" >
      <h4 >{author.books.map(b=><p className="answer">{b}</p>)}</h4>
     </div>
     </div>
  )
}

export default Author
