import { categories } from "../data/categories";

export default function Form() {
  return (
    <>
      <form 
      className="row-span-2 bg-black bg-opacity-20 p-24 w-full h-full mx-auto rounded-3xl"
      action="">
        <div className="p-5">
          <label 
            htmlFor="category"
            className="font-black text-xl"
          >
            Categories
          </label>
          <select 
            name="category" 
            id="category"
            className="w-full border rounded-lg p-1 mt-2"
          >
            {categories.map(category => (
              <option 
                key={category.id}
                value={category.id}>
                {category.name}  
              </option>
            ))}
          </select>
        </div>

        <div className="p-5">
          <label 
            htmlFor="activity"
            className="font-black text-xl"
          >
            Activity
          </label>
          <input 
            type="text" 
            name="activity" 
            id="activity"
            className="w-full border rounded-lg p-1 mt-2"
            placeholder="Ej. exercise, bicycle, weights"
          />
        </div>

        <div className="p-5">
          <label 
            htmlFor="calorie"
            className="font-black text-xl"
          >
            Calories
          </label>
          <input 
            type="number" 
            name="calorie" 
            id="calorie"
            className="w-full border rounded-lg p-1 mt-2"
            placeholder="Ej. 300 o 500"
          />
        </div>

        <button 
          type="submit"
          className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-center mt-2 py-3 w-full font-bold"
        >
          
          Save food or exercise 
          <i className="fa-solid fa-floppy-disk fa-xl ml-2"></i>
        </button>
      </form>
    </>
  )
}
