import { useState } from 'react';
import { useLocation } from 'react-router';
import useAuthUser from '../hooks/useAuthUser';

import noti from '../assets/noti.svg';
import message from '../assets/message.svg';
import call from '../assets/call.svg';
import friends from '../assets/freinds.png';

import Chatlist from './Chatlist';
import Notification from './Notification';
import Friends from './Friends';

function Sidebar({ isMobile = false }) {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeTab, setActiveTab] = useState('chat');
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  const [pendingFriendCount, setPendingFriendCount] = useState(0);

  const getBtnClass = (tab) =>
    `relative w-[25%] flex justify-center items-center rounded-2xl py-1 transition ${activeTab === tab ? 'bg-[#4b5757ab] border border-[#505c5c]' : ''
    }`;

  let activeContent;
  if (activeTab === 'chat') activeContent = <Chatlist setUnreadMessageCount={setUnreadMessageCount} />;
  else if (activeTab === 'call') activeContent = <Friends setPendingFriendCount={setPendingFriendCount} />;
  else if (activeTab === 'noti') activeContent = <Notification setUnreadNotificationCount={setUnreadNotificationCount} />;

  return (
    <div className={`sidebar h-[85vh] ${isMobile ? 'flex flex-col ' : ''}`}>


      {/* Tabs at bottom (for mobile) */}
      <div className={`btns ${isMobile ? 'absolute bottom-0 left-0 right-0 z-10  bg-gray-700 border-t' : 'mt-[5px]'}  bg-gray-800 rounded-[5px] flex px-5 py-2 justify-between items-center h-[6vh]  border-[#3342578c]`}>

        {/* Content Area */}
        {/* Chat Tab */}
        <div className={getBtnClass('chat')} onClick={() => setActiveTab('chat')}>
          <img src={message} alt="Messages" />
          {unreadMessageCount > 0 && (
            <span className="absolute top-0 right-0 -translate-x-[20px] -translate-y-[15%] bg-green-400 text-black text-xs font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {unreadMessageCount}
            </span>
          )}
        </div>

        {/* Friends Tab */}
        <div className={getBtnClass('call')} onClick={() => setActiveTab('call')}>
          <img src={friends} className="w-[25px]" alt="Friends" />
          {pendingFriendCount > 0 && (
            <span className="absolute top-0 right-0 -translate-x-[20px] -translate-y-[15%] bg-green-400 text-black text-xs font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {pendingFriendCount}
            </span>
          )}
        </div>

        {/* Notification Tab */}
        <div className={getBtnClass('noti')} onClick={() => setActiveTab('noti')}>
          <img src={noti} alt="Notifications" />
          {unreadNotificationCount > 0 && (
            <span className="absolute top-0 right-0 -translate-x-[20px] -translate-y-[15%] bg-green-400 text-black text-xs font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {unreadNotificationCount}
            </span>
          )}
        </div>
      </div>
      <div className={`sidebar-content  ${isMobile ? 'pb-[0px]' : 'mt-[px]'}`}>
        {activeContent}
      </div>
    </div>
  );
}

export default Sidebar;
