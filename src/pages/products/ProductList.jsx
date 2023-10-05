import React from 'react'
import "./prodcutlist.css"
import {DataGrid} from "@mui/x-data-grid"
import { Link } from 'react-router-dom'
import { DeleteOutline } from '@mui/icons-material'
import { productRows } from '../../dummyData'

const ProductList = () => {


  const columns =[
    {field:"id",headerName:"ID",width:90},
    {field:"product",headerName:"product",width:150,
       renderCell:(params)=>{
        return (
          <div className='productListproduct'>
            <img src={params.row.img} alt="" className='productListImg' />
            {params.row.name}
          </div>
        )
       }
  },
  {
    field:'stock',
    headerName:"Stock",
    width:150,
    editable:true,
  },
  {
    field:"status",
    headerName:"Status",
    width:150,
  },
  {
    field:"price",
    headerName:'Price',
    width:160,
  },
  {
    field:"action",
    headerName:"Action",
    width:150,
    renderCell:(params)=>{
      return (
        <>
         <Link to={"/product/"+params.row.id}>
           <button className='productListEdit'>Edit</button>
         </Link>
         <DeleteOutline className='productListDelete'/>
        </>
      )
    }
  }
  ]



  return (
    <div className='productlist'>
      <DataGrid
      rows={productRows}
      columns={columns}
      initialState={{
        pagination:{
          paginationModel:{
            pageSize:5,
          }
        }
      }}
      pageSizeOptions={5}
      checkboxSelection
      disableRowSelectionOnClick
      disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList