import './Banner.css';

const Banner = () => {
    return (
        <div className="bg-no-repeat bg-cover mt-12 mb-24 lg:h-[600px] lg:p-3 rounded-lg bg-[linear-gradient(0.00deg,rgba(21,11,43,0.9),rgba(21,11,43,0)100%),url('https://i.ibb.co/zFDWzNv/banner.png')]">

            <div className=" banner-section flex flex-col items-center justify-center w-full h-full">
                <h1 className="lg:text-5xl lg:w-9/12 text-center font-extrabold text-[#9dcd2e] lg:text-[#FFFFFF] ">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-lime-400 lg:text-[#FFFFFF] lg:w-4/5 text-center mb-10 mt-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding   problems to become an exceptionally well world-class Programmer.</p>
                <div>
                <button className="bg-green-500 rounded-full px-1 lg:px-6 py-1 lg:py-5 text-black">explore now</button>
                <button className=" btn-outline text-white rounded-full px-1 lg:px-6 py-1 lg:py-5 ml-4 border border-white">Our feedback</button>
            </div>
            </div>
           

        </div>
    );
};

export default Banner;