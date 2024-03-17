
const Cooking = ({ recipe }) => {
// console.log(recipe)
    return (
        <>
            {
                recipe.map((item, idx) => { 
                    return (
                        <tbody className="bg-[#28282808]">
                            <tr>
                                <th>1</th>
                                <td>{item.recipe_name}</td>
                                <td>{item.preparing_time} minutes</td>
                                <td>{item.calories} calories</td>
                            </tr>
                        </tbody>                      
                    )
                })
            }
        </>
    );
};

export default Cooking;