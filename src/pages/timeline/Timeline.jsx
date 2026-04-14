import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';


import textIcon from '../../assets/image/text.png';
import callIcon from '../../assets/image/call.png';
import videoIcon from '../../assets/image/video.png';




const Timeline = () => {
    const { text, call, videoCall} = useContext(FriendsContext);

    // Timeline Item Component
    const TimelineItem = ({ type, person, date, imgSrc }) => (
        <div className="flex items-center p-4 border border-gray-100 rounded-lg mb-3 bg-white shadow-sm">
            <div className="mr-4">
               
                <img src={imgSrc} alt={type} className="w-10 h-10 object-contain" />
            </div>
            <div>
                <p className="text-gray-700 font-semibold">
                    <span className="text-gray-800">{type}</span> 
                    <span className="text-gray-400 font-normal ml-1 text-sm">with {person}</span>
                </p>
                <p className="text-[11px] text-gray-400 mt-1">{date}</p>
            </div>
        </div>
    );
    

    return (
       <div className='max-w-2xl mx-auto my-8 p-6 bg-white'>
           <h1 className="text-3xl font-bold mb-6 text-[#1a2b3c]">Timeline</h1>
        {
            call.length===0 && text.length===0 && videoCall.length===0 ? <div className="flex flex-col items-center justify-center py-20 px-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            {/* Search or Box Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-700">No activities found</h3>
          <p className="text-gray-500 text-center mt-1">
            It looks like there's nothing in your timeline yet. 
            Try changing your filters or add a new event.
          </p>
          
        </div>:  <div >
            
            

            <div className="space-y-2">
                
                {text?.map((item, index) => (
                    <TimelineItem 
                        key={`text-${index}`}
                        type="Text"
                        person={item.name}
                        date={item.next_due_date}
                        imgSrc={textIcon}
                    />
                ))}

               
                {call?.map((item, index) => (
                    <TimelineItem 
                        key={`call-${index}`}
                        type="Call"
                        person={item.name}
                        date={item.next_due_date}
                        imgSrc={callIcon}
                    />
                ))}

               
                {videoCall?.map((item, index) => (
                    <TimelineItem 
                        key={`video-${index}`}
                        type="Video"
                        person={item.name}
                        date={item.next_due_date}
                        imgSrc={videoIcon}
                    />
                ))}

               
            </div>
        </div>
        }
       </div>
    );
};

export default Timeline;