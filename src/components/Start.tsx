import React from "react";
import {Action} from "./types";

type StartProps={
    dispatch:React.Dispatch<Action>
}



export default function Start({dispatch}:StartProps){

    return (
        <div className='start'>
            <h1>Welcome to the our Quiz</h1>
            <button className='startBtn' onClick={()=>dispatch({type:'start'})}>Lets start</button>
        </div>
    )
}