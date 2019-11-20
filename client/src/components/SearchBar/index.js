import React from "react"; 
import {Input, Button} from '@material-ui/core';
import "./style.css"

function SearchBar(props) {
    return (
        <div className="formStyle">
        <form>
            <label htmlFor="search">Search For an app: </label>
            <Input
                value={props.search}
                onChange={props.handleInputChange}
                type="text"
                placeholder=" Type in a book to begin"
                id="search"
            />
            <Button 
                type="submit" 
                onClick={props.handleFormSubmit} 
            >
                Search
            </Button>
        </form>
        </div>
    )
} 

export default SearchBar;