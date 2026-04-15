import React from 'react';

const TimelineItem = ({ type, person, date, imgSrc }) => (
        <div className="flex items-center p-4 border border-gray-100 rounded-lg mb-3 bg-white shadow-sm hover:shadow-md transition-shadow">
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


export default TimelineItem;