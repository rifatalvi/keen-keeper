import React from 'react';
import useFriends from '../../hooks/useFriends';

const TotalCount = () => {
  const {friends} =useFriends();
  const onTracks = friends.filter(ontrack => ontrack.status=== "On-Track")
  console.log(onTracks)


    return (
        <div className='container mx-auto w-[90%]'>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    
      <div className="card card-dash bg-base-100 border border-base-200 shadow-md">
        <div className="card-body items-center py-10">
          <h2 className="text-5xl font-bold">{friends.length}</h2>
          <p className="text-xs uppercase text-slate-400">Total Friends</p>
        </div>
      </div>

      <div className="card card-dash bg-base-100 border border-base-200 shadow-md">
        <div className="card-body items-center py-10">
          <h2 className="text-5xl font-bold">{onTracks.length}</h2>
          <p className="text-xs uppercase text-slate-400">On Track</p>
        </div>
      </div>

      <div className="card card-dash bg-base-100 border border-base-200 shadow-md">
        <div className="card-body items-center py-10">
          <h2 className="text-5xl font-bold">6</h2>
          <p className="text-xs uppercase text-slate-400">Need Attention</p>
        </div>
      </div>

      <div className="card card-dash bg-base-100 border border-base-200 shadow-md">
        <div className="card-body items-center py-10">
          <h2 className="text-5xl font-bold">12</h2>
          <p className="text-xs uppercase text-slate-400">Interactions</p>
        </div>
      </div>

    </div>

    <hr className ="border-gray-100 mt-10" />
        </div>
    );
};

export default TotalCount;