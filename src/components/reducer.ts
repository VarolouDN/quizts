import {Action, AppState} from "./types";


export default  function reducer(state:AppState,action:Action):AppState{

  switch(action.type){

      case 'data':
          return {...state,questions:action.payload,status:'ready'}
      case 'dataFailed':
          return {...state,status:'error'}

      default :
          throw new Error('Action is undefined')
  }

}