import React from 'react';
import Banner from '../../componet/homepage/Banner';
import TotalCount from '../../componet/homepage/TotalCount';
import Allfriends from '../../componet/homepage/Allfriends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <TotalCount></TotalCount>
            <Allfriends></Allfriends>
        </div>
    );
};

export default Homepage;