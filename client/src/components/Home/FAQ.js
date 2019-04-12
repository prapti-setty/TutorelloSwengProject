
/*Specify Component as optional import */
import React, { Component } from 'react';
import SearchBar from './SearchBar';


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Answer from "./Answer";


/* React Component defined by JS Class */
class FAQ extends Component{

    /*Constructor for Head */
    constructor(){
        super(); //Call Constructor of Component (Parent Class)
        
        /* Define state of Head */
        this.state={ displayBio : false}; //Key determines 
        this.displayMore = this.displayMore.bind(this);
        this.displayLess = this.displayLess.bind(this);

        //Default state for search
        this.state={ search: ''}
    }

    /*Event Methods for the link widgets */
    clickFacebook(){
        window.location.href="http://facebook.com";
    }
    clickTwitter(){
        window.location.href="http://twitter.com";
    }
    clickInstagram(){
        window.location.href="http://instagram.com";
    }
    handleSubmit(event) {
        console.log(event.target.value);
        this.setState({ search: "" })
    }


    /*Display More / Less Event Methods */
    displayMore(){
        /* To set state of component setState - specifically updating values
        in object (keys we want to update in state : value of new state) */
        this.setState({ displayBio: true});
    }

    displayLess(){
        /* To set state of component setState - specifically updating values
        in object (keys we want to update in state : value of new state) */
        this.setState({ displayBio: false});
    }

    /*Define Structure of Component in render() */
    render(){
        return (
            <div>
          <SearchBar/>
                

      
                <div>
                    <div class="textKnowledge">

                        <h2>Knowledge Base</h2>
                        <h2 id="smallHeadingText"><NavLink to="Answer" style={{ textDecoration: 'none', color: 'black' }}>General</NavLink></h2>
                        <Route path="/Answer" component={Answer} />

                        <hr />

                        <h4>FAQ (2)</h4>
                        <ul>
                            <li id="smallHeadingText"><NavLink to="Answer" style={{ textDecoration: 'none', color: 'black' }}>What subjects do we provide? </NavLink></li>
                            <Route path="/Answer" component={Answer} />
                            <li id="smallHeadingText"><NavLink to="Answer" style={{ textDecoration: 'none', color: 'black' }}>Why choose Tutorello.ie? </NavLink></li>
                            <Route path="/Answer" component={Answer} />
                        </ul>

                        <h4>Getting Started (2)</h4>
                        <ul>
                            <li id="smallHeadingText"><NavLink to="Answer" style={{ textDecoration: 'none', color: 'black' }}>What is supplied if you sign up for the free 14-day membership deal? </NavLink></li>
                            <Route path="/Answer" component={Answer} />
                            <li id="smallHeadingText"><NavLink to="Answer" style={{ textDecoration: 'none', color: 'black' }}>How much does the full membership option cost?</NavLink></li>
                            <Route path="/Answer" component={Answer} />
                        </ul>

                        <h2 id="smallHeadingText"><NavLink to="Refunds" style={{ textDecoration: 'none', color: 'black' }}>Refunds</NavLink></h2>
                        <Route path="/Refunds" component={Answer} />
                        <hr />

                        <h4>Refunds (1)</h4>
                        <ul>
                            <li id="smallHeadingText"><NavLink to="Refunds" style={{ textDecoration: 'none', color: 'black' }}>I need a refund</NavLink></li>
                            <Route path="/Refunds" component={Answer} />
                        </ul>

                        <h2 id="smallHeadingText"><NavLink to="InformationCollected" style={{ textDecoration: 'none', color: 'black' }}>Information Collected</NavLink></h2>
                        <Route path="/InformationCollected" component={Answer} />
                        <hr />

                        <h4>Privacy Policy (2)</h4>
                        <ul>
                            <li id="smallHeadingText"><NavLink to="InformationCollected" style={{ textDecoration: 'none', color: 'black' }}>Legal Requirements</NavLink></li>
                            <Route path="/InformationCollected" component={Answer} />
                            <li id="smallHeadingText"><NavLink to="InformationCollected" style={{ textDecoration: 'none', color: 'black' }}>Terms of Use</NavLink></li>
                            <Route path="/InformationCollected" component={Answer} />
                        </ul>




                        <h4>Ticket System</h4>
                        <ul>
                        
                            <li id="smallHeadingText"><NavLink to="CreateTicket" style={{ textDecoration: 'none', color: 'black' }}>Request Ticket</NavLink></li>
                            <Route path="/CreateTicket" component={Answer} />
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}


export default FAQ;