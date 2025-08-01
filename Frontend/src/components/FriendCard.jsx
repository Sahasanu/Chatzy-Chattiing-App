import user from '../assets/user.svg'
import message from '../assets/message.svg'
import { Link } from 'react-router'
import location from '../assets/location.png'
function FriendCard({friend}) {
    
    return (
        <div>
            <div className="Friendcard border p-2  rounded-[5px]">
                <div className='  flex  items-center gap-3   '>
                    <img src={friend.profilePic||user} alt="" className='w-[50px]' />
                    <div className=''>
                        <p className='text-[20px] overflow-hidden'>{friend.fullName}</p>
                        <p className='text-[15px] flex items-center gap-1'><img src={location} className='w-[15px]' alt="" />{friend.location}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-2'>
                    <Link to={`/chat/${friend._id}`} className='px-2 py-1 w-full text-center bg-blue-500 rounded-[5px] '>Messege</Link>

                </div>
            </div>
        </div>
    )
}

export default FriendCard
