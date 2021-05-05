import React, {Component} from 'react'
import 'bulma/css/bulma.css';

class Search extends Component {
    render(){
        return (
            <textarea onChange={this.props.onSearch} label="Search" className="textarea" placeholder="Search for a food"></textarea>
        )
    }
}

export default Search 