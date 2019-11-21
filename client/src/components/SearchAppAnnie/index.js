import React, { Component } from "react"; 

import SearchBar from "../SearchBar"
import API from "../../utils/API"

class SearchAppAnnie extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            apps: [], 
            search: "", 
        }
    }

    appAnnieApi = query => {
        API.appAnnieApi(query)
        .then((res) => {
            let results = res.products
            console.log(results)
    })
}

    handleInputChange = event => {
        event.preventDefault(); 
        const value = event.target.value
        this.setState({ search: value})
    }


    handleFormSubmit = event => {
        event.preventDefault(); 
        this.appAnnieApi(this.state.apps); 
    //    console.log(this.state.apps)
    }

    render() {
        return (
            <div> 
                <SearchBar
                 handleFormSubmit={this.handleFormSubmit}
                 handleInputChange={this.handleInputChange}/>
            </div> 
        )
    }
}

export default SearchAppAnnie; 