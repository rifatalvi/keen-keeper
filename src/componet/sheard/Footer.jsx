import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
      <footer className="bg-[#1D4734] text-white py-8 px-4 -mb-6">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        

        <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
          KeenKeeper
        </h1>
        

        <p className="max-w-md md:max-w-xl text-xs md:text-base text-gray-200 mb-6 opacity-80 leading-snug">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

     
        <div className="flex flex-col items-center gap-3 mb-8">
          <span className="text-sm md:text-lg font-medium">Social Links</span>
          <div className="flex gap-3">
            
        
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
              <FaInstagram size={18} className="text-[#1D4734]" />
            </div>

    
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
              <FaFacebookF size={18} className="text-[#1D4734]" />
            </div>

  
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
              <FaXTwitter size={18} className="text-[#1D4734]" />
            </div>

          </div>
        </div>
      </div>


      <div className="w-full border-t border-white/10 mb-6"></div>


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-400">
        
        <p className="order-2 md:order-1">
          © 2026 KeenKeeper. All rights reserved.
        </p>

        <div className="flex gap-4 md:gap-6 order-1 md:order-2">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        
      </div>
    </footer>
    );
};

export default Footer;