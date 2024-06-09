import React from 'react'
import { Link } from "react-router-dom";

export default function FooterNavigate({currentPageName}) {
    return (

        <div className='flex items-center justify-center h-[15vh] w-full'>
                {currentPageName} <span className='ml-2 mr-2'>|</span>
       
            <Link to="/home" className='hover:text-customGold'>
                Home
            </Link>
        </div>
    )
}
