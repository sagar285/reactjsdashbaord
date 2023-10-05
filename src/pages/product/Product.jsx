import React from 'react'
import "./product.css"
import Chart from '../../components/charts/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Product = () => {
    const imgurl ="https://images.pexels.com/photos/3250815/pexels-photo-3250815.jpeg?auto=compress&cs=tinysrgb&w=600"
    const imgurl2 ="https://images.pexels.com/photos/7989067/pexels-photo-7989067.jpeg?auto=compress&cs=tinysrgb&w=600"
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to={"/newproduct"}>
            <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
            <div className='productTopLeft'>
                <Chart data={productData} dataKey={"Sales"} title={"Sale perfomance"}/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={imgurl} alt="img" className='productInfoImg' />
                    <span className='productName'>Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className='productInfoKey'>id:</span>
                        <span className='productInfoValue'>123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>id:</span>
                        <span className='productInfoValue'>1223</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>id:</span>
                        <span className='productInfoValue'>323</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>id:</span>
                        <span className='productInfoValue'>423</span>
                    </div>
                </div>
            </div>
        </div>
             <div className='productBottom'>
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Airpod' />
                        <label >In Stock</label>
                        <select name='inStock' id='idStock'>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name='active' id='active'>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                    </div>

               <div className="productFormRight">
                <div className="productUpload">
                    <img src={imgurl2} alt="img" className='productUploadimg' />
                    <label for="file">
                        <Publish/>
                    </label>
                    <input type="file" id='file' style={{display:"none"}} />
                </div>
                <button className='productButton'>Update</button>
               </div>
                </form>
             </div>

    </div>
  )
}

export default Product