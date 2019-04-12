import React, { Component } from 'react';
import CreateTicket from "./CreateTicket";
import Refunds from "./Refunds";
import Answer from "./Answer";

class AllQuestions extends Component {
    render() {
        return (

            <div>
                <h2>Answer Page</h2>
                
                <hr />
                <Answer />
                <Refunds />
                <h1> Couldn't find what you were looking for?</h1>
                <h2>Why not send the admin a question?</h2>
                <hr />
                <CreateTicket />

            </div>
        );
    }
}

export default AllQuestions;