import { useState } from "react";


const Cook = ({ cook, handleCook }) => {
    const { recipe_name, preparing_time, calories } = cook
 // console.log(cook)
    return (
        <>
           
                <tbody className="bg-[#28282808]">
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                        <td> <p onClick={()=> handleCook(cook)} className="px-1 py-2 text-center rounded bg-purple-700 text-white cursor-pointer">Preparing</p></td>
                    </tr>


                </tbody>
           
          
        </>
    );
};

export default Cook;