import Variant from "./Variant";
import React, {Dispatch} from "react";
import {Action, QuestionObject, Questions} from "./types";


type QuestionProps={
    question:QuestionObject,
    dispatch:Dispatch<Action>,
    answer:number | null,
    index:number,
    questionsLength:number,
    points:number
}

export default function Question({question,dispatch,answer,index,questionsLength,points}:QuestionProps){
    return (
        <div >
        <Variant points={points} question={question} dispatch={dispatch} answer={answer} index={index} questionsLength={questionsLength}/>

        </div>
    )
}