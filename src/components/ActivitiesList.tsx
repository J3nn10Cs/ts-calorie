
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useActivity } from "../hooks/useActivity"

export default function ActivitiesList(){
  
  const {state,isEmpty, categoryName, dispatch} = useActivity()

  return (
    <>
      <h2 className="text-4xl font-bold text-center p-3 col-span-2 mb-5 xl:mb-0 dark:text-white">Food and Activities</h2>
        { isEmpty ?
          <p className="text-2xl font-bold text-center col-span-2 dark:text-white">No hay comidas ni actividades aun ...</p> :
        state.activities.map(activity => (
          <>
            <div 
              key={activity.id}
              className="px-5 py-10 bg-slate-100 dark:bg-neutral-900 shadow-inner rounded-3xl border-collapse mb-7 xl:mb-0 flex justify-between items-center"
            >
              <div className="space-y-2 relative">
                <p className={`absolute -top-14 -left-8 px-10 py-2 text-white font-bold rounded-xl ${activity.category === 1 ? 'bg-fuchsia-400' : 'bg-orange-500'}`}
                >
                  {categoryName(activity.category)}
                </p>
                <p className="text-4xl font-bold text-orange-600 pt-5">{activity.calorie} calories</p>
                <p className="font-bold text-2xl dark:text-white">{activity.name_activity}</p>
              </div>

              <div className="flex justify-between items-center">
                <button 
                className="flex gap-5 items-center"
                onClick={() => dispatch({type:'set-activeId', payload:{id : activity.id}})}
                >
                  <PencilSquareIcon
                    className="text-black h-6 w-8 dark:text-white"
                  />
                </button>
                <button 
                  className="flex gap-5 items-center dark:text-red-700"
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
