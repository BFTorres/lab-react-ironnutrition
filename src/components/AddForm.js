import React, { Component } from 'react';

class AddForm extends Component {
    render(){

        const {onSubmit} = this.props

        return (
            <div>
        <form onSubmit={onSubmit}>
          <input name="name" type="text" placeholder="Enter food name" />
          <input name="calories" type="text" placeholder="Enter food calories" />
          <input name="image" type="text" placeholder="Enter food image" />
          <button type="submit">Add Food</button>
        </form>
      </div>
        )
    }
}
export default AddForm;