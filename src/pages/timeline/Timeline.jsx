import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContext';

import textIcon from '../../assets/image/text.png';
import callIcon from '../../assets/image/call.png';
import videoIcon from '../../assets/image/video.png';
import { SlArrowDown } from 'react-icons/sl';
import TimelineItem from '../../componet/ui/TimelineItem';

const Timeline = () => {
    const { text, call, videoCall } = useContext(FriendsContext);
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

   
    

   
    const filteredTexts = text?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];
    const filteredCalls = call?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];
    const filteredVideos = videoCall?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];

   
    const hasData = filteredTexts.length > 0 || filteredCalls.length > 0 || filteredVideos.length > 0;

    return (
        <div className='max-w-6xl mx-auto my-8 p-6 bg-white rounded-xl shadow-sm border border-gray-50'>
            <h1 className="text-3xl font-bold mb-6 text-[#1a2b3c]">Timeline</h1>
            
            <div className='flex mb-6 flex-col md:flex-row gap-4 justify-between items-center'>
                
                <div className="dropdown w-full md:w-auto">
                    <div tabIndex={0} role="button" className="btn flex justify-between gap-7 w-full md:w-auto">
                        Filter: {filter.charAt(0).toUpperCase() + filter.slice(1)} <SlArrowDown size={12} />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-gray-100">
                        <li onClick={() => setFilter('all')}><a>All</a></li>
                        <li onClick={() => setFilter('call')}><a>Call</a></li>
                        <li onClick={() => setFilter('text')}><a>Text</a></li>
                        <li onClick={() => setFilter('video')}><a>Video</a></li>
                    </ul>
                </div>

                
                <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
                    <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input 
                        type="search" 
                        className="grow" 
                        placeholder="Search by name..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
            </div>

            
            {!hasData ? (
                <div className="flex flex-col items-center justify-center py-20 px-4 bg-gray-50 border border-dashed border-gray-200 rounded-xl">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700">No activities found</h3>
                    <p className="text-gray-400 text-center mt-1 text-sm">
                        {searchTerm ? `No results for "${searchTerm}"` : "Your timeline is currently empty."}
                    </p>
                </div>
            ) : (
                <div className="space-y-2">
                    
                    {(filter === 'all' || filter === 'text') && filteredTexts.map((item, index) => (
                        <TimelineItem
                            key={`text-${index}`}
                            type="Text"
                            person={item.name}
                            date={today}
                            imgSrc={textIcon}
                        />
                    ))}

                   
                    {(filter === 'all' || filter === 'call') && filteredCalls.map((item, index) => (
                        <TimelineItem
                            key={`call-${index}`}
                            type="Call"
                            person={item.name}
                            date={today}
                            imgSrc={callIcon}
                        />
                    ))}

                  
                    {(filter === 'all' || filter === 'video') && filteredVideos.map((item, index) => (
                        <TimelineItem
                            key={`video-${index}`}
                            type="Video"
                            person={item.name}
                            date={today}
                            imgSrc={videoIcon}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timeline;