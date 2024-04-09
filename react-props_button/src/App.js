import React from "react";
import "./styles.css";

export default function App() {
  function handleClick(){
    console.log("click, click");
  }
  return <div> 
    <Button color="pink" disabled={false} text="Click me" onClick={handleClick}/>
  </div>;
}

function Button({color,disabled,text,onClick}){
return <button style={{backgroundColor:`${color}`}}
disabled={disabled} onClick={onClick}> {text} </button>
}
