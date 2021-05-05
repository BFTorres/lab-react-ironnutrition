import React from 'react';
import { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';

class App extends Component {
  state = {
    food: foods,
    filteredFoods: foods,
    totalFood: [],
    showForm: false,
  }
  handleSubmit = (e) => {
    e.preventDefault();
  


  const { name, calories } = e.target;
  let newFood = {
    name: name.value,
    calories: calories.value,
  }
  


  this.setState({ showForm: false }, () => {
    this.handleAddFood(newFood);
    });
  };

  handleAddFood = (food) => {

    this.setState({
      filteredFoods: [food, ...this.state.filteredFoods],    
    });
  };

  handleSearch = (e) => {
    let input = e.target.value;
    const { allFood } = this.state;
    let filteredFood = allFood.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({
      filteredFood: filteredFood,
    });
  };
  handleAddTotal = (food, quantity)=>{
    let myFood = {...food, quantity}

    this.setState({
      totalFood: [myFood, ...this.state.totalFood]
    }) 
  }

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

render() {
    const { totalFood, filteredFoods } = this.state;
    return (
      <div>
        {this.state.showForm ? (
          <AddForm food={this.handleSubmit} />
        ) : (
          <button onClick={this.handleShowForm}>Show form</button>
        )}

        {filteredFoods.map((singleFood, index) => {
          return <FoodBox singleFood={singleFood} />;
        })}
      </div>
    );
  }
}


export default App;
