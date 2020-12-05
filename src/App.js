import Axios from 'axios';
import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import axios from 'axios';



//************** */ Normal function
function App() {
 
  // (search)== value store , with the help of (setSearch) and useState se aaega
  const [search, setSearch] = useState("Chicken");
  const [recipes, setRecipes] = useState([]);


  const APP_ID = "35032fec";
  const APP_KEY = "3235783e3b1119a7fa4f9aa2a46ac164";


  useEffect(() => { 
    getRecipes();
  },[]);

  const getRecipes = async() =>{
    const result = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(result.data.hits);
  };
  const onInputChange = (e) =>{
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };


  return (
    <div className="App">
      <Header 
       search={search}
       onInputChange={onInputChange} 
       onSearchClick={onSearchClick} 
       />

      <div className="container">
          <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;



