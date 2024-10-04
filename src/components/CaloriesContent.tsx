type CaloriesContentProps = {
  calories: number,
  text: string,
  img: string
}

export default function CaloriesContent({calories,text, img} : CaloriesContentProps) {
  return (
    <>
      <div className="bg-black bg-opacity-20 rounded-3xl mb-3 m-2 p-3 xl:m-0 xl:p-0">
          <img className='mx-auto mb-5 p-2' src={img} alt="fire.jpg"/>
          <div className="flex justify-center items-center xl:block">
            <p className='font-black xl:ml-16 text-3xl'>{calories}</p>
            <p className='ml-16 text-2xl xl:mt-5'>{text}</p>
          </div>
        </div>
    </>
  )
}
