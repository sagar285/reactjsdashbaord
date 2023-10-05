import React from 'react'
import "./user.css"
import {Link} from "react-router-dom"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'

const User = () => {
    const imgurl ="https://avatars.githubusercontent.com/u/96648429?v=4"
    const imgurl2="https://images.pexels.com/photos/4939592/pexels-photo-4939592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to={"/newuser"}>
            <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={imgurl} alt="img" className='userShowImg'/>
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Sagar gupta</span>
                        <span className="userShowUserTitle">Software Developer</span>
                    </div>
                </div>

                <div className="userShowBottom">
                    <span className="userShowTitle">Account Deatils</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span>sagar gupta</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span>05.10.2023</span>
                    </div>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span>+91 8120763387</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span>simplyjs82@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span>Umariya Indore</span>
                    </div>
                </div>
            </div>
        

        <div className='userUpdate'>
               <span className='userUpdateTitle'>Edit</span>
               <form className='userUpdateForm'>
                <div className='userUpdateLeft'>
                   <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text" placeholder='user@1234' className='userUpdateInput' />
                   </div>
                   <div className="userUpdateItem">
                    <label>Full name</label>
                    <input type="text" placeholder='sagargupta' className='userUpdateInput' />
                   </div>
                   <div className="userUpdateItem">
                    <label>Email</label>
                    <input type="text" placeholder='sagargupta@gmail.com' className='userUpdateInput' />
                   </div>
                   <div className="userUpdateItem">
                    <label>Phone</label>
                    <input type="text" placeholder='+91 4983444' className='userUpdateInput' />
                   </div>
                   <div className="userUpdateItem">
                    <label>Address</label>
                    <input type="text" placeholder='bhind M.P.' className='userUpdateInput' />
                   </div>
                </div>


                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={imgurl2} alt="img" className='userUpdateImg' />
                            <label htmlFor='file'>
                                <Publish className='userUpdateIcon'/>
                                <input type="file" id='file' style={{display:"none"}} />
                            </label>
                        </div>
                        <button className='userUpdateButton'>
                            Update
                        </button>

                    </div>


               </form>

        </div>


        </div>
    </div>
  )
}

export default User