import React, { Component } from "react";

import {
    TwitterButton,
    FacebookLikeButton,
    FacebookShareButton,
} from 'react-social-buttons';
class Main extends Component {
    render() {
        return (
            <div>
             

                <div id='socialWidgets'>
                    <div id="twitter">
                        <TwitterButton url={' '} text={'This is an amazing site for leaving cert grinds! https://www.facebook.com/tutorello/'} />
                    </div>
                    <div id="facebookLike">
                        <FacebookLikeButton url={'https://www.facebook.com/tutorello/'} />
                    </div>
                    <div id="facebookShare">
                        <FacebookShareButton url={'https://www.facebook.com/tutorello/'} />
                    </div>
                    <div id="bottom" />
                </div>
            </div>
        );
    }

}

export default Main;