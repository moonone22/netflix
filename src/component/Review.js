import React from 'react'

const Review = ({detailReviews}) => {
    console.log(detailReviews)
  return (
  detailReviews.results.length !== 0 ?  <div>
    {detailReviews.results.map((item,index)=> (
    <div key={index} className='reviewsBox'>
      <h1>{item.author}</h1>
      <p>{item.content}</p>
    </div>
    
    ))}
</div>
:<div className='reviewNot'><h1>Review not uploaded...</h1></div>
  )
}

export default Review