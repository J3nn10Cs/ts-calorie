import Form from "./components/Form"
import ActivitiesForm from "./components/ActivitiesForm"
import ActivitiesList from "./components/ActivitiesList"
import { useEffect, useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activityReducer"
function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState )

  //LocalStorage
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])

  
  return (
    <>
      <header className="p-5 bg-gradient-to-r from-pink-400 to-orange-300">
        <h1 className="text-center font-black text-3xl">Habits and Activities</h1>
      </header>

      <section className="max-w-7xl m-2 mx-auto mt-5">
        <div className="grid m-2 xl:grid-cols-2 grid-rows-2 gap-4 mb-3">
          <Form
            dispatch={dispatch}
            state={state}
          />
          <ActivitiesForm
            activities={state.activities}
          />
        </div>       
      </section>

      <section className="mt-2 mx-auto max-w-4xl grid grid-cols-2 gap-5">
          <ActivitiesList
            activities={state.activities}
            dispatch={dispatch}
          />
      </section>
    </>
  )
}

export default App
