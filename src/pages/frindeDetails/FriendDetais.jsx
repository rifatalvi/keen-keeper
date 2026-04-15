import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { FiPhone, FiVideo, FiArchive } from 'react-icons/fi';
import { IoChatbubbleOutline, IoNotificationsOffOutline, IoTrashOutline } from 'react-icons/io5';
import { FriendsContext } from '../../context/FriendsContext';
import { toast } from 'react-toastify';
import { MoonLoader } from 'react-spinners';

const FriendDetais = () => {
    const { friendID } = useParams();
    const { friends, loading } = useFriends();
    const {text,
        call,
        videoCall,
        setCall,
        setText,
        setVideoCall} =useContext(FriendsContext)
        const formatDate = (dateString) => {
        if (!dateString) return 'TBD';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };
        const expectedFriend = friends.find((friend) => String(friend.id) === friendID);
        
        const hendelText =()=>{
            setText([...text,expectedFriend])
            toast.success(`Text with ${expectedFriend.name}`)
            
        }
        const hendelCall =()=>{
            setCall([...call,expectedFriend])
            toast.success(`Call with ${expectedFriend.name}`)
            
        }
        const hendelVideoCall =()=>{
            setVideoCall([...videoCall,expectedFriend])
            toast.success(`Video Call with ${expectedFriend.name}`)
            
        }
        if (loading) {
            return <div className="min-h-screen flex justify-center items-center"><MoonLoader /></div>;
        }
        
        
        if (!expectedFriend) {
            return <div className="min-h-screen flex justify-center items-center text-red-500">Friend not found!</div>;
        }
        
        
        const { name, picture, status, tags, days_since_contact, goal_days, next_due_date, bio,email } = expectedFriend;
        
        console.log(text,
            call,
            videoCall)
    return (
        
        <div className="bg-[#F8FAFC]  ">
        <div className='w-[80%] mx-auto p-8 min-h-screen flex flex-col md:flex-row gap-6 font-sans text-[#475569]'>
            
          
            <div className="w-full md:w-80 flex flex-col gap-4">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-inner">
                        <img 
                            src={picture} 
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-[#1E293B]">{name}</h2>
                    
                    <div className="flex flex-col gap-2 mt-3">
                        <span className={`text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest 
                            ${status === "Overdue" ? "bg-[#EF4444]" : "bg-emerald-500"}`}>
                            {status}
                        </span>
                        {tags && tags.map((tag, idx) => (
                            <span key={idx} className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="mt-6 text-[#94A3B8] italic text-sm leading-relaxed">"{bio || "No bio available"}"</p>
                    <p className="text-[#94A3B8] text-xs mt-1 ">Preferred: {email}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <button className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-slate-100 text-[#64748B] font-bold text-sm hover:bg-slate-50 transition-all">
                        <IoNotificationsOffOutline size={18} /> Snooze 2 Weeks
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-slate-100 text-[#64748B] font-bold text-sm hover:bg-slate-50 transition-all">
                        <FiArchive size={17} /> Archive
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-slate-100 text-[#EF4444] font-bold text-sm hover:bg-red-50 transition-all">
                        <IoTrashOutline size={18} /> Delete
                    </button>
                </div>
            </div>

         
            <div className="flex-1 flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-3 lg:p-7 rounded-2xl shadow-sm border border-slate-100 text-center">
                        <h3 className="text-2xl lg:text-4xl font-bold text-[#334155]">{days_since_contact}</h3>
                        <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mt-2 line-clamp-2">Days Since Contact</p>
                    </div>
                    <div className="bg-white p-3 lg:p-7 rounded-2xl shadow-sm border border-slate-100 text-center">
                        <h3 className="text-2xl lg:text-4xl font-bold text-[#064E3B]">{goal_days || 30}</h3>
                        <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mt-2">Goal (Days)</p>
                    </div>
                    <div className="bg-white p-3 lg:p-7 rounded-2xl shadow-sm border border-slate-100 text-center">
                        <h3 className="text-xl md:text-sm lg:text-3xl font-bold text-[#334155] mt-2">{formatDate(next_due_date)}</h3>
                        <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mt-2">Next Due</p>
                    </div>
                </div>

                <div className="bg-white p-7  md:p-4 lg:p-7 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[#064E3B] font-bold text-lg">Relationship Goal</h4>
                        <button className="bg-[#F8FAFC] px-3 py-1.5 rounded-lg text-[10px] font-bold text-[#64748B] border border-slate-200 uppercase tracking-tighter hover:bg-slate-100 transition-colors">
                            Edit
                        </button>
                    </div>
                    <p className="text-[#475569] text-base">Connect every <span className="font-extrabold text-[#1E293B]">{goal_days || 30} days</span></p>
                </div>

                <div className="bg-white p-3 lg:p-7 rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="text-[#064E3B] font-bold text-lg mb-6">Quick Check-In</h4>
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <button  onClick={hendelCall} className="group flex flex-col items-center justify-center gap-3 bg-[#F8FAFC] p-4 lg:p-8 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300">
                            <div  className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                <FiPhone className="text-[#334155]" size={22} />
                            </div>
                            <span className="text-[#64748B] text-sm font-bold uppercase tracking-wide">Call</span>
                        </button>

                        <button onClick={hendelText} className=" group flex flex-col items-center justify-center gap-3 bg-[#F8FAFC] p-4 lg:p-8 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300">
                            <div  className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                <IoChatbubbleOutline className="text-[#334155]" size={22} />
                            </div>
                            <span  className="text-[#64748B] text-sm font-bold uppercase tracking-wide">Text</span>
                        </button>

                        <button onClick={hendelVideoCall} className="group flex flex-col items-center justify-center gap-3 bg-[#F8FAFC] p-4 lg:p-8 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300">
                            <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                <FiVideo className="text-[#334155]" size={22} />
                            </div>
                            <span  className="text-[#64748B] text-sm font-bold uppercase tracking-wide">Video</span>
                        </button>
                    </div>
                </div>

            </div>
          </div>    
        </div>
    );
};

export default FriendDetais;