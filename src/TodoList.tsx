import React, { useState } from 'react';
import { carbrands } from './types';


  
  export default function TodoList(props:carbrands) {

    const [ Geartype, setgeartype ] = useState("Automatic");
    const [text, settext] = useState("")

    return (
      <div style={props.carName.design}>
        <h1><i>{props.carName.model}</i></h1>
        <h2>{props.carName.brand}</h2>
        <h3>{props.header}</h3>
        <img 
        className= 'carimage'
        src= {props.carName.image}
        alt= {props.carName.name}
        ></img>
        
        <p>{props.carName.version}  is the top model <br/>and the price of 
        the model is Rs.{props.carName.price} It gives a mileage of {props.carName.mileage}.</p>
        <h3>Gear: {Geartype}</h3>
        <input type='button' value={'button 1'} onClick={() => {setgeartype ("Manual")}}/>
        <input type='button' value={'button 2'} onClick={() => {setgeartype ("Automatic")}}/>
        <br/>
        <input type='text' value={text} placeholder='message' onChange={(q) => {settext(q.target.value)}}/>
        <br/>
        {text}
      </div>
    );
  }
