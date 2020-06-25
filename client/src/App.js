import React,{useEffect, useState} from 'react'
import Recipe from './Recipe'
import './App.css'


function App() {
    const APP_ID = "2c46c0dc";
    const APP_KEY = "fff578fa21c85ca8b85732ce6cc6867a";
  
    const [recipes, setRecipe] = useState([]);
    const [search, setSearch] = useState('');
    

    useEffect (() => {
        getRecipies();
    }, [])

    const getRecipies = async () => {
        const response = await fetch(
          `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json()
        console.log(data.hits)
        setRecipe(data.hits);
    }

    const handleChange = e => {
        setSearch(e.target.value)
        console.log(search)
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <form className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <button className="search-button" type="submit">
            search
          </button>
        </form>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    );  
}
export default App