import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';

const FriendsProps = ({children}) => {
       const [text,setText] =useState([]);
       const [call,setCall] =useState([]);
       const [videoCall,setVideoCall] =useState([]);
    const data = {

        text,
        call,
        videoCall,
        setCall,
        setText,
        setVideoCall
    }
    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProps;