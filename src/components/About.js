import React from "react";
import Links from "./Links";

function About({bio,github,linkedin}) {
  const test = bio
  if(test){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */
      <Links github={github} linkedin ={linkedin}/>}
    </div>
  );}
  else{
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
         {/* add your <Links /> component here */
      <Links github={github} linkedin ={linkedin}/>}
      </div>)
  }
}

export default About;
