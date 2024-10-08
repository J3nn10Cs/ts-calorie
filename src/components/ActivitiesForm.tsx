import fire from '/svg/fire.svg'
import soccer from '/svg/soccer.svg'
import difwrence from '/svg/diference.svg'
import { Activity } from '../types'
import { useMemo } from 'react'
import CaloriesContent from './CaloriesContent'

type CalorieProps = {
  activities: Activity[]
}
export default function ActivitiesForm({activities} : CalorieProps) {

  // contador de caloria
  const caloriesConsumend = useMemo(() => activities.reduce((total,activity) => activity.category === 1 ? total + activity.calorie : total, 0) ,[activities])

  //contador de ejercicios
  const caloriesBurned =  useMemo(() => activities.reduce((total,activity) => activity.category === 2 ? total + activity.calorie : total, 0),[activities])

  //diferencia
  const diferenceTotal = useMemo(() => caloriesConsumend - caloriesBurned ,[activities])
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-2 md:m-0">

        <CaloriesContent
          calories={caloriesConsumend}
          text='Calories'
          img={fire}
        />
        <CaloriesContent
          calories={caloriesBurned}
          text='Exercises'
          img={soccer}
        />

      </div>

      <div className="md:grid md:grid-cols-2 md:gap-2 m-3 xl:m-0">
        <div className="md:col-span-2 md:mx-36 p-2 xl:p-0 bg-black bg-opacity-20 dark:bg-neutral-900 rounded-3xl">
        <img className='mx-auto mb-5 p-2' src={difwrence} alt="fire.jpg"/>
          <div className='flex justify-center items-center p-1 xl:block'>
            <p className='font-black xl:ml-16 text-3xl dark:text-white'>{diferenceTotal}</p>
            <p className='ml-16 text-2xl xl:mt-5 dark:text-white'>Diference</p>
          </div>
        </div>

      </div>

    </>
  )
}
