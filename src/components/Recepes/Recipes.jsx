import { MdOutlineTimer } from "react-icons/md";
import { FaFire } from "react-icons/fa";


const Recipes = ({ recipe, handleRecipe }) => {
    const { recipe_image_url, recipe_image_name, description, ingredients, preparing_time, calories } = recipe

    return (
        <div>
            <div className=" card p-6 shadow-xl">
                <img className="w-auto h-40 lg:h-52 rounded-lg" src={recipe_image_url} alt="Shoes" />
                <div className="">
                    <h2 className="text-lg mt-4 font-bold">{recipe_image_name}</h2>
                    <p className="mb-3">describetion {description.slice(0,30)}</p>
                    <hr />
                    <div>
                        <h3 className="mb-3  text-lg font-bold">Ingredients: {ingredients.length}</h3>
                        <ul className="mb-4 list-disc pl-6">
                            <li>{ingredients[0]}</li>
                            <li>{ingredients[1]}</li>
                            <li>{ingredients[2]}</li>
                        </ul>
                        <hr />
                        <div className="mt-6 flex gap-8">
                            <div className='flex gap-2 items-center'><MdOutlineTimer /> <p>{preparing_time} minutes</p></div>
                            <div className='flex gap-2 items-center'><FaFire /> <p>{calories} calories</p></div>
                        </div>
                    </div>
                    <div className="mt-6 ">
                        <button onClick={() => handleRecipe(recipe)} className=" px-2 py-2 text-center rounded bg-purple-700 text-white cursor-pointer">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;