import React, { useState , useEffect } from 'react';
import { Transition } from '@headlessui/react'; // Using Headless UI for transitions

import pic from "../../assets/IMG_20180616_192553_251.jpg"

function DoorAnimation  ()  {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the animation once when the component is mounted
    setIsOpen(true);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden">
      <div className="absolute w-1/2 h-full transition-transform duration-1000"
        style={{ transform: isOpen ? 'translateX(-80\%)' : 'translateX(0)' }}>
        <img src={pic} alt="Left Half" className="w-full h-full object-cover" style={{ clipPath: 'inset(0 50% 0 0)' }} />
      </div>
      <div className="absolute right-0 w-1/2 h-full transition-transform duration-1000"
        style={{ transform: isOpen ? 'translateX(80%)' : 'translateX(0)' }}>
        <img src={pic} alt="Right Half" className="w-full h-full object-cover" style={{ clipPath: 'inset(0 0 0 50%)' }} />
      </div>
    </div>
  );
};

export default DoorAnimation;
