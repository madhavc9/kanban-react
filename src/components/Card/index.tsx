import React from 'react';
import './card.css'
import UserIcon from '../UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { Ticket, User } from '../../interfaces';
import { getStatusIcon } from '../../utils/helper';
/* 21BCE3239 */

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }: { ticket: Ticket, userData: User, hideStatusIcon: boolean, hideProfileIcon: boolean }) {
  return (
    <div className='card'>
      {/* 21BCE3239 */}
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        {/* 21BCE3239 */}
        <div className='more-icon-container'>
          <LuMoreHorizontal color="#797d84" />
        </div>

        {/* 21BCE3239 */}
        {ticket.tag.map((t: string) => (
          <div key={t} className='tag-container'>
            <div className='label-icon'></div>
            <div className='label-text'>{t}</div>
          </div>
        ))}

        {/* 21BCE3239 */}
      </div>
    </div>
  );
}

export default Card;