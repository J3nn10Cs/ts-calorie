import { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo,Dispatch } from "react"
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { ActivityActions } from "../reducers/activityReducer"
//type
type ActivitiesListProps = {
  activities : Activity[],
  dispatch: Dispatch<ActivityActions>
}

export default function ActivitiesList({activities, dispatch} : ActivitiesListProps) {
  //traer el nombre de categorias
  const categoryName  = useMemo(() => 
    (category : Activity['category'])=> 
      categories.map(cat => cat.id === category ? cat.name : '')
  ,[activities])

  //si está vacio o no
  const isEmpty = useMemo(() => activities.length === 0 ,[activities])

  return (
    <>
      <h2 className="text-4xl font-bold text-center p-3 col-span-2">Food and Activities</h2>
        { isEmpty ?
          <p className="text-2xl font-bold text-center col-span-2">No hay comidas ni actividades aun ...</p> :
        activities.map(activity => (
          <>
            <div 
              key={activity.id}
              className="px-5 py-10 bg-slate-100 shadow-inner rounded-3xl border-collapse mb-3 flex justify-between items-center"
            >
              <div className="space-y-2 relative">
                <p className={`absolute -top-14 -left-8 px-10 py-2 text-white font-bold rounded-xl ${activity.category === 1 ? 'bg-fuchsia-400' : 'bg-orange-500'}`}
                >
                  {categoryName(activity.category)}
                </p>
                <p className="text-4xl font-bold text-orange-600 pt-5">{activity.calorie} calories</p>
                <p>{activity.name_activity}</p>
              </div>

              <div className="flex justify-between items-center">
                <button 
                className="flex gap-5 items-center"
                onClick={() => dispatch({type:'set-activeId', payload:{id : activity.id}})}
                >
                  <PencilSquareIcon
                    className="text-black h-6 w-8"
                  />
                </button>
                <button 
                  className="flex gap-5 items-center"
                  onClick={() => dispatch({type:'delete-activity', payload:{id: activity.id}})}
                >
                  <TrashIcon
                    className="text-red-600 h-6 w-8"
                  />
                </button>
              </div>
            </div>
          </>
        ))}
    </>
  )
}
