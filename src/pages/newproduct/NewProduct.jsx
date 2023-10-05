import React from 'react'
import "./newproduct.css"

const NewProduct = () => {
  return (
    <div className='newproduct'>
        <h1 className="addProductTitle">New Product</h1>
        <form  className="addProductForm">
            <div className="addProductItem">
                <label >Images</label>
                <input type="file" id='file' />
            </div>
            <div className="addProductItem">
                <label >Name</label>
                <input type="text" placeholder='name'  />
            </div>
            <div className="addProductItem">
                <label >Stock</label>
                <input type="text" id='file' placeholder='yes' />
            </div>
            <div className="addProductItem">
               <label >Active</label>
               <select name="active" id="ctive">
                <option value="yes">Yes</option>
                <option value="no">no</option>
               </select>
            </div>
          <button className='addProductButton'>Create</button>
        </form>
    </div>
  )
}

export default NewProduct