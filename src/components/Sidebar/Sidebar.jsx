import Cook from "./Cook";


const Sidebar = ({ sidebars, handleCook }) => {
    // console.log(sidebars)
    return (
        <div>
            <div className="border-b mb-6 border-dotted border-black pb-5"><h1 className="text-4xl text-center font-bold">Want tocook: {sidebars.length}</h1></div>

            <div className="mb-8">
                <div className="">

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
                        sidebars.map((cook, idx) => <Cook
                            key={idx}
                            handleCook={handleCook}
                            cook={cook}
                        ></Cook>)
                    }
                    </table>
               
                </div>
            </div>

        </div>
    );
};

export default Sidebar;