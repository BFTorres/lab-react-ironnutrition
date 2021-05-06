import React from 'react';
import { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';

class App extends Component {
  state = {
    foods: foods,
    totalFood: [],
    showForm: false,
    filteredFoods: foods,
  }

  this.setState({})
  handleSubmit = (e) => {
    e.preventDefault();
    // forms creation html, 
  
    //event.target.calories.values

  const { name, calories } = e.target;
  let newFood = {
    name: name.value,
    calories: calories.value,
    image: image.value
  }
  
  this.setState({
    foods: [newFood, ...this.state.foods],
    filteredFoods: [newFood, ...this.state.foods]
    showForm: false
  })
}

  /*this.setState({ showForm: false }, () => {
    this.handleAddFood(newFood);
    });
  };*/

  handleAddFood = (food) => {

    this.setState({
      filteredFoods: [food, ...this.state.filteredFoods],    
    });
  };

  handleSearch = (e) => {
    let searchText = e.target.value;
    const { foods } = this.state;
    let filteredFood = allFood.filter((singleFood) => {
      return singleFood.name.toLowerCase().startsWith(searchText.toLowerCase());
      //startsWith!!! or includes
    });
    this.setState({
      filteredFood: filterdFood,


      // never update foods, only the filtered
    });
  };



  handleAddTotal = (food, quantity)=>{
    let myFood = {...food, quantity}

    this.setState({
      totalFood: [myFood, ...this.state.totalFood]
    }) 
  }

  handleClick= () => {
    this.setState({ showForm: true });
  };

render() {
    const { showForm, filteredFoods } = this.state;
      //NOT FOODS! it loops through filtered foods, not the original foods


    return (
      <div>
        <Search />
        {
          showForm ? (
          <AddForm onSubmit={this.handleSubmit} />
          //onSubmit can be called whatever you want
        ) : (
          <button onClick={this.handleClick}>Show form</button>
        )}

        {filteredFoods.map((food, index) => {
          return <FoodBox key={index} food={food}/>;
        })}
      </div>
    );
  }
}


export default App;
