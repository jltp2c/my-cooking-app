import React from 'react';

const Card = ({meal}) => {
    console.log({meal})
  return (
    <div className='meal-card'>
        <h2>{meal.strMeal}</h2>
        <h3>{meal.strArea}</h3>
        <img src={meal.strMealThumb} alt="meals img" />
        <p>{meal.strInstructions}</p>
    </div>
  )
}

export default Card;