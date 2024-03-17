
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Header/Banner/Banner'
import Navbar from './components/Header/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Recipes from './components/Recepes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cooking from './components/Sidebar/Cooking'

function App() {
  const [recipes, setRecipes] = useState([])
  const [sidebars, setSidebars] = useState([])
  const [cooking, setCooking] = useState([])
  const [count, setCount] = useState(0)
  const [calories, setCalories] = useState(0)
  const [time,SetTime] = useState(0)

  useEffect(() => {
    fetch('cooking.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  const handleRecipe = (recipe) => {
    const isExist = sidebars.find(s => s.recipe_id == recipe.recipe_id)

    if (!isExist) {
      const newRecipe = [...sidebars, recipe]
      setSidebars(newRecipe)
    } else {
      toast.warn('arledty exist');
    }
  }

  const handleCook = (r) => {

    const newRecipe = sidebars.filter((item) => item.recipe_id != r.recipe_id)
    const newRecipe2 = sidebars.filter((item) => item.recipe_id == r.recipe_id)
    const arr = [...cooking, newRecipe2]
    setSidebars(newRecipe)
    setCooking(arr)
    setCount(count + 1)
    setCalories(calories + r.calories)
    SetTime(time + r.preparing_time)
  }


  return (
    <>
      <main className='container mx-auto'>
        <header>
          <Navbar></Navbar>
          <Banner></Banner>
        </header>
        <div className='mb-11'>
          <h1 className='text-4xl text-center font-bold text-[#150B2B]'>Your recipe</h1>
          <p className='text-center  text-[#150b2b99] lg:w-8/12 mx-auto mt-4'> Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
        </div>
        <div className='lg:grid grid-cols-12'>

          <div className='col-span-7' >
            <div className=' lg:grid grid-cols-2 gap-6'>
              {
                recipes.map((recipe, idx) => <Recipes key={idx} handleRecipe={handleRecipe} recipe={recipe}></Recipes>)
              }
            </div>
          </div>

          <div className='col-span-5 card p-4 mt-11 lg:mt-1'>
            <div className=''>
              <Sidebar handleCook={handleCook} sidebars={sidebars} ></Sidebar>
            </div>
            <div>
              <h2 className='text-2xl lg:text-4xl text-center font-bold border-b border-dotted border-black pb-5'>Currently cooking:{count} </h2>
              <div>
                <table className=" table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  {
                    cooking.map((recipe, idx) => <Cooking key={idx} recipe={recipe}></Cooking>)
                  }
                </table>

              </div>
              <div className='mt-4 '>
                <h1 className="text-xl lg:font-bold">Total Time:  {time}</h1>
                <h1 className="text-xl lg:font-bold">Total caroties: {calories}</h1>
               
              </div>
            </div>
          </div>

        </div>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
