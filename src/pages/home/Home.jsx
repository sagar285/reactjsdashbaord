 import React from 'react'
 import "./home.css"
 import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
 import Widgetsm from '../../components/widgetsm/Widgetsm' 
 import Chart from '../../components/charts/Chart'
import { userData } from '../../dummyData'
import Widgetlg from '../../components/widgetlg/Widgetlg'

 
 const Home = () => {
   return (
     <div className="home">
        <Featuredinfo/>
        <Chart data={userData} title={"userAnalytics"} grid dataKey={"Active User"}/>
        <div className='homeWidgets'>
              <Widgetsm/>
              <Widgetlg/>
         </div>
     </div>
   )
 }
 
 export default Home