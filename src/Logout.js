import React from 'react';

const Logout = () => {

    console.log("IN Dashboard :::: ");

    return (
        <div>
          Hello Dashboard!
            <button 
            // onClick={handleRoute}
            className={`bg-blue py-2 px-4 text-sm text-white rounded border border-blue focus:outline-none focus:border-blue-dark`}>
                LogOut
            </button>
        </div>
    )
}

export default Logout;

