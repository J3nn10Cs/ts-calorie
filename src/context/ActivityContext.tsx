import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activityReducer";
import { Activity } from "../types";
import { categories } from "../data/categories";

type ActivityProviderProps = {
  children: ReactNode
}

type ActivityContextProps = {
  state : ActivityState
  dispatch : Dispatch<ActivityActions>
  caloriesConsumend : number
  caloriesBurned: number
  diferenceTotal : number
  categoryName : (category: Activity["category"]) => string[]
  isEmpty : boolean
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({children} : ActivityProviderProps) => {

  const [state, dispatch] = useReducer(activityReducer,initialState)

  // contador de caloria
  const caloriesConsumend = useMemo(() => state.activities.reduce((total,activity) => activity.category === 1 ? total + activity.calorie : total, 0) ,[state.activities])

  //contador de ejercicios
  const caloriesBurned =  useMemo(() => state.activities.reduce((total,activity) => activity.category === 2 ? total + activity.calorie : total, 0),[state.activities])

  //diferencia
  const diferenceTotal = useMemo(() => caloriesConsumend - caloriesBurned ,[state.activities])

  //traer el nombre de categorias
  const categoryName  = useMemo(() => 
    (category : Activity['category'])=> 
      categories.map(cat => cat.id === category ? cat.name : '')
  ,[state.activities])

  //si está vacio o no
  const isEmpty = useMemo(() => state.activities.length === 0 ,[state.activities])

  return(
    <ActivityContext.Provider
      value={{
        state,
        dispatch,
        caloriesConsumend,
        caloriesBurned,
        diferenceTotal,
        categoryName,
        isEmpty
      }}
    >
      {children}
    </ActivityContext.Provider>
  )
}