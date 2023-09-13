import {Action} from "./types";
import {Dispatch} from "react";

type FinishProps={
    dispatch:Dispatch<Action>,
    points:number,
    maxPoints:number

}


export default function Finish({dispatch,points,maxPoints}:FinishProps){

    return (
        <div className='finish'>
            <h1>You have finished with {points} from {maxPoints} points</h1>
            <button className='nextBtn' onClick={()=>dispatch({type:'restart'})}>Restart Quiz</button>
        </div>
    )
}