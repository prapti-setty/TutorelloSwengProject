import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Main from "./Main";
import FAQ from "./FAQ";
import BlogPage from "./BlogPage";


import Answer from "./Answer";
import CouldNotFind from "./CouldNotFind";
import Refunds from "./Refunds";
import CreateTicket from "./CreateTicket";
import AllQuestions from './AllQuestions';
import User from "./User";
class Home extends Component {

    render() {
        return (
            <div>
            <HashRouter>
                    <div>
                        <h3>Tutorello
                        <ul className="header" >
                        <li><NavLink exact to="/">Main</NavLink></li>
                        <li><NavLink to="/FAQ">FAQ</NavLink></li>
                        <li><NavLink to="/BlogPage">Admin</NavLink></li>
                        <li><NavLink to="/CreateTicket">Request ticket</NavLink></li>
                                <li><NavLink to="/User">Users</NavLink></li>

  
                            </ul>
                            </h3>
                    <div className="content">
                        <Route exact path="/" component={Main} />
                        <Route path="/FAQ" component={FAQ} />
                        <Route path="/BlogPage" component={BlogPage} />
                        <Route path="/Answer" component={Answer} />
                        <Route path="/Refunds" component={Refunds} />
                        <Route path="/CreateTicket" component={CreateTicket} />
                        <Route path="/User" component={User} />
                            <Route path="/CouldNotFind" component={CouldNotFind} />
                            <Route path="/AllQuestions" component={AllQuestions} />

    
                    </div>


                </div>


            </HashRouter>
           
               
                </div>
            
        );
    }
}

export default Home;