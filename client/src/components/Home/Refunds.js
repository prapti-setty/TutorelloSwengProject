/*Specify Component as optional import */
import React, { Component } from 'react';



class Refunds extends Component{
    render(){
        return(
            <div>
                <hr/>
                <h2>Refunds</h2>
               
                <hr />

                <h2> I Need a Refund</h2>
                <div className='generalText'>
                <h5>Created by: Jack Manning</h5>
                <h5>Modified on: Sat 23rd March 2017</h5>
                <hr />
                    <p className='generalText'>If you are having problems with the site or the content please get in touch via our chatbot on 
                the homepage or on our support email: info@examlearn.ie. Please send your email address and the issue you are having and help will
                 be on the way.</p>
                <hr />
                </div>


                
            </div>
        );
    }
}

export default Refunds;