/*Specify Component as optional import */
import React, { Component } from 'react';




class Answer extends Component{
    render(){
        return(
            <div>
                <h2>General</h2>
               
                <hr />
                <h2> What Subjects do we Provide?</h2>
                <div className='generalText'>
                    <h5>Created by: Jack Manning</h5>
                    <h5>Modified on: Sat 23rd March 2018</h5>
                    <hr />
                    <p className='generalText'>On our site we have a selection of leaving cert and junior cert subjects.
                     This includes Junior Cert English, Irish,
                     maths, science, geography, history, art, French, CSPE, religion and business. For Leaving Cert we offer Irish,
                    maths, applied maths, French, business, economics, chemistry, physics and biology.</p>
                    <hr />
                </div>

                <h2> What choose Tutorello.ie?</h2>
                <div className='generalText'>
                    <h5>Created by: Jack Manning</h5>
                    <h5>Modified on: Fri 22nd March 2018</h5>
                    <hr />
                    <p className='generalText'>ExamLearn simplifies Irish state exams. It has everything 
                    every student needs to excel in their exams. It provides
                    all the content they need to study from, quizzes they need to challenge themselves,
                     and features they need like our ‘Exam Questions by Topic’ feature and personalized
                      study timetable feature to enhance their learning experience.
                    </p>
                    <hr />
                </div>
                

                <h2> What is supplied if you sign up for the free 14-day membership deal?</h2>
                <div className='generalText'>
                    <h5>Created by: Jack Manning</h5>
                    <h5>Modified on: Fri 22nd March 2020</h5>
                    <hr />
                    <p className='generalText'>You will receive notes, quizzes, exam answers and study tips on 
                    Junior Cert Geography and Science or Leaving Cert Irish and Business Studies. 
                    These subjects can often be regarded as subjects with quite a lengthy course, 
                    so we feel they are best suited for the free option as they can truly showcase the material
                    we have on offer.
                    </p>
                    <hr />
                </div>

                <h2> What choose Tutorello.ie?</h2>
                <div className='generalText'>
                    <h5>Created by: Jack Manning</h5>
                    <h5>Modified on: Fri 22nd March 2020</h5>
                    <hr />
                    <p className='generalText'>You get access to our ‘Exam Topics’ and 'Exam Papers' feature - 
                    it is completely free! Even though this is one of the most helpful features that a student 
                    can avail of,we decided to offer it to everyone as it will inevitably push Irish education forward.
                     This is our vision at the end of the day.
                    </p>
                    <hr /> 
                </div>
            
            </div>
        );
    }
}

export default Answer;