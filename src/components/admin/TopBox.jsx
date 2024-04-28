import React from 'react'
import { topDealUsers } from '../../data/dataAdminDashboard'

const TopBox = () => {
  return (
    <div className='topBox'>
        <h2 className='mb-5'>Top Deals</h2>
        <div className="list">
            {topDealUsers.map((user) => (
                <div className='listItem flex items-center justify-between mb-8' key={user.id}>
                    <div className="user flex gap-5">
                        <img src={user.img} alt="" className='w-10 h-10 rounded-full object-cover'/>
                        <div className="userText flex flex-col gap-1">
                            <span className="username text-sm font-medium">{user.username}</span>
                            <span className="email text-xs">{user.email}</span>
                        </div>
                    </div>
                    <span className='amount font-medium'>€{user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopBox