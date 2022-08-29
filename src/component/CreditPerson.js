import React from 'react'


const CreditPerson = ({item}) => {
  console.log("item",item)
  return (
    <div className='personBox'>
         <img src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${item.profile_path}`} />
         <div className='personText'>
          <h1>{item.character}</h1>
          <h1>({item.name})</h1>
         </div>
    </div>
    
  )
}

export default CreditPerson