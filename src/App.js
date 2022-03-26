import React, { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './foods.json';

function App() {

  const [allFoods, setAllFoods] = useState(foods)
  const [filteredFoods, setFilteredFoods] = useState(allFoods)

  const handleAddNewFood = (e, newFoodObject, handleResetForm ) => {
    e.preventDefault()
    console.log(newFoodObject, "newFoodObject");
    setAllFoods([...allFoods, newFoodObject])
    setFilteredFoods([...filteredFoods, newFoodObject])
    handleResetForm()
  }

  const handleFilterFood = (input) => {
    const filtered = allFoods.filter((element) => {
      return element.name.toLowerCase().includes(input.toLowerCase())
    })

    setFilteredFoods(filtered)
    
  }

  const handleDeleteFood = (foodName) => {
    const newFoodsArray = allFoods.filter((element) => {
      return element.name.toLowerCase() !== foodName.toLowerCase()
    })

    setAllFoods(newFoodsArray)
    setFilteredFoods(newFoodsArray)
  }

  return (
    <div className="App foodBox-container">

    <Search handleFilterFood={handleFilterFood} />
    
    <AddFoodForm handleAddNewFood={handleAddNewFood} />

    {/* Updated content inside map in iteration 3 */}
      {filteredFoods.map((element) => {
        return(
          <FoodBox handleDeleteFood={handleDeleteFood} key={element.name} food={element} />
        )
      } )}
    </div>
  );
}

export default App;
