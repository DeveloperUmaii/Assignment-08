import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
<div className="px-10">
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <img
        src="https://i.ibb.co.com/JdL3t1H/Gemini-Generated-Image-erc1irerc1irerc1.jpg"
        className="max-w-sm rounded-lg shadow-2xl" />
        <div>
        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

        
        <Link to='/ListedBooks' className=' my-16 btn text-white font-bold bg-[#23BE0A]'>View The List</Link>
        </div>
    </div>
    </div>  
</div>
    );
};

export default Hero;