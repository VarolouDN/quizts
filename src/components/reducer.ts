import {Action, AppState} from "./types";


export default  function reducer(state:AppState,action:Action):AppState{

  switch(action.type){

      case 'data':
          return {...state,questions:action.payload,status:'ready'}
      case 'dataFailed':
          return {...state,status:'error'}
      case 'start':
          return {...state,status:'questionsActive'}
     case 'answer':
          return {...state,answer:action.payload,points:action.payload===state.questions[state.index].correctAnswer
                  ?state.points+state.questions[state.index].points:state.points}
      case 'nextAnswer':
          return {...state,index:state.index+1,answer:null}
      case 'finished':
          return {...state,status:'finished'}
      case 'restart':
          return {...state,status:'ready',answer:null,index:0,questions:state.questions,points:0}

      default :
          throw new Error('Action is undefined')
  }

}