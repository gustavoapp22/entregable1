import React from 'react'

const CardUsers = ({randomUser, randomColors, getRandomAll}) => {
console.log(randomColors)
   
const objectStyle = {
    color: randomColors
}

const objectBgStyle ={
    backgroundColor: randomColors
}

  return (
    <article className='card' style={objectStyle}>
        
        {/* <img src={randonUser.picture.large}></img> */}
        <div className='card__container'>
        <h2 className='card__name'>{`${randomUser.quote}`}</h2><br></br>
        <h2 className='card__name'>{`${randomUser.author }`}</h2>
        <button onClick={getRandomAll} className='card__btn' style={objectBgStyle}>&#62;</button>
        </div>
    </article>
  )
}

export default CardUsers


