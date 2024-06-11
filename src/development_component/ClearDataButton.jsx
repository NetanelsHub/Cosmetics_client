import React from 'react';

export default function ClearDataButton() {

  const clearCookies = () => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  };

  const clearAllData = () => {
    // Clear localStorage
    localStorage.clear();

    // Clear sessionStorage
    sessionStorage.clear();

    // Clear cookies
    clearCookies();

    // Optionally, you can add a message to confirm the data was cleared
    alert('Local storage, session storage, and cookies have been cleared.');
  };

  return (
    <div className='pl-5'>
    <button
      onClick={clearAllData}
      className=" bg-red-500 text-white px-4 py-2 rounded"
    >
      Clear All Data
    </button>
    </div>
  );
}
