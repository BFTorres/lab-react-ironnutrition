import React, {Component} from 'react'


class Search extends Component {
    render(){

const { onSearch } = this.props

        return 
    
            <input onChange={onSearch} type="Text" className="textarea" placeholder="Search for a food"></input>
        
    }
}

export default Search 