import React, {useEffect, useReducer} from 'react';

import './App.css';
import Start from "./components/Start";
import Finish from "./components/Finish";
import Question from "./components/Question";
import reducer from "./components/reducer";
import {AppState} from "./components/types";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {


    const initialState:AppState={
        questions:[],
        status:'loading',
        index:0,
        answer:null,
        points:0
    }


    const[{questions,status,index,answer, points},dispatch]=useReducer(reducer,initialState)

    const maxPoints:number=questions.reduce((accum,elem)=>accum+elem.points,0)
    const questionsLength:number=questions.length

   useEffect(()=>{

     fetch(/*'https://localhost5000/questions'*/'/data/data.json').then(res=>res.json()).then(data=>dispatch({type:'data',payload:data}))
         .catch(error=>dispatch({type:'dataFailed'}))


   },[])

  return (
    <div className="app">
        {status==='loading' && <Loading/>}
        {status==='ready' && <Start dispatch={dispatch}/>}
        {status==='dataFailed' && <Error/>}
        {status==='questionsActive' &&
            <Question index={index} dispatch={dispatch}
                      answer={answer} question={questions[index]}
                      questionsLength={questionsLength}
                      points={points}
            />}
        {status==='finished' && <Finish points={points} dispatch={dispatch} maxPoints={maxPoints}/>}
    </div>
  );
}

export default App;
