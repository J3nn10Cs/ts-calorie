import Form from "./components/Form"
import Activity from "./components/Activity"
function App() {

  return (
    <>
      <header className="p-5">
        <h1 className="text-center font-black text-3xl">Habits and Activities</h1>
      </header>

      <section className="max-w-7xl mx-auto mt-5">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <Form/>
          <Activity/>
        </div>
      </section>
    </>
  )
}

export default App
