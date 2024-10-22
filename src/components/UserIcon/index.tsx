import React from 'react';
import './usericon.css'
// 21BCE3239
function UserIcon({ name, available }: { name: string, available: boolean }) {
    const text = React.useMemo(() => {
        return name.split(" ").map((item: string) => item[0]).join("");
    }, [name]);
// 21BCE3239
    return (
        <div className='usericon-container'>
            <div className='usericon-text'>{text}</div>
            <div className={`user-status ${available && "available"}`}></div>
        </div>
    );
}
// 21BCE3239
export default UserIcon;