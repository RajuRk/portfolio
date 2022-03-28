import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar, Button } from 'react-bootstrap';

function Skills() {
    const html =  85;
    const css = 85;
    const js = 65;
    const php = 65;
    const wordpress = 70;
    const react = 65;
    const node = 45;
    const mongo = 50;
    const mysql = 50;
    return (
    <div id="skill-sec">
       <div className="container">
           <div className="row">
               <div className="skills">
                    <h2>Skills</h2>
                    <ProgressBar now={html} label={"HTML"}/>
                    <ProgressBar now={css} label={"CSS"}/>
                    <ProgressBar now={js} label={"Javascript"}/>
                    <ProgressBar now={php} label={"PHP"}/>
                    <ProgressBar now={wordpress} label={"Wordpress"}/>
                    <ProgressBar now={react} label={"React"}/>
                    <ProgressBar now={node} label={"Node js"}/>
                    <ProgressBar now={mongo} label={"MongoDB"}/>
                    <ProgressBar now={mysql} label={"MySQL"}/>
                </div>
           </div>
       </div>        
    </div>
  )
}

export default Skills
