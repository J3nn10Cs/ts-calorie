
import { Activity } from "../types"

//Type
export type ActivityActions = 
  //payload son los datos
  {type: 'save-activity', payload: { newActivity : Activity}} |
  //payload son los datos en este caso solo el id para editar
  {type: 'set-activeId', payload: { id : Activity['id']}} |
  {type: 'delete-activity', payload: { id : Activity['id']}} 
  

//type para el state
export type ActivityState = {
  //se llama activities y va a ser de tipo actividad con un arreglo
  activities : Activity[],
  activeId: Activity['id']
}

//le decimos a ts que va a ser de Activity
const localStorageActivities = () : Activity[] => {
  const activities = localStorage.getItem('activities')
  return activities ? JSON.parse(activities) : []
}
//estado inicial -> State
export const initialState : ActivityState = {
  //citivities inicia como un arreglo vacio
  activities:localStorageActivities(),
  activeId: '',
}

//Reducer
export const activityReducer = (state : ActivityState = initialState ,actions : ActivityActions) => {
  //si el type es save activity
  if(actions.type === 'save-activity'){
    //este codigo maneja la logica para escribir el state
    let updateActivities : Activity[] = []
    if(state.activeId){
      updateActivities = state.activities.map( activity => activity.id === state.activeId ? actions.payload.newActivity : activity )
    }else{
      updateActivities = [...state.activities,actions.payload.newActivity]
    }

    return{
      ...state,
      activities : updateActivities,
      activeId: ''
    }
  }

  //editar
  if(actions.type === 'set-activeId'){
    return {
      ...state,
      activeId : actions.payload.id
    }
  }

  //eliminar
  if(actions.type === 'delete-activity'){
    return{
      ...state,
      activities: state.activities.filter(activity => activity.id !== actions.payload.id  )
    }
  }
  return state
}