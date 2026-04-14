import React from 'react';
import { Link } from 'react-router';

const ErroePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        
        <h1 className="text-9xl font-bold tracking-tight text-[#2D4F3F]">
          404
        </h1>
        
        
        <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page Not Found
        </p>
        
        
        <p className="mt-6 text-base leading-7 text-gray-600 max-w-md mx-auto">
          Looks like this friendship link is broken. The page you're looking for 
          doesn't exist or has been moved.
        </p>

        
        <Link to={'/'} className="mt-10 flex items-center justify-center gap-x-6">
          <button
             
            className="flex items-center gap-2 rounded-md bg-[#2D4F3F] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1f382c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D4F3F]"
          >
            
            Back to Home
          </button>
        </Link>
      </div>
    </main>
    );
};

export default ErroePage;