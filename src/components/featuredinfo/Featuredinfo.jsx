import React from 'react'
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const Featuredinfo = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="faturedMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4
              <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="faturedMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4
              <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="faturedMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4
              <ArrowUpward className="featuredIcon"/>
            </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  )
}

export default Featuredinfo