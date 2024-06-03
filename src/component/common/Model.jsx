import { useContext, useState } from 'react';
import { globalContext } from '../../utils/GlobalContext';


export default function Model({ children, onClick, show }) {
  // const { showModel } = useContext(globalContext);


  return (

    <div className="overflow-x-auto">
      {console.log("show:",show)}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-6 rounded-lg max-w-3xl w-auto h-auto mx-auto">
            <button
              onClick={onClick}
              className="absolute top-0 right-0 m-2 p-0 text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
            {/* Modal content goes here */}

            {children}
          </div>
        </div>
      )}
    </div>
  );
}
