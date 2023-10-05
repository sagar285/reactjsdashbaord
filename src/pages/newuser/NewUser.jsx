import React from 'react'

import "./newuser.css"

const NewUser = () => {
  return (
    <div className='newuser'>
        <h1 className="newUserTitle">
            New User
        </h1>
    <form  className="newuserform">
        <div className="newuserItem">
            <label >Username</label>
            <input type="text" placeholder='sagar'/>
        </div>
        <div className="newuserItem">
            <label >Full Name</label>
            <input type="text" placeholder='sagar gupta'/>
        </div>
        <div className="newuserItem">
            <label >Email</label>
            <input type="text" placeholder='sagar@gmail.com'/>
        </div>

        <div className="newuserItem">
            <label >Password</label>
            <input type="password" placeholder='........'/>
        </div>
        <div className="newuserItem">
            <label >Phone</label>
            <input type="text" placeholder='+91 239394348'/>
        </div>
        <div className="newuserItem">
            <label >Address</label>
            <input type="text" placeholder='Bhind India'/>
        </div>
        <div className="newuserItem">
            <label >Gender</label>
          <div className="newuserGender">
            <input type="radio" name='gender'id='male' value={"male"} />
            <label for="male">Male</label>
            <input type="radio" name='gender'id='female' value={"female"} />
            <label for="female">FeMale</label>
            <input type="radio" name='gender'id='other' value={"other"} />
            <label for="other">Other</label>
          </div>
        </div>

           <div className="newuserItem">
            <label >Active</label>
            <select name="active" className='newuserSelect' id="active">  
             <option value="yes">Yes</option>
             <option value="no">No</option>
            </select>
           </div>
             <button className='newUserButton'>Create</button>
    </form>
    </div>
  )
}

export default NewUser