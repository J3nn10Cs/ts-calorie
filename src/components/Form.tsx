import { useState,ChangeEvent,FormEvent, Dispatch, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityActions, ActivityState } from "../reducers/activityReducer";

type FormProps = {
  state: ActivityState
  dispatch : Dispatch<ActivityActions>
}

const initialState : Activity= {
  id: uuidv4(),
  category : 1,
  name_activity:'',
  calorie:0
}

export default function Form({dispatch, state} : FormProps ) {
  const [activity,setActivity] = useState <Activity>(initialState)

  useEffect(() => {
    //si hay algo en el id
    if(state.activeId){
      //creamos donde vamor a almacenar los campos -> filter devuelve un arreglo y traemos la posicion 0
      const updateActivity = state.activities.filter(stateActivities => stateActivities.id === state.activeId)[0]
      setActivity(updateActivity)
    }
  },[state.activeId])

  // useEffect(() => {
  //   const deleteId = state.activities.filter(deleteActivity => deleteActivity.id !== state.deleteId)
  //   setActivity(deleteId)
  // },[state.activities])

  //ser utilizado en select o input
  const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> ) => {
    //retorna tru o false
    const isnumberFiel = ['category','calorie'].includes(e.target.id)
    
    setActivity({
      //no perder lo que ya tenemos en el state
      ...activity,
      //key - value -> donde escribe - que escribe
      [e.target.id] : isnumberFiel ? +e.target.value : e.target.value
    })
  }

  //validar que los campos esten llenos
  const validActivity = () => {
    const {name_activity, calorie} = activity

    return name_activity.trim() !== '' && calorie>0
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type:'save-activity', payload: {newActivity: activity}})

    //setear el state
    setActivity({
      //reescribe
      ...initialState,
      //crea otro id
      id: uuidv4()
    })
  }
  return (
    <>
      <form 
      className="sm:row-span-2 bg-black bg-opacity-20 p-4 sm:p-14 max-w-2xl sm:w-full sm:h-full sm:mx-auto rounded-3xl sm:mb-4 dark:bg-neutral-900 "
      onSubmit={handleSubmit}
      >
        <div className="p-5">
          <label 
            htmlFor="category"
            className="font-black text-xl dark:text-white"
          >
            Categories
          </label>
          <select 
            name="category" 
            id="category"
            className="w-full border rounded-lg p-3 mt-2 "
            value={activity.category}
            onChange={ handleChange}
          >
            {categories.map(category => (
              <option 
                key={category.id}
                value={category.id}
                
                >
                {category.name}  
              </option>
            ))}
          </select>
        </div>

        <div className="p-5">
          <label 
            htmlFor="name_activity"
            className="font-black text-xl dark:text-white"
          >
            Activity
          </label>
          <input 
            type="text" 
            name="name_activity" 
            id="name_activity"
            value={activity.name_activity}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
            placeholder="Ej. exercise, bicycle, weights"
          />
        </div>

        <div className="p-5">
          <label 
            htmlFor="calorie"
            className="font-black text-xl dark:text-white"
          >
            Calories
          </label>
          <input 
            type="number" 
            name="calorie" 
            id="calorie"
            value={activity.calorie}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
            placeholder="Ej. 300 o 500"
          />
        </div>

        <button 
          type="submit"
          className="bg-slate-900 hover:bg-slate-800   text-white rounded-lg text-center mt-2 py-3 w-full font-bold disabled:opacity-10 dark:bg-neutral-700"
          disabled={!validActivity()}
        >
          {activity.category === 1 ? 'Save food' : 'Save exercise'}
          <i className="fa-solid fa-floppy-disk fa-xl ml-2"></i>
        </button>
      </form>
    </>
  )
}
