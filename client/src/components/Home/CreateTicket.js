/*Specify Component as optional import */
import React, { Component } from 'react';

class CreateTicket extends Component {
    async handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <div>
                <form action="mailto:someone@example.com" method="post" enctype="text/plain">
                    <input type="reset" value="Reset"></input>
                    <br></br>
                    <label>Name: </label>
                    <br></br>
                    <input type="text" name="name"></input>
                    <br></br>
                    <label>Username: </label>
                    <br></br>
                    <input type="text" name="username"></input>
                    <br></br>
                    <label>UserType: </label>
                    <br></br>
                    <select>
                        <option value="parent">Parent</option>
                        <option value="student">Student</option>
                        <option value="tutor">Tutor</option>
                    </select>
                    <br></br>
                    <label>Question Category: </label>
                    <br></br>
                    <select>
                        <option value="general">General</option>
                        <option value="onlineSafety">Online Safety</option>
                        <option value="legal">Legal</option>
                        <option value="other">Other</option>
                    </select>
                    <br></br>
                    <label>Question details: </label>
                    <br></br>
                    <input type="textarea" name="details"></input>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Send"></input>
                    <br></br>

                </form>
            </div>

        );
    }
}
export default CreateTicket;


