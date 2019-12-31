import React, {useEffect, useState } from 'react';
import Recipe from './Components/Recipe';
import SearchBar from './Components/SearchBar';
import './assets/stylesheet/app.scss';

const App = ()=> {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const APP_ID = "51c42fd9"
  const APP_KEY = "34f6d70df594833bbe0b8c95951089b4"
  const APP_URL = `https://api.edamam.com/search?q=`
  const VEGAN_FILTER = "&health=vegetarian"
  const APP_REQUEST = `${APP_URL}${query}&app_id=${APP_ID}&app_key=${APP_KEY}${VEGAN_FILTER}`

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(APP_REQUEST)
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    window.scrollTo(50,200);
  }

  return(
    <div className="App">
      <div className="row pb-5">
        <div className="col-12 search">
          <SearchBar
            getQuery = {getQuery}
            search = {search}
            updateSearch = {updateSearch}
            />
        </div>
      </div>
      <div className="container">
        <div className="row cards">
          {recipes.map(recipe => (
          <div className="col-12">
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
