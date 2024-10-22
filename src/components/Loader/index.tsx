import React from 'react';
import './loader.css'
// 21BCE3239
function Loader({ fullscreen = true }: { fullscreen?: boolean }) {
    return (
        <div className={`loader-container ${fullscreen && "fullscreen"}`}>
            <span className='loader'>Loading...</span>
        </div>
    );
}
// 21BCE3239

export default Loader;
// 21BCE3239