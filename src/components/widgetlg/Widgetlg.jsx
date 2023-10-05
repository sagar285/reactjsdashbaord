import React from 'react'
import "./widgetlg.css"

const Widgetlg = () => {
 
const imgurl ="https://media.licdn.com/dms/image/D5635AQGb70DV903RJQ/profile-framedphoto-shrink_100_100/0/1694881408802?e=1697094000&v=beta&t=1lGVjbs-dhnmI_Pqvyft0ZrN8l0Ax-tZ1gPGVdHrBJw"

  const Button =({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }



  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">
                    Latest Transactions
        </h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Stats</th>
          </tr>
          <tr className='widgetLgTr'>
             <td className="widgetLgUser">
              <img src={imgurl} alt="" className='widgetLgImg' />
              <span className="widgetLgName">Shivam Gupta</span>
             </td>
             <td className='widgetLgDate'> 5 october</td>
             <td className='widgetLgAmount'>₹5000</td>
             <td className='widgetLgStatus'> 
                <Button type={"Approved"}/>
             </td> 
          </tr>
          <tr className='widgetLgTr'>
             <td className="widgetLgUser">
              <img src={imgurl} alt="" className='widgetLgImg' />
              <span className="widgetLgName">Shivam Gupta</span>
             </td>
             <td className='widgetLgDate'> 5 october</td>
             <td className='widgetLgAmount'>₹5000</td>
             <td className='widgetLgStatus'> 
                <Button type={"Decline"}/>
             </td> 
          </tr>
          <tr className='widgetLgTr'>
             <td className="widgetLgUser">
              <img src={imgurl} alt="" className='widgetLgImg' />
              <span className="widgetLgName">Shivam Gupta</span>
             </td>
             <td className='widgetLgDate'> 5 october</td>
             <td className='widgetLgAmount'>₹5000</td>
             <td className='widgetLgStatus'> 
                <Button type={"Pending"}/>
             </td> 
          </tr>
        </table>
    </div>
  )
}

export default Widgetlg