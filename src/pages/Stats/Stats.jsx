import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Stats = () => {
  const { text, call, videoCall } = useContext(FriendsContext);

  const data = [
    { name: "Call", value: call.length, fill: "#244D3F" },
    { name: "Text", value: text.length, fill: "#7E35E1" },
    { name: "Video", value: videoCall.length, fill: "#37A163" },
  ];

  return (
    <div className="p-10  bg-[#F4F7F9] flex justify-center min-h-screen ">
     <div className='w-full flex flex-col items-center '>
        
      <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Friendship Analytics</h2>

      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-6xl w-full">
        <h3 className="text-[#244D3F] font-semibold text-lg mb-4">By Interaction Type</h3>

        <div className="flex flex-col items-center justify-center h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="65%" 
                outerRadius="85%"
                paddingAngle={8}    
                cornerRadius={10}   
                dataKey="value"
                startAngle={90}    
                endAngle={450}
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
              <Legend 
                verticalAlign="bottom" 
                align="center"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
                />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
                </div> 
    </div>
  );
};

export default Stats;