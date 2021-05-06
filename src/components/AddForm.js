import React, { Component } from 'react';

class AddForm extends Component {
    render(){

        const {onSubmit} = this.props
        
        return (
            <div>
        <form onSubmit={onSubmit}>
        <textarea name="name" label="Name" className="textarea" placeholder="Enter a name"></textarea>
        <textarea  name="calories" label="Calories" className="textarea" placeholder="Enter the calories"></textarea>
          <button className="button is-primary" type="submit">Submit</button>


          <input name="name" type="text" placeholder="Enter food name" />
          <input name="calories" type="text" placeholder="Enter food name" />
          <input name="image" type="text" placeholder="Enter food name" />
          <button type="submit">Add Food</button>
        </form>
      </div>
        )
    }
}
export default AddForm;