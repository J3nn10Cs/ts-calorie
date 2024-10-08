import Form from "./components/Form"
import ActivitiesForm from "./components/ActivitiesForm"
import ActivitiesList from "./components/ActivitiesList"
import { useEffect, useReducer, useState } from "react"
import { activityReducer, initialState } from "./reducers/activityReducer"
function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState )
  const [sun,setSun] = useState(true)

  //theme
  useEffect(() => {
    
    if(sun){
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark','false')
    }else{
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark','true')
    }

  },[sun])

  //LocalStorage
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])

  
  return (
    <>
      <header className="p-5 bg-gradient-to-r from-pink-400 to-orange-300 flex flex-col md:flex-row md:justify-around gap-4 items-center">
        <h1 className="text-center font-black text-3xl">Habits and Activities</h1>
        <button
          onClick={() => setSun(!sun)}
        > 
        {/* si sol */}
          {sun ?
            (
              <i className="fa-solid fa-moon fa-xl hover:cursor-pointer"></i>
            ):(
              <i className="fa-regular fa-sun fa-xl"></i>
            )
          }
        </button>
      </header>

      <section className="max-w-7xl mx-auto mt-5">
        <div className="xl:grid m-2 xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 xl:mb-3 md:mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
          <ActivitiesForm
            activities={state.activities}
          />
        </div>       
      </section>

      <section className="mt-2 m-5 lg:mx-auto md:max-w-4xl md:grid md:grid-cols-2 md:gap-5">
          <ActivitiesList
            activities={state.activities}
            dispatch={dispatch}
          />
      </section>
    </>
  )
}

export default App
