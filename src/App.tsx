import React, {useEffect, useReducer} from 'react';

import './App.css';
import Start from "./components/Start";
import Finish from "./components/Finish";
import Question from "./components/Question";
import reducer from "./components/reducer";
import {AppState} from "./components/types";

function App() {


    const initialState:AppState={
        questions:[],
        status:'loading'
    }


    const[{questions,status},dispatch]=useReducer(reducer,initialState)




   useEffect(()=>{

     fetch('http://localhost:5000/questions').then(res=>res.json()).then(data=>dispatch({type:'data',payload:data}))
         .catch(error=>dispatch({type:'dataFailed'}))


   },[])

  return (
    <div className="app">
       <Question/>
    </div>
  );
}

export default App;
