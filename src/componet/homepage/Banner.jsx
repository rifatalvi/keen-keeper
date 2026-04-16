import React from 'react';

const Banner = () => {
    return (
       
    <div className=" text-center mb-10 p-10 md:p-20 lg:p-20 container mx-auto">
      <h1 className="text-5xl font-bold text-slate-800">Friends to keep close in your life</h1>
      <p className="text-slate-400 my-4 line-clamp-2">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
      <button className="btn bg-[#1a3a32] text-white rounded-lg">+ Add a Friend</button>
    </div>
   

    );
};

export default Banner;