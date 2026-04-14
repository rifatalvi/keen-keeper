import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    const { status, days_since_contact, picture, tags, name } = friend;

    return (
        <Link to={`/friend/${friend.id}`} className="group card w-full bg-white shadow-sm border border-gray-100 rounded-2xl 
                        hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer">
            
            <div className="card-body items-center text-center p-6">
                
                <div className="avatar mb-2">
                    <div className="w-20 rounded-full ring-2 ring-gray-50 ring-offset-2 
                                  group-hover:ring-emerald-400 transition-all duration-500">
                        <img src={picture} alt={name} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>

                <h2 className="card-title text-gray-800 font-bold text-lg mb-0">{name}</h2>
                <p className="text-[11px] text-gray-400 mb-4">{days_since_contact}d ago</p>

                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <div 
                            key={index} 
                            className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-100"
                        >
                            {tag}
                        </div>
                    ))}
                </div>

              
                <div className="card-actions">
                    <div className={`badge border-none text-white text-[10px] font-bold py-3.5 px-5 rounded-full uppercase tracking-wider
                        ${status === "Overdue" ? "bg-[#EF4444]" : ""}
                        ${status === "On-Track" ? "bg-[#064E3B]" : ""}
                        ${status === "Almost Due" ? "bg-[#F59E0B]" : ""}
                        group-hover:brightness-110 transition-all duration-300
                    `}>
                        {status}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;