
/*Specify Component as optional import */
import React, { Component } from 'react';


import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import CouldNotFind from "./CouldNotFind";
/* React Component defined by JS Class */
class SearchBar extends Component {

    /*Constructor for Head */
    constructor() {
        super(); //Call Constructor of Component (Parent Class)

        /* Define state of Head */
        this.state = { displayBio: false }; //Key determines 
        this.displayMore = this.displayMore.bind(this);
        this.displayLess = this.displayLess.bind(this);

        //Default state for search
        this.state = { search: '' }
    }



    /*Event Method for search bar */
    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 50) })
        //console.log(event.target.value);
    }

    /*Display More / Less Event Methods */
    displayMore() {
        /* To set state of component setState - specifically updating values
        in object (keys we want to update in state : value of new state) */
        this.setState({ displayBio: true });
    }

    displayLess() {
        /* To set state of component setState - specifically updating values
        in object (keys we want to update in state : value of new state) */
        this.setState({ displayBio: false });
    }
    handleSubmit(event) {
        console.log(event.target.value);
        this.setState({ search: "" })
    }
    /*Define Structure of Component in render() */
    render() {
        return (

            <div class="textFAQ">
                <h2> How can we help you today? </h2>
                <div>
                    <input
                        className="searchbar"type='text'
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}

                    />
                   
                    <NavLink to="CouldNotFind" >
                       <button onClick={this.handleSubmit.bind(this)} className="btn btn-primary 
">{'search'}</button>
</NavLink> 
                    <Route path="/CouldNotFind" component={CouldNotFind} />
                    
                </div>
                <div>

                </div>
            </div>
        )
    }
}


export default SearchBar;