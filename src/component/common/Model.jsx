import { useContext, useState } from 'react';
import { shoppingContext} from '../../utils/ShoppingContext';


export default function Model({ children, onClick, show }) {
  const { showModelProduct } = useContext(shoppingContext);


  return (
// h-auto ml-0 w-full md:w-1/3
    <div className="overflow-x-auto">
      {/* {console.log("show:",show)} */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"  onClick={onClick} ></div>
          <div className={`relative bg-white p-6 rounded-lg max-w-3xl w-auto 
          ${!showModelProduct ?
          "h-[100vh] w-full md:w-1/3 mx-auto ml-0" : "h-auto"}
          `}>
         <div className="flex justify-end p-2">
          <button onClick={onClick} className="text-black text-2xl hover:text-red-500">
            &times;
          </button>
        </div>
            {/* Modal content goes here */}

            {children}
          </div>
        </div>
      )}
    </div>
  );
}
