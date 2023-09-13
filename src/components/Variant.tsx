import {Action, QuestionObject} from "./types";
import React, {Dispatch} from "react";
import Progress from "./Progress";

type VariantProps={

    question:QuestionObject,
    dispatch:Dispatch<Action>,
    answer:number | null,
    index:number,
    questionsLength:number,
    points:number

}


export default function Variant({question,dispatch,answer,index,questionsLength,points}:VariantProps){



    return (
        <div className='question'>
            <h2>{question.question}</h2>
            <Progress index={index}/>
            <span>{index+1}/{questionsLength}</span>
            <span>{points}/{questionsLength} points</span>

            {question.variants.map((variant,index)=>{
                return <button disabled={answer!==null}  onClick={()=>dispatch({type:'answer',payload:index})}
                               key={variant} className={`questionBtn  
                               ${answer!==null ? index===question.correctAnswer ?'correctBtn':'answeredBtn' :'beforeAnswer'} `}>{variant}</button>
            })}
            {answer!==null ? index<questionsLength-1? <button className='nextBtn'  onClick={()=>dispatch({type:'nextAnswer'})}>Next Question</button>:
                <button className='nextBtn'  onClick={()=>dispatch({type:'finished'})}>Finish</button>:""
            }
        </div>
    )
}