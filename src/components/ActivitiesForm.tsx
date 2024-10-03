import fire from '/svg/fire.svg'
import soccer from '/svg/soccer.svg'
import difwrence from '/svg/diference.svg'
import { Activity } from '../types'
import { useMemo } from 'react'

type CalorieProps = {
  activities: Activity[]
}
export default function ActivitiesForm({activities} : CalorieProps) {

  const caloriesConsumend = useMemo(() => activities.reduce((total,activity) => activity.category === 1 ? total + activity.calorie : total, 0) ,[activities])

  const caloriesBurned =  useMemo(() => activities.reduce((total,activity) => activity.category === 2 ? total + activity.calorie : total, 0),[activities])
  return (
    <>
      <div className="xl:grid xl:grid-cols-2 gap-2">
        <div className="bg-black bg-opacity-20 rounded-3xl">
          <img className='mx-auto mb-5 p-2' src={fire} alt="fire.jpg"/>
          <p className='font-black ml-16 text-3xl'>{caloriesConsumend}</p>
          <p className='ml-16 text-2xl mt-5'>Calories</p>
        </div>

        <div className="bg-black bg-opacity-20 rounded-3xl">
          <img className='mx-auto mb-5 p-2' src={soccer} alt="fire.jpg"/>
          <p className='font-black ml-16 text-3xl'>{caloriesBurned}</p>
          <p className='ml-16 text-2xl mt-5'>Exercise</p>
        </div>

      </div>

      <div className="grid xl:grid-cols-2 gap-2">
        <div className="col-span-2 mx-36 bg-black bg-opacity-20 rounded-3xl">
        <img className='mx-auto mb-5 p-2' src={difwrence} alt="fire.jpg"/>
          <p className='font-black ml-16 text-3xl'>450</p>
          <p className='ml-16 text-2xl mt-5'>Diference</p>
        </div>

      </div>

    </>
  )
}
