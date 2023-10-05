import React from 'react'
import "./widgetsm.css"
import { Visibility } from '@mui/icons-material'

const Widgetsm = () => {
  const imgurl="https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className='widgetsm'>
      <span className="widgetsmTitle">New Join Members</span>
      <ul className='widgetsmList'>
        <li className='widgetsmListItem'>
          <img src={imgurl} alt="img" className='widgetsmImg' />
          <div className='widgetsmUser'>
            <span className="widgetsmUsername">Sagar Gupta</span>
            <span className="widgetsmUserTitle">Software Developer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetsmIcon'/>
          </button>
        </li>
        <li className='widgetsmListItem'>
          <img src={imgurl} alt="img" className='widgetsmImg' />
          <div className='widgetsmUser'>
            <span className="widgetsmUsername">Sagar Gupta</span>
            <span className="widgetsmUserTitle">Software Developer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetsmIcon'/>
          </button>
        </li>
        <li className='widgetsmListItem'>
          <img src={imgurl} alt="img" className='widgetsmImg' />
          <div className='widgetsmUser'>
            <span className="widgetsmUsername">Sagar Gupta</span>
            <span className="widgetsmUserTitle">Software Developer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetsmIcon'/>
          </button>
        </li>
        <li className='widgetsmListItem'>
          <img src={imgurl} alt="img" className='widgetsmImg' />
          <div className='widgetsmUser'>
            <span className="widgetsmUsername">Sagar Gupta</span>
            <span className="widgetsmUserTitle">Software Developer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetsmIcon'/>
          </button>
        </li>
      </ul>

    </div>
  )
}

export default Widgetsm