import React from 'react'
import "./topbar.css"
import { Language, NotificationsNone, Settings } from '@mui/icons-material'

const Topbar = () => {
    const imgurl ="https://images.pexels.com/photos/18201338/pexels-photo-18201338/free-photo-of-redhead-woman-on-rock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Simplyjs Admin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src={imgurl} alt="" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}

export default Topbar