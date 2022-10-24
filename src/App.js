import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {

const [data,setData] = useState([]);
const [input,setInput] = useState("");




useEffect(() => {
try{
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`).then((res)=> setData(res.data.meals))

  } catch(err){
    console.log(err);
  }
},[input])
 


  return (
    <div className='App'>
      <h1>Cooking App React</h1>
      <input type='text' placeholder='Tapez le nom du plat' onChange={(e)=> setInput(e.target.value)}/>


      <div className="mealContainer">

        {
        data ? ( data.slice(0,24)
        .sort((a,b) => {
          if (a.strMeal < b.strMeal){
            return -1
          }
          if (a.strMeal > b.strMeal){
            return 1;
          }
          return 0;
        })
        .map((meal) => (
         <Card key={meal.idMeal} meal={meal}/>
         ))) : (<h4>Le plat est introuvable, veuillez resaisir !</h4>)
       
        }  
      </div>

    </div>
  );
}

export default App;
