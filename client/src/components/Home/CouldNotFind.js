import React, { Component } from 'react';
import AllQuestions from "./AllQuestions";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class CouldNotFind extends Component {
    render() {
        return (
           
           <div>
                <h2>Sorry we could not find what you were looking for...</h2>
                
                <ul>
                    <li id="smallHeadingText"><NavLink to="AllQuestions" style={{ textDecoration: 'none', color: 'black' }}>Redirect to Main Answers page</NavLink></li>
                    <Route path="/AllQuestions" component={AllQuestions} />
                </ul>
                
            </div>
        );
    }
}

export default CouldNotFind;