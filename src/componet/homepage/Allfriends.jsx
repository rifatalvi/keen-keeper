import React from 'react';
import useFriends from '../../hooks/useFriends';
import FriendCard from '../ui/FriendCard';
import { MoonLoader } from 'react-spinners';

const Allfriends = () => {
    const{friends,loading} = useFriends()
    
    if (loading) {
            return <div className="min-h-screen flex justify-center items-center"><MoonLoader /></div>;
        }
    return (
        <div className='container mx-auto w-[90%] my-8'>
            <h2 className='font-bold text-2xl my-5'>Your Friends</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    friends.map((friend,index) => <FriendCard key={index} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default Allfriends;