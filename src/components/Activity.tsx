import fire from '/svg/fire.svg'
import soccer from '/svg/soccer.svg'
import difwrence from '/svg/diference.svg'
export default function Activity() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-black bg-opacity-20 rounded-3xl">
          <img className='mx-auto mb-5 p-2' src={fire} alt="fire.jpg"/>
          <p className='font-black ml-16 text-3xl'>450</p>
          <p className='ml-16 text-2xl mb-6'>Kcal</p>
          <p className='ml-16 text-2xl'>Calories</p>
        </div>

        <div className="bg-black bg-opacity-20 rounded-3xl">
          <img className='mx-auto mb-5 p-2' src={soccer} alt="fire.jpg"/>
          <p className='font-black ml-16 text-3xl'>450</p>
          <p className='ml-16 text-2xl mb-6'>Exercises</p>
          <p className='ml-16 text-2xl'>Exercise</p>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 mx-36 bg-black bg-opacity-20 rounded-3xl">
        <img className='mx-auto mb-5 p-2' src={difwrence} alt="fire.jpg"/>
          <p className='font-black ml-16 text-3xl'>450</p>
          <p className='ml-16 text-2xl mb-6'>Exercises</p>
          <p className='ml-16 text-2xl'>Exercise</p>
        </div>

      </div>

    </>
  )
}
